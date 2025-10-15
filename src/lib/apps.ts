export interface Apps {
    title: string;
    slug: string;
    description: string;
    features: string[];
    benefit: string;
    useCases: string;
    img: string;
}

export const apps: Apps[] = [
    {
        title: "ERP for Small Business",
        slug: "erp-for-small-business",
        img: "erpForSmallBusiness",
        description:
            "A robust ERP platform designed for small businesses to manage inventory, HR, accounting, and CRM from a centralized dashboard. It automates processes and improves decision-making with real-time monitoring and customizable modules.",
        features: [
            "Centralized dashboard for real-time monitoring",
            "Automated inventory tracking and supplier management",
            "Integrated accounting with invoicing, taxes, and reporting",
            "Built-in sales and CRM tools",
            "HR and payroll automation",
            "Role-based access control for security",
            "Cloud-based, mobile-accessible platform",
            "Customizable modules and workflows",
        ],
        benefit:
            "Streamlines operations, reduces manual work, improves collaboration, and lowers overhead. It enables faster decision-making and scales with business growth while supporting remote work and ensuring compliance with audit-ready records.",
        useCases:
            "Retail shops managing stock, billing, and customers; manufacturing SMEs coordinating inventory and production; service providers handling clients and teams; distributors tracking orders; franchises unifying branch operations; and nonprofits managing payroll and records.",
    },
    {
        title: "Task Management for Small Business",
        slug: "task-management-small-business",
        img: "taskManagementSmallBusiness",
        description:
            "A real-time task tracking and collaboration app designed for small teams with group-based communication and mobile-first management.",
        features: [
            "Create, assign, and track tasks with real-time updates",
            "Group-based threads for task communication",
            "Instant notifications and reminders",
            "Integrated comments, file sharing, and task status",
            "Role-based access control",
            "Dashboard showing task progress by user or group",
            "Mobile-friendly and cloud-based platform",
            "App integrations like WhatsApp and Google Calendar",
        ],
        benefit:
            "Improves team coordination, accountability, and efficiency by streamlining task delegation, updates, and communication in one place.",
        useCases:
            "Sales teams tracking daily tasks, project teams collaborating on deliverables, operations managers handling shift work, and marketing teams coordinating campaigns.",
    },
    {
        title: "Realtime Fuel Consumption across Business Assets",
        slug: "realtime-fuel-consumption-across-assets",
        img: "realtimeFuelConsumptionAcrossAssets",
        description:
            "Track and analyze real-time fuel usage across business assets like generators, vehicles, and ACs using GPS, sensors, and dashboards with alerts and trends.",
        features: [
            "Real-time fuel tracking for ACs, DGs, vehicles, etc.",
            "Mobile-friendly dashboard with branch-wise views",
            "Asset-level usage breakdown and trend analysis",
            "Abnormal usage and refueling alert system",
            "GPS and sensor-based automation",
            "Centralized cloud database with access control",
            "Visual reports with export options",
            "Role-based access for owners and staff",
        ],
        benefit:
            "Reduces fuel waste, improves budgeting, and enhances transparency across branches through real-time tracking and insights.",
        useCases:
            "Comparing diesel use in generators across branches, tracking AC fuel use, verifying fuel bills, and reducing costs via insights.",
    },
    {
        title: "Targets and Achievements Management",
        slug: "targets-achievements-management",
        img: "targetsAchievementsManagement",
        description:
            "Manage team targets and track achievements with real-time progress monitoring, notifications, and centralized dashboards.",
        features: [
            "Managers set and assign monthly targets",
            "Team members update daily achievements via mobile or web",
            "Auto-calculated progress with visual indicators",
            "Owner dashboard for team and branch performance",
            "Notifications for updates, assignments, and top performers",
            "Branch and department-based visibility",
            "Secure role-based access control",
            "Exportable reports for reviews and planning",
        ],
        benefit:
            "Improves team performance, simplifies tracking, and empowers data-driven decisions with real-time visibility into goals and results.",
        useCases:
            "Sales targets tracking, support case resolution monitoring, comparing branch performance, and managing team KPIs across locations.",
    },
    {
        title: "AI Agentic Hiring Management",
        slug: "ai-agentic-hiring-management",
        img: "aiAgenticHiringManagement",
        description:
            "Automated, AI-powered hiring platform that streamlines end-to-end recruitment—from job listings to onboarding—across all business units.",
        features: [
            "Central job board for all open positions",
            "Employee and external applicant application support",
            "AI agents automate resume screening, interviews, and offers",
            "AI-driven candidate-job matching based on skills and experience",
            "Automated chatbot-based candidate communication and updates",
            "Interview scheduling, smart assessments, and shortlisting handled by AI",
            "Real-time analytics for funnel tracking, time-to-hire, and team performance",
            "Secure, role-based access for stakeholders",
            "Compliance-ready data exports for audits and reviews",
            "Mobile and web access for hiring managers and applicants",
        ],
        benefit:
            "Reduces recruitment time and cost, enhances candidate experience, improves hire quality, and gives HR full control with real-time analytics and automation.",
        useCases:
            "Automating recruitment for high-volume roles, boosting diversity, optimizing hiring for franchises, and supporting seasonal or remote hiring needs.",
    },
    {
        title: "On-demand Furniture Ordering App",
        slug: "on-demand-furniture-ordering-app",
        img: "onDemandFurnitureOrderingApp",
        description:
            "A customizable furniture ordering platform with 3D/AR previews, real-time pricing, and end-to-end order tracking.",
        features: [
            "Customizable catalog with options for size, materials, colors, and finishes",
            "Interactive 3D/AR previews of furniture in user spaces",
            "Live pricing updates as users adjust configurations",
            "User accounts for saving designs, tracking orders, and history",
            "Secure multi-mode payment gateway integration",
            "Real-time order tracking with notifications",
            "Integrated chat for consultation and support",
            "Admin panel for managing listings, customization, and stock",
        ],
        benefit:
            "Increases customer satisfaction and conversion rates through personalization, real-time visualization, and streamlined purchasing.",
        useCases:
            "Homeowners designing custom furniture, designers collaborating on projects, and retailers offering interactive product experiences online and in-store.",
    },
    {
        title: "Electronics Bidding App",
        slug: "electronics-bidding-app",
        img: "electronicsBiddingApp",
        description:
            "A live auction marketplace for electronics and appliances that enables competitive bidding, secure transactions, and real-time engagement.",
        features: [
            "Live auction system with countdown timers and auto-increment bids",
            "Detailed product listings with high-quality images and seller ratings",
            "Push notifications for bid updates, wins, and outbids",
            "Secure user sign-up with multi-factor authentication",
            "Integrated payment gateway with escrow for safe transactions",
            "Admin dashboard to manage listings, monitor bids, and handle disputes",
            "Comprehensive order tracking, history, and feedback system",
            "Supports both retail sellers and individual users",
        ],
        benefit:
            "Drives higher sales and engagement through gamified bidding, reduces inventory waste, and builds customer trust with secure and transparent auction processes.",
        useCases:
            "Retailers selling overstock or refurbished items, buyers looking for deals on gadgets, and businesses running promotional flash sales or special electronics events.",
    },
    {
        title: "Story Writing App",
        slug: "story-writing-app",
        img: "storyWritingApp",
        description:
            "A cloud-based platform for writing, sharing, and discovering inspirational stories with rich formatting, social interaction, and community safety features.",
        features: [
            "Distraction-free rich text editor with formatting tools",
            "Ability to add images, tags, and summaries to stories",
            "User profiles for managing authored content, bookmarks, and followers",
            "Global story feed with like, comment, and share options",
            "Tag and category-based browsing for easy discovery",
            "Built-in moderation, privacy settings, and reporting tools",
            "Mobile-friendly, cloud-synced writing with offline support",
            "Export stories to PDF and share on social platforms",
        ],
        benefit:
            "Fosters a global, engaged storytelling community that supports personal growth, amplifies diverse voices, and drives content sharing and retention through interactive features.",
        useCases:
            "Individuals sharing inspirational journeys, students documenting achievements, employees highlighting milestones, and creators publishing motivational stories to a global audience.",
    },
    {
        title: "AI Based Learning App",
        slug: "ai-based-learning-app",
        img: "aiBasedLearningApp",
        description:
            "An AI-powered education platform that delivers instant answers to student queries, combines human tutor oversight, and enables paid one-on-one sessions for deeper learning.",
        features: [
            "AI chatbot for instant answers on any academic topic",
            "Human tutor oversight for feedback and response validation",
            "Tutor dashboard to manage unanswered doubts and audit AI replies",
            "Analytics for tracking student progress and trending topics",
            "Secure chat and video calls for direct tutoring sessions",
            "Tutor profiles with ratings, subjects, and availability",
        ],
        benefit:
            "Efficiently scales doubt resolution with quality control, connects students to real tutors, and drives engagement, learning outcomes, and revenue through hybrid AI-human support.",
        useCases:
            "Students get instant AI help with complex follow-ups from tutors; institutions offer smart AI support plus verified tutoring; tutors earn through scheduled one-on-one sessions.",
    },
    {
        title: "Meme Creation App for Creators",
        slug: "meme-creation-app",
        img: "memeCreationApp",
        description:
            "A powerful and fun app for creating viral video memes using movie clips or personal footage with customizable text, effects, and export options.",
        features: [
            "Import clips from movies or personal library",
            "Trim, crop, and add meme-style top/bottom text",
            "Drag-and-drop stickers, GIFs, emojis, and images",
            "Apply filters, deep-fried effects, and video speed controls",
            "Choose templates or create custom layouts",
            "Supports MP4 and GIF export with HD resolution and watermark options",
            "Optimized aspect ratios for Instagram, TikTok, and WhatsApp",
            "Privacy-friendly with no auto uploads",
        ],
        benefit:
            "Boosts user engagement and content virality with easy meme creation, while enabling brands and creators to ride trends, grow reach, and connect with audiences.",
        useCases:
            "Creators making social memes from movie clips, influencers running viral campaigns, brands launching challenges, or friends sharing personalized video memes in chats.",
    },
    {
        title: "Health Monitoring App",
        slug: "health-monitoring-app",
        img: "healthMonitoringApp",
        description:
            "A comprehensive mobile health companion for real-time tracking of vitals, fitness, medication, and virtual care access.",
        features: [
            "User profiles with personal and health data",
            "Real-time biometric tracking: heart rate, blood pressure, sleep, etc.",
            "Exercise and activity logging with calories and steps",
            "Nutrition, hydration, and medication reminders",
            "Charts, reports, and health trends visualization",
            "Wearable and device integration for auto data sync",
            "Telemedicine support for remote consultations",
            "AI-powered health tips and goal setting",
        ],
        benefit:
            "Empowers users to take charge of their health, reduces healthcare costs, and improves patient engagement with proactive insights and virtual support.",
        useCases:
            "Chronic patients monitoring vitals, fitness users tracking progress, elderly sharing data with caregivers, and clinics offering remote monitoring and consultations.",
    },
];

