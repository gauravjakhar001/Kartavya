import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { technologies } from "@/lib/technologies";
import { Button } from "@/components/ui/button";

const TechnologyDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const technology = technologies.find((t) => t.slug === slug);

    if (!technology) {
        return <Navigate to="/404" />;
    }

    const { icon: Icon, image, title, details, illustration } = technology;

    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                                    {Icon && (
                                        <Icon className="h-10 w-10 text-primary" />
                                    )}
                                    {image && (
                                        <img
                                            src={image}
                                            alt={`${title} Logo`}
                                            className="h-10 w-10 object-contain"
                                        />
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
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
                                    <Link to="/#contact">Get a Quote</Link>
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
                                            Technology Illustration
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

export default TechnologyDetailPage;
