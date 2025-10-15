import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

const serviceIllustrations: { [key: string]: string } = {
    "ai-customer-support": "/images/ai1.png",
    "automated-lead-qualification": "/images/lead4.png",
    "intelligent-document-review": "/images/process1.png",
    "knowledge-base-automation": "/images/knowledge1.png",
    "ai-content-generation": "/images/content.png",
    "personalized-recommendations": "/images/review3.png",
    "hr-recruitment-automation": "/images/hr2.png",
    "ai-financial-analysis": "/images/process3.png",
};

const ServiceDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <Navigate to="/404" />;
    }

    const { icon: Icon, title, details } = service;
    const illustration = slug ? serviceIllustrations[slug] : undefined;

    return (
        <div className="bg-background text-foreground  flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow ">
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4 md:px-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 text-primary">
                                    <Icon className="h-10 w-10" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-metallic">
                                    {title}
                                </h1>
                                <p className="text-lg text-muted-foreground mb-8">
                                    {details}
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="glow-on-hover"
                                >
                                    <a
                                        href="https://calendly.com/dharam-tiwari/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Schedule Demo
                                    </a>
                                </Button>
                            </div>
                            <div>
                                <div className="bg-secondary rounded-lg aspect-square flex items-center justify-center overflow-hidden">
                                    {illustration ? (
                                        <img
                                            src={illustration}
                                            alt={`${title} Illustration`}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    ) : (
                                        <p className="text-muted-foreground">
                                            Service Illustration
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceDetailPage;
