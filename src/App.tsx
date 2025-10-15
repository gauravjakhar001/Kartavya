import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import TechnologyPage from "./pages/TechnologyPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import AllProjects from "./pages/AllProjects";
import AllApps from "./pages/AllApps";
import ProjectDetail from "./pages/ProjectDetail";
import AppDetail from "./pages/AppDetail";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route
                        path="/services/:slug"
                        element={<ServiceDetailPage />}
                    />
                    <Route path="/technology" element={<TechnologyPage />} />
                    <Route
                        path="/technology/:slug"
                        element={<TechnologyDetailPage />}
                    />
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicyPage />}
                    />
                    <Route
                        path="/terms-of-service"
                        element={<TermsOfServicePage />}
                    />
                    <Route path="/projects" element={<AllProjects />} />
                    <Route path="/apps" element={<AllApps />} />
                    <Route path="/apps/:slug" element={<AppDetail />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
