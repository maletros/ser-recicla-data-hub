
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { TotalMaterialCard } from "@/components/dashboard/total-material-card";
import { ComparativeChart } from "@/components/dashboard/comparative-chart";
import { EvolutionChart } from "@/components/dashboard/evolution-chart";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Dashboard() {
  const [materialStats, setMaterialStats] = useState([]);
  const [comparativeStats, setComparativeStats] = useState([]);
  const [evolutionData, setEvolutionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const materialMetas = {
    aluminio: 50,
    pet: 75,
    vidro: 40,
    pano: 30,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        // Buscar estatísticas por material
        const { data: materialData } = await supabase
          .from("entregas")
          .select("tipo_residuo, quantidade");
        
        const stats = materialData.reduce((acc, curr) => {
          const existing = acc.find(item => item.tipoResiduo === curr.tipo_residuo);
          if (existing) {
            existing.quantidade += curr.quantidade;
          } else {
            acc.push({ tipoResiduo: curr.tipo_residuo, quantidade: curr.quantidade });
          }
          return acc;
        }, []);
        
        setMaterialStats(stats);

        // Buscar dados comparativos por unidade
        const { data: unidadeData } = await supabase
          .from("entregas")
          .select("unidade, tipo_residuo, quantidade");

        const unidadeStats = unidadeData.reduce((acc, curr) => {
          const unit = acc.find(u => u.nome === curr.unidade);
          if (unit) {
            unit[curr.tipo_residuo] += curr.quantidade;
          } else {
            acc.push({
              nome: curr.unidade,
              aluminio: curr.tipo_residuo === "aluminio" ? curr.quantidade : 0,
              pet: curr.tipo_residuo === "pet" ? curr.quantidade : 0,
              vidro: curr.tipo_residuo === "vidro" ? curr.quantidade : 0,
              pano: curr.tipo_residuo === "pano" ? curr.quantidade : 0,
            });
          }
          return acc;
        }, []);

        setComparativeStats(unidadeStats);

        // Buscar dados de evolução
        const { data: evolutionStats } = await supabase
          .from("entregas")
          .select("created_at, quantidade, tipo_residuo")
          .order("created_at", { ascending: true });

        const weeklyData = evolutionStats.map(item => ({
          data: format(new Date(item.created_at), "dd/MM", { locale: ptBR }),
          quantidade: item.quantidade,
          tipo_residuo: item.tipo_residuo
        }));

        setEvolutionData(weeklyData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setLoading(false);
      }
    }

    fetchData();

    // Subscrever para atualizações em tempo real
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "entregas"
        },
        () => {
          fetchData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-[400px] bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Acompanhamento em tempo real das coletas de material reciclável
        </p>
      </div>

      <div className="grid gap-4 grid-cols-12">
        <TotalMaterialCard data={materialStats} meta={materialMetas} />
        <ComparativeChart 
          data={comparativeStats} 
          title="Comparativo por Unidade" 
        />
        <EvolutionChart data={evolutionData} />
      </div>
    </div>
  );
}
