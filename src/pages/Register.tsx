
import React from "react";

export default function Register() {
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
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Quantidade (kg)</label>
                <input 
                  type="number" 
                  step="0.01"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <p className="text-xs text-muted-foreground mt-1">Peso em quilogramas (máx. 100kg)</p>
              </div>
              
              <div>
                <label className="text-sm font-medium">Tipo de resíduo</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Alumínio</option>
                  <option>PET</option>
                  <option>Vidro</option>
                  <option>Pano</option>
                </select>
                <p className="text-xs text-muted-foreground mt-1">Material reciclável</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Curso</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Engenharia Ambiental</option>
                  <option>Ciência da Computação</option>
                  <option>Sistemas de Informação</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Turma</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>CC-A</option>
                  <option>CC-B</option>
                  <option>SI-A</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Semestre</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>1º Semestre</option>
                  <option>2º Semestre</option>
                  <option>3º Semestre</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium">Turno</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Matutino</option>
                  <option>Vespertino</option>
                  <option>Noturno</option>
                  <option>Integral</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Unidade</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Unama Alcindo Cacela</option>
                <option>Unama Ananindeua</option>
                <option>Unama Parque Shopping</option>
              </select>
            </div>

            <button 
              type="button" 
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Registrar entrega
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
