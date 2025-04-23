import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-primary">
          Ser Recicla
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="font-medium text-sm transition hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/registrar"
            className="font-medium text-sm transition hover:text-primary"
          >
            Registrar
          </Link>
          <Link
            to="/api-docs"
            className="font-medium text-sm transition hover:text-primary"
          >
            API Docs
          </Link>
          <Link
            to="/painel-gestor"
            className="font-medium text-sm transition hover:text-primary"
          >
            Painel do Gestor
          </Link>
        </nav>
      </div>
    </header>
  );
}
