
import React from "react";

export default function ApiDocs() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Documentação da API</h1>
        <p className="text-lg text-muted-foreground">Integre seus sistemas com a API do Projeto Ser Recicla</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">API RESTful</h2>
          <p className="text-muted-foreground">
            Esta API permite o gerenciamento de entradas de materiais recicláveis para o Projeto Ser Recicla. 
            Use estes endpoints para integrar o sistema com outras aplicações.
          </p>
          
          <div className="p-4 bg-muted/50 border rounded-md">
            <h3 className="text-lg font-medium mb-2">Base URL</h3>
            <code className="bg-background p-2 rounded text-sm block">
              https://api.ser-recicla.unama.br/api
            </code>
            
            <div className="mt-4 flex items-center">
              <div className="px-2.5 py-0.5 rounded-md bg-primary text-xs font-medium text-primary-foreground mr-2">
                AUTH
              </div>
              <span className="text-sm">
                Autenticação via Bearer Token é necessária para todas as requisições
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Endpoints Disponíveis</h2>
          
          <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mr-2">
                  GET
                </div>
                <span className="font-medium">/api/entradas</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Recupera todas as entradas de materiais recicláveis</p>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mr-2">
                  GET
                </div>
                <span className="font-medium">/api/entradas/:id</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Recupera uma entrada específica pelo ID</p>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mr-2">
                  POST
                </div>
                <span className="font-medium">/api/entradas</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Registra uma nova entrada de material reciclável</p>
            </div>
            
            <div className="p-4">
              <div className="flex items-center">
                <div className="px-2 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mr-2">
                  GET
                </div>
                <span className="font-medium">/api/estatisticas</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Recupera estatísticas sobre as entradas de materiais recicláveis</p>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg bg-card">
          <h2 className="text-lg font-medium mb-4">Documentação Completa</h2>
          <p className="text-muted-foreground">
            Para acessar a documentação completa da API com exemplos de requisições e respostas, 
            consulte nossa documentação detalhada no Swagger.
          </p>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Acessar Swagger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
