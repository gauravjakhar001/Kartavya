"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Link } from "react-router-dom";

const features = [
    {
        name: "AI Customer Support",
        description:
            "Automate customer interactions with intelligent, 24/7 AI agents that resolve queries, provide information, and escalate complex issues seamlessly.",
        href: "ai-customer-support",
    },
    {
        name: "Automated Lead Qualification",
        description:
            "Our AI agents engage with potential leads, ask qualifying questions, and score them based on your criteria, delivering hot leads to your sales team.",
        href: "automated-lead-qualification",
    },
    {
        name: "Intelligent Document Review",
        description:
            "Accelerate your document processing by deploying AI agents that can read, understand, and extract key information from contracts, reports, and more.",
        href: "intelligent-document-review",
    },
    {
        name: "Knowledge Base Automation",
        description:
            "Provide instant, accurate answers to internal or external users by connecting an AI agent to your existing knowledge base or documentation.",
        href: "ai-content-generation",
    },
    {
        name: "AI Content Generation",
        description:
        "Generate high-quality marketing copy, blog posts, and social media content in seconds with our advanced AI writing assistants.",
        href: "ai-content-generation",
    },
    {
        name: "Personalized Recommendations",
        description:
            "Increase user engagement and sales by providing hyper-personalized product or content recommendations powered by machine learning.",
        href: "personalized-recommendations",
    },
    {
        name: "HR & Recruitment Automation",
        description:
            "Streamline your hiring process with AI agents that can source candidates, screen resumes, and conduct initial interviews.",
        href: "hr-recruitment-automation",
    },
    {
        name: "AI-driven Financial Analysis",
        description:
            "Leverage AI to analyze market data, predict trends, and gain actionable insights for your investment and financial strategies.",
        href: "ai-financial-analysis",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 lg:py-32 md:px-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Our <AuroraText>Core</AuroraText> Offerings
                    </h2>
                    <p className="mx-auto text-lg mt-4 max-w-[600px] text-muted-foreground">
                        <TextAnimate
                            animation="blurIn"
                            as="h1"
                            delay={1}
                            duration={1.5}
                        >
                            We transform your business processes with
                            tailor-made AI solutions.
                        </TextAnimate>
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((tech, index) => (
                        <Link
                            to={`/services/${tech.href}`}
                            key={tech.href}
                            className="relative  group outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <GridPattern
                                width={20}
                                height={20}
                                x={-1}
                                y={-1}
                                className="absolute rounded-3xl inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent)]"
                            />

                            <div className="relative  group w-full h-full">
                                <Card
                                    className="relative  rounded-3xl shadow-2xl shadow-[#4f4f4f] hover:shadow-[#7e7e7e] bg-black bg-opacity-50 border-[1px] border-[#737373] group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-2 h-full z-10"
                                    style={{
                                        animationDelay: `${0.2 * (index + 1)}s`,
                                    }}
                                >
                                    <CardHeader className="flex  flex-col items-center text-center">
                                        <CardTitle className="text-2xl font-semibold text-white">
                                            {tech.name}
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

export default ServicesSection;
