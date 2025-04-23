
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function AuthGestor() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [view, setView] = useState<"login" | "signup">("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    nome: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session && session.user) {
        navigate("/painel-gestor");
      }
    });
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);
    if (error) {
      toast({
        title: "Erro ao entrar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      navigate("/painel-gestor");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          name: form.nome,
        },
      },
    });
    setLoading(false);
    if (error) {
      toast({
        title: "Erro ao cadastrar",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Cadastro realizado!",
        description: "Verifique seu email para confirmar o cadastro.",
      });
      setView("login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-primary text-center">
          Gestor - {view === "login" ? "Entrar" : "Cadastro"}
        </h1>
        <form onSubmit={view === "login" ? handleLogin : handleSignup} className="space-y-4">
          {view === "signup" && (
            <div>
              <label className="text-sm font-medium" htmlFor="nome">Nome</label>
              <Input
                type="text"
                id="nome"
                name="nome"
                autoComplete="name"
                required
                value={form.nome}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          )}
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              value={form.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Aguarde..." : view === "login" ? "Entrar" : "Cadastrar"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          {view === "login" ? (
            <>
              <span>Não tem cadastro? </span>
              <button onClick={() => setView("signup")} className="text-blue-600 underline">Cadastrar</button>
            </>
          ) : (
            <>
              <span>Já possui cadastro? </span>
              <button onClick={() => setView("login")} className="text-blue-600 underline">Entrar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
