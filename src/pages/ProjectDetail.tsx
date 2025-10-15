import { useParams, Navigate } from "react-router-dom";
import { projects } from "@/lib/projects";

import leadGeneration from "../../public/agentImages/leadGen.jpg";
import contractReviewAssistant from "../../public/agentImages/Contract Review Assistant_Automates.jpg";
import linkedinPostingAssistant from "../../public/agentImages/LinkedIn Posting Assistant_Identifies.jpg";
import entrepreneurCopilot from "../../public/agentImages/Entrepreneur Copilot_Empowers startup.jpg";
import githubProfileReviewAssistant from "../../public/agentImages/Github profile review assistant_Empowers.jpg";
import presentationMaker from "../../public/agentImages/Presentation Maker_Transforms.jpg";
import researcher from "../../public/agentImages/Researcher_Empowers.jpg";
import webAppPerformanceAnalyst from "../../public/agentImages/Web App Performance Analyst_Delivers .jpg";
import pollGenerationForSocialMedia from "../../public/agentImages/Poll generation for social media_Automatically.jpg";
import presentationAnalyzer from "../../public/agentImages/Presentation Analyzer_Automatically.jpg";
import contractGenerator from "../../public/agentImages/Contract Generator_Creates.jpg";
import socialProfileAnalyst from "../../public/agentImages/Social Profile Analyst_Analyzes and summarizes.jpg";
import awsExpert from "../../public/agentImages/AWS Expert_Your intelligent AWS Expert.jpg";
import worldEconomicExpert from "../../public/agentImages/World Economic Expert_An AI-powered .jpg";
import youtubeAutomationAssistant from "../../public/agentImages/Automated youtube channel_Automates.jpg";
import worksheetGenerationTool from "../../public/agentImages/Worksheet generation tool_Transforms .jpg";
import videoDubbingTool from "../../public/agentImages/Video dubbing tool_Transforms .jpg";
import resumeShortlistingAssistant from "../../public/agentImages/Resume shortling assistant_Automates.jpg";
import companyNameFinder from "../../public/agentImages/Company Name Finder_Helps.jpg";
import openSourceProjectsFinder from "../../public/agentImages/Open Source Projects Finder_Automatically.jpg";
import aiProjectManager from "../../public/agentImages/AI Project Manager_Orchestrates .jpg";
import dataAnalystCopilot from "../../public/agentImages/Data Analyst Copilot_Transforms.jpg";
import interactiveSmartCook from "../../public/agentImages/Interactive Smart Cook_Hands-free.jpg";
import schoolSearchAssistant from "../../public/agentImages/School Search Assistant_The Schoo.jpg";
import drawingCopilot from "../../public/agentImages/Drawing copilot_The Drawing Copilot.jpg";
import travelPlanner from "../../public/agentImages/Travel Planner_Smart travel planner .jpg";
import companyValuationByDcf from "../../public/agentImages/Company Valuation.jpg";
import usCollegeAdmissionCounselor from "../../public/agentImages/US college admission counselor_An AI-driven .jpg";
import stockMarketExpert from "../../public/agentImages/Stock Market Expert_This AI assistant.jpg";
import booksFinder from "../../public/agentImages/bookfinder.jpg";
import moviesExplorer from "../../public/agentImages/movieexplorer.jpg";
import aiDoctor from "../../public/agentImages/doctor.jpg";
import dietitian from "../../public/agentImages/dietitian.jpg";
import pricingAgent from "../../public/agentImages/pricingAgent.jpg";
import srsGenerator from "../../public/agentImages/srsgen.jpg";
import cityGuide from "../../public/agentImages/cityGuide.jpg";
import { useEffect } from "react";

const ProjectDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((t) => t.slug === slug);

    if (!project) {
        return <Navigate to="/404" />;
    }

    const { title, description, features, benefit, useCases, img, link } = project;

    const imageMap: Record<string, string> = {
        leadGeneration,
        contractReviewAssistant,
        linkedinPostingAssistant,
        entrepreneurCopilot,
        githubProfileReviewAssistant,
        presentationMaker,
        researcher,
        webAppPerformanceAnalyst,
        pollGenerationForSocialMedia,
        presentationAnalyzer,
        contractGenerator,
        socialProfileAnalyst,
        awsExpert,
        worldEconomicExpert,
        youtubeAutomationAssistant,
        worksheetGenerationTool,
        videoDubbingTool,
        resumeShortlistingAssistant,
        companyNameFinder,
        openSourceProjectsFinder,
        aiProjectManager,
        dataAnalystCopilot,
        interactiveSmartCook,
        schoolSearchAssistant,
        drawingCopilot,
        travelPlanner,
        companyValuationByDcf,
        usCollegeAdmissionCounselor,
        stockMarketExpert,
        booksFinder,
        moviesExplorer,
        cityGuide ,
        srsGenerator,
        pricingAgent,
        dietitian,
        aiDoctor       
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
        <div className="max-w-6xl my-10 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-background">
            {/* Left: Image */}
            <div className="w-full h-64 md:h-80  rounded-lg flex items-center justify-center">
                <img
                    src={imageMap[img]}
                    alt={project.title}
                    className="max-h-full object-contain rounded-lg"
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
                    href={link}
                    className="inline-block bg-primary text-white px-5 py-2 rounded-full hover:opacity-90 transition"
                >
                    View Demo
                </a>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
