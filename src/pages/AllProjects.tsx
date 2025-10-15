import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { projectsShortDescriptions } from "@/lib/projects";
import { Link } from "react-router-dom";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useEffect } from "react";

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-20 bg-background text-center">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-16">
                    Our <AuroraText>AI Projects</AuroraText>
                </h1>

                <div className="grid gap-5 md:grid-cols-3 auto-rows-fr">
                    {projectsShortDescriptions.map(
                        ({ title, description, slug }, index) => (
                            <Link
                                to={`/projects/${slug}`}
                                key={slug}
                                className="relative rounded-xl group outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <div
                                    key={index}
                                    className="relative rounded-xl flex flex-col h-full shadow-2xl hover:border-primary shadow-[#4f4f4f] hover:shadow-[#7e7e7e] bg-black bg-opacity-50 border-[1px] border-[#737373] p-6 group transition backdrop-blur-sm overflow-hidden"
                                >
                                    {/* Grid Background */}
                                    <div className="absolute inset-0 -z-10 opacity-10">
                                        <AnimatedGridPattern />
                                    </div>

                                    {/* Gradient Border on Hover */}
                                    <div className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none" />

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {description}
                                    </p>

                                    {/* Divider */}
                                    <div className="my-4 border-t border-white/10" />

                                    {/* Spacer */}
                                    <div className="flex-grow" />

                                    {/* Learn More Button */}
                                    <Link
                                        to={`/projects/${slug}`}
                                        className="mt-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-primary underline"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
