import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnologySection from "@/components/TechnologySection";

const TechnologyPage = () => {
    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <TechnologySection />
            </main>
            <Footer />
        </div>
    );
};

export default TechnologyPage;
