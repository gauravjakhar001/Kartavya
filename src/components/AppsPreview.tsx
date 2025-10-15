import { Link } from "react-router-dom";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { AuroraText } from "@/components/magicui/aurora-text";

const apps = [
    {
        title: "ERP for Small Business",
        slug: "erp-for-small-business",
        description:
            "A cloud-based ERP system that helps small businesses manage inventory, accounting, sales, HR, and more from one platform.",
        features: [
            "Centralized dashboard with real-time monitoring",
            "Automated inventory and supplier management",
            "Integrated accounting with invoicing and tax reports",
        ],
        benefit:
            "Streamlines operations, cuts manual work, boosts collaboration, reduces costs, and supports business growth.",
    },
    {
        title: "Task Management for Small Business",
        slug: "task-management-small-business",
        description:
            "A collaborative task management system with real-time tracking, group chats, notifications, and integrations for small teams.",
        features: [
            "Create, assign, and track tasks in real-time",
            "Group-based task threads like WhatsApp",
            "Instant notifications and deadline reminders",
        ],
        benefit:
            "Improves task clarity, accountability, team collaboration, and remote coordination while saving time and scaling with business.",
    },
];

const AppsPreview = () => {
    return (
        <section id="apps" className=" md:px-10 bg-zinc-950 text-center">
            <div className="container mt-28 mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                    Highlighted <AuroraText>AI Apps</AuroraText>
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {apps.map(
                        (
                            { title, description, features, benefit, slug },
                            index
                        ) => (
                            <Link
                                to={`/apps/${slug}`}
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

                                    {/* Know More Button (Visible on hover) */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 text-left">
                                        <span className="text-primary underline">
                                            Know More
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    )}
                </div>

                <div className="mt-14">
                    <Link to="/apps">
                        <button className="hover:underline hover:text-primary text-zinc-500">
                            View all apps →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AppsPreview;
