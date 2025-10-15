import {
    Bot,
    UserCheck,
    FileText,
    BookOpen,
    LucideIcon,
    PenSquare,
    Star,
    Users,
    LineChart,
} from "lucide-react";

export interface Service {
    slug: string;
    icon: LucideIcon;
    title: string;
    description: string;
    details: string;
}

export const services: Service[] = [
    {
        slug: "ai-customer-support",
        icon: Bot,
        title: "AI Customer Support",
        description:
            "Automate customer interactions with intelligent, 24/7 AI agents that resolve queries, provide information, and escalate complex issues seamlessly.",
        details:
            "Our AI Customer Support solution leverages state-of-the-art natural language processing to understand and respond to customer inquiries in real-time. It integrates with your existing CRM and support platforms to provide personalized experiences. Reduce wait times, improve customer satisfaction, and free up your human agents to handle more complex issues.",
    },
    {
        slug: "automated-lead-qualification",
        icon: UserCheck,
        title: "Automated Lead Qualification",
        description:
            "Our AI agents engage with potential leads, ask qualifying questions, and score them based on your criteria, delivering hot leads to your sales team.",
        details:
            "Stop wasting time on unqualified leads. Our AI agents work 24/7 to engage website visitors and inbound leads. They ask tailored questions, assess interest and budget, and score each lead according to your specific criteria. The result is a pipeline full of high-quality, sales-ready leads for your team to close.",
    },
    {
        slug: "intelligent-document-review",
        icon: FileText,
        title: "Intelligent Document Review",
        description:
            "Accelerate your document processing by deploying AI agents that can read, understand, and extract key information from contracts, reports, and more.",
        details:
            "Manual document review is slow, expensive, and prone to error. Our Intelligent Document Review service uses advanced OCR and NLP to automatically extract and analyze data from any document type. From legal contracts to financial reports, our AI agents can verify information, flag discrepancies, and structure data for easy analysis, saving you countless hours of manual work.",
    },
    {
        slug: "knowledge-base-automation",
        icon: BookOpen,
        title: "Knowledge Base Automation",
        description:
            "Provide instant, accurate answers to internal or external users by connecting an AI agent to your existing knowledge base or documentation.",
        details:
            "Turn your knowledge base into a dynamic, conversational resource. Our AI agents can be trained on your internal documentation, FAQs, and product guides to provide instant, accurate answers to questions from both your customers and your employees. This improves self-service rates and ensures consistent information delivery across your organization.",
    },
    {
        slug: "ai-content-generation",
        icon: PenSquare,
        title: "AI Content Generation",
        description:
            "Generate high-quality marketing copy, blog posts, and social media content in seconds with our advanced AI writing assistants.",
        details:
            "Unleash your content strategy with our AI Content Generation service. Our models are trained on vast datasets to produce creative, engaging, and SEO-friendly text for any purpose. From ad copy that converts to in-depth articles that establish thought leadership, our AI can scale your content production effortlessly, maintaining your brand voice throughout.",
    },
    {
        slug: "personalized-recommendations",
        icon: Star,
        title: "Personalized Recommendations",
        description:
            "Increase user engagement and sales by providing hyper-personalized product or content recommendations powered by machine learning.",
        details:
            "Our recommendation engine analyzes user behavior, preferences, and historical data to deliver suggestions that resonate. Perfect for e-commerce, streaming services, and news platforms, this service boosts user satisfaction, increases time-on-site, and drives conversions by showing users exactly what they want to see, even before they know it themselves.",
    },
    {
        slug: "hr-recruitment-automation",
        icon: Users,
        title: "HR & Recruitment Automation",
        description:
            "Streamline your hiring process with AI agents that can source candidates, screen resumes, and conduct initial interviews.",
        details:
            "Hire smarter, not harder. Our HR automation agents can handle the most time-consuming parts of recruitment. They can parse thousands of resumes to find the best matches for your job descriptions, engage with candidates through chatbots for initial screening, and even schedule interviews with qualified applicants. This frees up your HR team to focus on what matters most: connecting with top talent.",
    },
    {
        slug: "ai-financial-analysis",
        icon: LineChart,
        title: "AI-driven Financial Analysis",
        description:
            "Leverage AI to analyze market data, predict trends, and gain actionable insights for your investment and financial strategies.",
        details:
            "Make data-driven financial decisions with confidence. Our AI financial analysis tools process vast amounts of market data, news, and financial reports in real-time. The AI identifies patterns, assesses risk, and forecasts trends with a high degree of accuracy. Whether you are a trading firm or a corporate finance department, our solution provides the intelligence you need to stay ahead of the market.",
    },
];
