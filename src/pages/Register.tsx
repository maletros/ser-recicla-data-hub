
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const TIPO_RESIDUO = [
  { label: "Alumínio", value: "aluminio" },
  { label: "PET", value: "pet" },
  { label: "Vidro", value: "vidro" },
  { label: "Pano", value: "pano" },
];

const CURSOS = [
  "Engenharia Ambiental",
  "Ciência da Computação",
  "Sistemas de Informação",
];

const TURMAS = [
  "CC-A",
  "CC-B",
  "SI-A",
];

const SEMESTRES = [
  "1º Semestre",
  "2º Semestre",
  "3º Semestre",
];

const TURNOS = [
  { label: "Matutino", value: "matutino" },
  { label: "Vespertino", value: "vespertino" },
  { label: "Noturno", value: "noturno" },
  { label: "Integral", value: "integral" },
];

const UNIDADES = [
  "Unama Alcindo Cacela",
  "Unama Ananindeua",
  "Unama Parque Shopping",
];

export default function Register() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    quantidade: "",
    tipo_residuo: "",
    curso: "",
    turma: "",
    semestre: "",
    turno: "",
    unidade: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Validar campos principais
    const quantidade = parseFloat(form.quantidade.replace(",", "."));
    if (
      !quantidade || quantidade <= 0 || quantidade > 100 ||
      !form.tipo_residuo ||
      !form.curso ||
      !form.turma ||
      !form.semestre ||
      !form.turno ||
      !form.unidade
    ) {
      toast({
        title: "Formulário inválido",
        description: "Preencha todos os campos corretamente. Quantidade deve ser entre 0,01 e 100.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("entregas").insert({
      quantidade,
      tipo_residuo: form.tipo_residuo,
      curso: form.curso,
      turma: form.turma,
      semestre: form.semestre,
      turno: form.turno,
      unidade: form.unidade,
    });

    if (error) {
      toast({
        title: "Erro ao registrar entrega",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Entrega registrada!",
        description: "Os dados foram salvos com sucesso.",
      });
      setForm({
        quantidade: "",
        tipo_residuo: "",
        curso: "",
        turma: "",
        semestre: "",
        turno: "",
        unidade: "",
      });
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Registrar Entrega</h1>
        <p className="text-lg text-muted-foreground">Adicione um novo registro de material reciclável</p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-card border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Formulário de Registro</h2>
          <p className="text-muted-foreground mb-6">
            Use este formulário para registrar entregas de materiais recicláveis nas unidades Unama.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="quantidade">Quantidade (kg)</label>
                <Input
                  type="number"
                  id="quantidade"
                  name="quantidade"
                  inputMode="decimal"
                  step="0.01"
                  placeholder="Ex: 2.5"
                  max={100}
                  min={0.01}
                  value={form.quantidade}
                  onChange={handleChange}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground mt-1">Peso em quilogramas (máx. 100kg)</p>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="tipo_residuo">Tipo de resíduo</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  id="tipo_residuo"
                  name="tipo_residuo"
                  value={form.tipo_residuo}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Selecione...</option>
                  {TIPO_RESIDUO.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground mt-1">Material reciclável</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="curso">Curso</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  id="curso"
                  name="curso"
                  value={form.curso}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Selecione...</option>
                  {CURSOS.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="turma">Turma</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  id="turma"
                  name="turma"
                  value={form.turma}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Selecione...</option>
                  {TURMAS.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="semestre">Semestre</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  id="semestre"
                  name="semestre"
                  value={form.semestre}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Selecione...</option>
                  {SEMESTRES.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="turno">Turno</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  id="turno"
                  name="turno"
                  value={form.turno}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Selecione...</option>
                  {TURNOS.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="unidade">Unidade</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                id="unidade"
                name="unidade"
                value={form.unidade}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="">Selecione...</option>
                {UNIDADES.map((op) => (
                  <option key={op} value={op}>{op}</option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrar entrega"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
