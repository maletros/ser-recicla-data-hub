import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ApiDocs from "./pages/ApiDocs";
import NotFound from "./pages/NotFound";
import AuthGestor from "./pages/AuthGestor";
import GestorPanel from "./pages/GestorPanel";
import Landing from "./pages/Landing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registrar" element={<Register />} />
              <Route path="/api-docs" element={<ApiDocs />} />
              <Route path="/auth-gestor" element={<AuthGestor />} />
              <Route path="/painel-gestor" element={<GestorPanel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
