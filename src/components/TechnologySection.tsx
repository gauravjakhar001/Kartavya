import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { technologies } from "@/lib/technologies";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";

const TechnologySection = () => {
    return (
        <section
            id="technology"
            className="relative py-20 md:px-10 lg:py-32 bg-zinc-950 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        Powered by <AuroraText>Cutting-Edge</AuroraText>{" "}
                        Technology
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                        <TextAnimate
                            animation="blurIn"
                            as="h1"
                            delay={1}
                            duration={1.5}
                        >
                            As official CrewAI partners, we leverage a
                            state-of-the-art tech stack to build powerful,
                            scalable AI agents.
                        </TextAnimate>
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {technologies.map((tech, index) => (
                        <Link
                            to={`/technology/${tech.slug}`}
                            key={tech.slug}
                            className="relative group outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <GridPattern
                                width={20}
                                height={20}
                                x={-1}
                                y={-1}
                                className="absolute rounded-3xl inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
                            />

                            <div className="relative group w-full h-full">
                                <Card
                                    className="relative rounded-3xl shadow-2xl shadow-[#4f4f4f] hover:shadow-[#7e7e7e] bg-black bg-opacity-50 border-[1px] border-[#737373] group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2 h-full z-10"
                                    style={{
                                        animationDelay: `${0.2 * (index + 1)}s`,
                                    }}
                                >
                                    <CardHeader className="flex flex-col items-center text-center">
                                        <div className="flex items-center justify-center h-16 w-16 mb-4 rounded-full  p-2 text-primary">
                                            {tech.icon && (
                                                <tech.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                                            )}
                                            {tech.image && (
                                                <img
                                                    src={tech.image}
                                                    alt={`${tech.title} Logo`}
                                                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                                />
                                            )}
                                        </div>
                                        <CardTitle className="text-2xl font-semibold text-white">
                                            {tech.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pb-16">
                                        <CardDescription className="text-center text-muted-foreground text-sm">
                                            <TextAnimate
                                                animation="slideUp"
                                                by="word"
                                            >
                                                {tech.description}
                                            </TextAnimate>
                                        </CardDescription>
                                    </CardContent>

                                    {/* Learn More button */}
                                    <div className="absolute bottom-4 left-4 mt-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="text-sm text-primary underline px-4 py-1 transition">
                                            Learn More
                                        </button>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
