import { Link } from "react-router-dom";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";

const projects = [
    {
        title: "Lead Generation Assistant",
        slug: "lead-generation",
        description:
            "AI-powered agent that discovers qualified leads and automates personalized email outreach to boost engagement and conversions.",
        features: [
            "Automated lead discovery based on business requirements",
            "AI-driven lead qualification and scoring",
            "Seamless CRM integration and performance analytics",
        ],
        benefit:
            "Eliminates manual prospecting, increases response rates, and scales outreach to thousands of leads effortlessly.",
    },
    {
        title: "Contract Review Assistant",
        slug: "contract-review-assistant",
        description:
            "Automates contract analysis by extracting key terms, flagging risky clauses, and suggesting legal improvements.",
        features: [
            "Extracts payment, liability, and termination terms",
            "Flags nonstandard clauses and suggests improvements",
            "Works with Word, PDF, and plain text formats",
        ],
        benefit:
            "Speeds up legal approvals, reduces risk, and ensures consistency with audit-ready summaries for decision-making.",
    },
    {
        title: "LinkedIn Posting Assistant",
        slug: "linkedin-posting-assistant",
        description:
            "Engages prospects on LinkedIn by identifying key posts and generating personalized replies in your brand’s tone.",
        features: [
            "Monitors high-value posts and scores engagement relevance",
            "Generates context-aware replies in your brand voice",
            "Integrates with CRM and tracks engagement outcomes",
        ],
        benefit:
            "Increases reply and conversion rates while saving hours of manual LinkedIn engagement work.",
    },
];


const ProjectPreview = () => {
    return (
        <section id="agents" className="pt-16 md:px-10 bg-zinc-950 text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Highlighted <AuroraText>AI Agents</AuroraText>
                </h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {projects.map(
                        (
                            { title, description, features, benefit, slug },
                            index
                        ) => (
                            <Link
                                to={`/projects/${slug}`}
                                key={slug}
                                className="relative group outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                <div
                                    key={index}
                                    className="relative rounded-3xl shadow-2xl hover:border-primary shadow-[#4f4f4f] hover:shadow-[#7e7e7e] bg-black bg-opacity-50 border-[1px] border-[#737373] p-6 group transition backdrop-blur-sm overflow-hidden flex flex-col h-full"
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

                                    <ul className="list-disc list-inside text-sm text-white/90 space-y-1">
                                        {features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>

                                    {/* Divider */}
                                    <div className="my-4 border-t border-white/10" />

                                    <p className="text-sm text-muted-foreground mb-4">
                                        {benefit}
                                    </p>

                                    {/* Spacer */}
                                    <div className="flex-grow" />

                                    {/* Know More Button - shown on hover */}
                                    <div className="mt-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link
                                            to={`/projects/${slug}`}
                                            className="text-primary underline"
                                        >
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>

                <div className="mt-14">
                    <Link to="/projects">
                        <button className=" hover:underline hover:text-primary text-zinc-500">
                            View all agents →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectPreview;
