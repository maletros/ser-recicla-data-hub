
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MaterialStats {
  tipoResiduo: string;
  quantidade: number;
}

interface TotalMaterialCardProps {
  data: MaterialStats[];
  meta: Record<string, number>;
}

export function TotalMaterialCard({ data, meta }: TotalMaterialCardProps) {
  const getMaterialName = (tipo: string): string => {
    const names: Record<string, string> = {
      aluminio: "Alumínio",
      vidro: "Vidro",
      pano: "Pano",
      pet: "PET",
    };
    return names[tipo] || tipo;
  };

  const getPercentage = (tipo: string): number => {
    const material = data.find((m) => m.tipoResiduo === tipo);
    const quantidade = material ? material.quantidade : 0;
    const metaValue = meta[tipo] || 1;
    return Math.min(100, (quantidade / metaValue) * 100);
  };

  const getMaterialQtd = (tipo: string): number => {
    const material = data.find((m) => m.tipoResiduo === tipo);
    return material ? material.quantidade : 0;
  };

  const formatWeight = (value: number, digits = 2): string => {
    return `${value.toFixed(digits)} kg`;
  };

  return (
    <Card className="col-span-12">
      <CardHeader>
        <CardTitle>Metas por Material</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.keys(meta).map((tipo) => (
          <div key={tipo} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{getMaterialName(tipo)}</span>
              <span className="text-sm text-muted-foreground">
                {formatWeight(getMaterialQtd(tipo))} de {formatWeight(meta[tipo])}
              </span>
            </div>
            <Progress value={getPercentage(tipo)} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
