
import React from "react";

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">Ser Recicla - Dashboard</h1>
        <p className="text-lg text-muted-foreground mb-8">Sistema de Aquisição de Dados do Projeto Ser Recicla</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Registrar Material</h2>
            <p className="text-muted-foreground mb-4">
              Registre as entregas de materiais recicláveis das turmas
            </p>
            <a 
              href="/registrar" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Registrar Agora
            </a>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Documentação da API</h2>
            <p className="text-muted-foreground mb-4">
              Consulte a documentação completa da API RESTful
            </p>
            <a 
              href="/api-docs" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Ver Documentação
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 border rounded-lg max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Projeto Ser Recicla</h2>
          <p className="text-muted-foreground mb-2">
            Em preparação para a COP 30 em Belém (2025), o Projeto Ser Recicla une educação, 
            tecnologia e sustentabilidade para incentivo à reciclagem nas unidades da Unama.
          </p>
          <p className="text-muted-foreground">
            Desenvolvido durante a Semana Ubíqua como solução digital para monitoramento e 
            gestão da coleta de resíduos recicláveis.
          </p>
        </div>
      </div>
    </div>
  );
}
