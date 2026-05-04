import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/site/SiteLayout";
import Index from "./pages/Index.tsx";
import Tentang from "./pages/Tentang.tsx";
import Layanan from "./pages/Layanan.tsx";
import Berita from "./pages/Berita.tsx";
import Analisa from "./pages/Analisa.tsx";
import TanyaJawab from "./pages/TanyaJawab.tsx";
import Direktori from "./pages/Direktori.tsx";
import Dokumentasi from "./pages/Dokumentasi.tsx";
import Konsultasi from "./pages/Konsultasi.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/analisa" element={<Analisa />} />
            <Route path="/tanya-jawab" element={<TanyaJawab />} />
            <Route path="/direktori" element={<Direktori />} />
            <Route path="/dokumentasi" element={<Dokumentasi />} />
            <Route path="/konsultasi" element={<Konsultasi />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
