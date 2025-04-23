
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Registrar", href: "/registrar" },
    { name: "API Docs", href: "/api-docs" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1.5 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 text-primary-foreground"
            >
              <path d="M8 3v4l-2 1 2 1v3a4 4 0 0 0 8 0V9l2-1-2-1V3" />
              <path d="M12 12v6" />
              <path d="M12 18a4 4 0 1 0 3.164-3.147" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary leading-tight tracking-tight">
              Ser Recicla
            </span>
            <span className="text-xs text-muted-foreground">Data Hub</span>
          </div>
        </Link>
        
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
