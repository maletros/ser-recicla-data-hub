
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export default function GestorPanel() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [entregas, setEntregas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState<any>(null); // entrega sendo editada

  // Verifica sessão
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session || !session.user) {
        navigate("/auth-gestor");
      }
    });
  }, [navigate]);

  async function fetchEntregas() {
    setLoading(true);
    const { data, error } = await supabase
      .from("entregas")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erro ao buscar entregas", description: error.message, variant: "destructive" });
      setEntregas([]);
    } else {
      setEntregas(data);
    }
    setLoading(false);
  }

  useEffect(() => { fetchEntregas(); }, []);

  // CRUD handlers
  async function handleDelete(id: string) {
    if (!window.confirm("Tem certeza que deseja remover esta entrega?")) return;
    const { error } = await supabase.from("entregas").delete().eq("id", id);
    if (!error) {
      toast({ title: "Entrega removida", description: "A entrega foi deletada." });
      fetchEntregas();
    } else {
      toast({ title: "Erro ao remover", description: error.message, variant: "destructive" });
    }
  }

  async function handleEditSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!edit) return;
    const { id, ...rest } = edit;
    rest.quantidade = parseFloat(rest.quantidade);
    const { error } = await supabase.from("entregas").update(rest).eq("id", id);
    if (!error) {
      toast({ title: "Entrega atualizada" });
      setEdit(null);
      fetchEntregas();
    } else {
      toast({ title: "Erro ao atualizar", description: error.message, variant: "destructive" });
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Painel do Gestor</h1>
        <Button
          variant="secondary"
          onClick={async () => {
            await supabase.auth.signOut();
            navigate("/auth-gestor");
          }}
        >Sair</Button>
      </div>
      {loading ? (
        <div className="text-center py-10">Carregando entregas...</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Qtd (kg)</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Turma</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead>Semestre</TableHead>
                <TableHead>Turno</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entregas.map((item: any) => (
                <TableRow key={item.id}>
                  {edit?.id === item.id ? (
                    <>
                      <TableCell><Input name="quantidade" type="number" step="0.01" value={edit.quantidade} onChange={e => setEdit((ed: any) => ({ ...ed, quantidade: e.target.value }))} /></TableCell>
                      <TableCell><Input name="tipo_residuo" value={edit.tipo_residuo} onChange={e => setEdit((ed: any) => ({ ...ed, tipo_residuo: e.target.value }))} /></TableCell>
                      <TableCell><Input name="turma" value={edit.turma} onChange={e => setEdit((ed: any) => ({ ...ed, turma: e.target.value }))} /></TableCell>
                      <TableCell><Input name="curso" value={edit.curso} onChange={e => setEdit((ed: any) => ({ ...ed, curso: e.target.value }))} /></TableCell>
                      <TableCell><Input name="semestre" value={edit.semestre} onChange={e => setEdit((ed: any) => ({ ...ed, semestre: e.target.value }))} /></TableCell>
                      <TableCell><Input name="turno" value={edit.turno} onChange={e => setEdit((ed: any) => ({ ...ed, turno: e.target.value }))} /></TableCell>
                      <TableCell><Input name="unidade" value={edit.unidade} onChange={e => setEdit((ed: any) => ({ ...ed, unidade: e.target.value }))} /></TableCell>
                      <TableCell>{new Date(item.created_at).toLocaleString()}</TableCell>
                      <TableCell className="flex gap-2">
                        <Button size="sm" onClick={handleEditSubmit}>Salvar</Button>
                        <Button size="sm" variant="outline" onClick={() => setEdit(null)}>Cancelar</Button>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{item.quantidade}</TableCell>
                      <TableCell>{item.tipo_residuo}</TableCell>
                      <TableCell>{item.turma}</TableCell>
                      <TableCell>{item.curso}</TableCell>
                      <TableCell>{item.semestre}</TableCell>
                      <TableCell>{item.turno}</TableCell>
                      <TableCell>{item.unidade}</TableCell>
                      <TableCell>{new Date(item.created_at).toLocaleString()}</TableCell>
                      <TableCell className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setEdit(item)}>Editar</Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>Excluir</Button>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
