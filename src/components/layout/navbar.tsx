
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="bg-background py-4 shadow-sm border-b border-border transition-colors">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-foreground">
          Ser Recicla
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className={`font-medium text-sm transition hover:text-secondary${pathname === "/" ? " text-secondary" : ""}`}
          >
            Início
          </Link>
          <Link
            to="/registrar"
            className={`font-medium text-sm transition hover:text-secondary${pathname === "/registrar" ? " text-secondary" : ""}`}
          >
            Registrar
          </Link>
          <Link
            to="/api-docs"
            className={`font-medium text-sm transition hover:text-secondary${pathname === "/api-docs" ? " text-secondary" : ""}`}
          >
            API Docs
          </Link>
          <Link
            to="/painel-gestor"
            className={`font-medium text-sm transition hover:text-secondary${pathname === "/painel-gestor" ? " text-secondary" : ""}`}
          >
            Painel do Gestor
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}
