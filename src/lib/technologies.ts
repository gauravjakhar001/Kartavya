import { BrainCircuit, Layers, Database, LucideIcon } from "lucide-react";

export type Technology = {
    slug: string;
    title: string;
    description: string;
    details: string;
    icon?: LucideIcon;
    image?: string;
    illustration?: string;
};

export const technologies: Technology[] = [
    {
        slug: "crewai-agentic-workflows",
        title: "CrewAI Agentic Workflows",
        description:
            "Sophisticated multi-agent systems to automate complex business processes.",
        details:
            "We specialize in designing and implementing sophisticated multi-agent systems using CrewAI. These agentic workflows can tackle your most complex business challenges, from automated research and analysis to fully autonomous customer service operations, streamlining processes and boosting efficiency.",
        image: "/lovable-uploads/crewai logo.png",
        illustration: "/images/crewai.png",
    },
    {
        slug: "advanced-llms",
        title: "Advanced LLMs",
        icon: BrainCircuit,
        description:
            "Leveraging the latest in generative AI for natural, context-aware conversations.",
        details:
            "Our solutions are powered by the latest and most powerful Large Language Models (LLMs). We leverage models like GPT-4, Claude 3, and others to create applications that can understand nuance, maintain context, and engage in natural, human-like conversations, providing insightful analysis and content generation.",
        illustration: "/images/llm.png",
    },
    {
        slug: "custom-training",
        title: "Custom Training",
        icon: Layers,
        description:
            "Fine-tuning models on your data for agents that understand your unique context.",
        details:
            "Off-the-shelf models can only go so far. We provide custom training and fine-tuning services, using your own proprietary data to create AI agents that deeply understand your specific business context, terminology, and customer needs. This results in highly accurate and relevant outputs.",
        illustration: "/images/training.png",
    },
    {
        slug: "secure-integration",
        title: "Secure Integration",
        icon: Database,
        description:
            "Solutions designed for secure, seamless integration with your existing systems.",
        details:
            "Security and privacy are paramount. We design our AI solutions for secure and seamless integration with your existing technology stack. Whether it's your CRM, ERP, or internal databases, we ensure that data is handled responsibly and that our agents operate within your established security protocols.",
        illustration: "/images/secure.png",
    },
];
