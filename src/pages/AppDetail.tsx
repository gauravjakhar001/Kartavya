import { useParams, Navigate} from "react-router-dom";
import { apps } from "@/lib/apps";

import erpForSmallBusiness from "../../public/appImages/ERP for Small Business_Features.jpg";
import taskManagementSmallBusiness from "../../public/appImages/Task Management for Small Business_Features_.jpg";
import realtimeFuelConsumptionAcrossAssets from "../../public/appImages/ChatGPT Image Aug 2, 2025, 11_10_30 AM.png";
import targetsAchievementsManagement from "../../public/appImages/Targets and achievements management_Features_.jpg";
import aiAgenticHiringManagement from "../../public/appImages/AI Agentic Hiring management_Features.jpg";
import onDemandFurnitureOrderingApp from "../../public/appImages/On-demand furniture ordering App_Features_.jpg";
import electronicsBiddingApp from "../../public/appImages/Electronics Bidding App_Features.jpg";
import storyWritingApp from "../../public/appImages/Story writing App_Features_.jpg";
import aiBasedLearningApp from "../../public/appImages/AI based learning App_Features_.jpg";
import memeCreationApp from "../../public/appImages/Meme creation app for creators_Features_.jpg";
import healthMonitoringApp from "../../public/appImages/Health monitoring app_Features_.jpg";
import { useEffect } from "react";

const AppDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const app = apps.find((t) => t.slug === slug);

    if (!app) {
        return <Navigate to="/404" />;
    }

    const { title, description, features, benefit, useCases, img } = app;

    const imageMap: Record<string, string> = {
        erpForSmallBusiness,
        taskManagementSmallBusiness,
        realtimeFuelConsumptionAcrossAssets,
        targetsAchievementsManagement,
        aiAgenticHiringManagement,
        onDemandFurnitureOrderingApp,
        electronicsBiddingApp,
        storyWritingApp,
        aiBasedLearningApp,
        memeCreationApp,
        healthMonitoringApp,
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
        <div className="max-w-6xl my-10 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-background">
            {/* Left: Image */}
            <div className="w-full h-64 md:h-80 bg-muted rounded-lg flex items-center justify-center">
                <img
                    src={imageMap[img]}
                    alt={app.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Right: Details */}
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">{title}</h2>
                <p className="text-muted-foreground">{description}</p>

                <div>
                    <h3 className="font-semibold">Key Features:</h3>
                    <ul className="list-disc list-inside text-sm pl-2">
                        {features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">Benefit:</h3>
                    <p className="text-sm">{benefit}</p>
                </div>

                <div>
                    <h3 className="font-semibold">Use Cases:</h3>
                    <p className="text-sm">{useCases}</p>
                </div>

                <a
                    href={`/demo/${slug}`}
                    className="inline-block bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition"
                >
                    View Demo
                </a>
            </div>
        </div>
    );
};

export default AppDetailPage;
