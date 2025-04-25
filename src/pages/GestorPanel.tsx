
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function GestorPanel() {
  const navigate = useNavigate();

  // Verifica sessão
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session || !session.user) {
        navigate("/auth-gestor");
      }
    });
  }, [navigate]);

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
      
      <Dashboard />
    </div>
  );
}