export const appsShortDescriptions = [
    {
        title: "ERP for Small Business",
        slug: "erp-for-small-business",
        description:
            "A robust ERP platform designed for small businesses to manage inventory, HR, accounting, and CRM from a centralized dashboard. It automates processes and improves decision-making with real-time monitoring and customizable modules.",
    },
    {
        title: "Task Management for Small Business",
        slug: "task-management-small-business",
        description:
            "A real-time task tracking and collaboration app designed for small teams with group-based communication and mobile-first management.",
    },
    {
        title: "Realtime Fuel Consumption across Business Assets",
        slug: "realtime-fuel-consumption-across-assets",
        description:
            "Track and analyze real-time fuel usage across business assets like generators, vehicles, and ACs using GPS, sensors, and dashboards with alerts and trends.",
    },
    {
        title: "Targets and Achievements Management",
        slug: "targets-achievements-management",
        description:
            "Manage team targets and track achievements with real-time progress monitoring, notifications, and centralized dashboards.",
    },
    {
        title: "AI Agentic Hiring Management",
        slug: "ai-agentic-hiring-management",
        description:
            "Automated, AI-powered hiring platform that streamlines end-to-end recruitment—from job listings to onboarding—across all business units.",
    },
    {
        title: "On-demand Furniture Ordering App",
        slug: "on-demand-furniture-ordering-app",
        description:
            "A customizable furniture ordering platform with 3D/AR previews, real-time pricing, and end-to-end order tracking.",
    },
    {
        title: "Electronics Bidding App",
        slug: "electronics-bidding-app",
        description:
            "A live auction marketplace for electronics and appliances that enables competitive bidding, secure transactions, and real-time engagement.",
    },
    {
        title: "Story Writing App",
        slug: "story-writing-app",
        description:
            "A cloud-based platform for writing, sharing, and discovering inspirational stories with rich formatting, social interaction, and community safety features.",
    },
    {
        title: "AI Based Learning App",
        slug: "ai-based-learning-app",
        description:
            "An AI-powered education platform that delivers instant answers to student queries, combines human tutor oversight, and enables paid one-on-one sessions for deeper learning.",
    },
    {
        title: "Meme Creation App for Creators",
        slug: "meme-creation-app",
        description:
            "A powerful and fun app for creating viral video memes using movie clips or personal footage with customizable text, effects, and export options.",
    },
    {
        title: "Health Monitoring App",
        slug: "health-monitoring-app",
        description:
            "A comprehensive mobile health companion for real-time tracking of vitals, fitness, medication, and virtual care access.",
    },
];
