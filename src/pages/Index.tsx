import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import ProjectPreview from "@/components/ProjectPreview";
import AppsPreview from "@/components/AppsPreview";

const Index = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <ServicesSection />
                <TechnologySection />
                <AboutUsSection />
                <ProjectPreview />
                <AppsPreview/>
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
