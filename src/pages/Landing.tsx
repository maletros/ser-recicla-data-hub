
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookUser, PieChart, LayoutDashboard } from "lucide-react";

const Landing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/5 to-white flex flex-col justify-between">
      <div className="container flex-1 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary animate-fade-in">
            Recicle Conosco <span className="text-secondary">e transforme o futuro</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Ser Recicla é o sistema colaborativo para monitoramento, registro e engajamento da coleta de materiais recicláveis nas unidades da Unama.<br/>
            Educação e tecnologia juntas pela sustentabilidade e pela COP 30!
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/registrar">
              <Button size="lg" className="hover-scale">
                <BookUser className="mr-2" /> Registrar Entrega
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="hover-scale">
                <PieChart className="mr-2" /> Ver Dashboard
              </Button>
            </Link>
            <Link to="/painel-gestor">
              <Button size="lg" variant="outline" className="hover-scale">
                <LayoutDashboard className="mr-2" /> Gestor
              </Button>
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=cover&w=800&q=80"
          alt="Sustentabilidade"
          className="mt-12 rounded-xl shadow-lg max-w-xl w-full aspect-video object-cover border border-muted mx-auto animate-fade-in"
          loading="lazy"
        />
      </div>
      <footer className="container py-8 text-center text-muted-foreground text-xs">
        Projeto Ser Recicla – Semana Ubíqua / Unama • Desafio COP 30 🌱
      </footer>
    </section>
  );
};

export default Landing;
