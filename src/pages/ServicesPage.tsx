import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const ServicesPage = () => {
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <ServicesSection />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
