export interface Project {
    title: string;
    slug: string;
    description: string;
    features: string[];
    benefit: string;
    useCases: string;
    img: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "Lead Generation",
        slug: "lead-generation",
        img: "leadGeneration",
        link: "https://lead-generation-kartavya.vercel.app/",
        description:
            "Empower businesses to efficiently generate qualified leads and engage them through automated, personalized email outreach.",
        features: [
            "Automated lead discovery based on business requirements",
            "AI-driven lead qualification and scoring with custom criteria",
            "Personalized and adaptive email outreach",
            "Seamless CRM integration for real-time updates",
            "Performance analytics tracking open rates, replies, and conversions",
        ],
        benefit:
            "Boosts sales pipeline with high-value prospects, eliminates manual prospecting, increases response and conversion rates with AI-personalized messaging, enables scaled outreach to hundreds or thousands of leads, and delivers actionable insights for continuous improvement.",
        useCases:
            "B2B companies sourcing new clients, Agencies prospecting for service opportunities, Startups rapidly building customer lists",
    },
    {
        title: "Contract Review Assistant",
        slug: "contract-review-assistant",
        img: "contractReviewAssistant",
        link: "#",
        description:
            "Automates contract analysis to extract key terms, identify negotiation points, and recommend improvements—accelerating legal workflows and reducing risk.",
        features: [
            "Extracts critical terms like payment, liability, and termination",
            "Flags risky or nonstandard clauses for negotiation",
            "Suggests clause improvements based on legal standards",
            "Highlights and annotates material points with context",
            "Works with Word, PDF, and plain text formats",
        ],
        benefit:
            "Speeds up legal reviews, reduces risk exposure, and minimizes manual legal effort with ready-to-act summaries and standardized language.",
        useCases:
            "Sales teams reviewing client contracts, procurement departments analyzing vendor agreements, startups negotiating service contracts, legal teams needing consistent reviews at scale.",
    },
    {
        title: "LinkedIn Posting Assistant",
        slug: "linkedin-posting-assistant",
        img: "linkedinPostingAssistant",
        link: "#",
        description:
            "Identifies and analyzes key LinkedIn posts from your target audience and generates AI-personalized replies—helping your team engage at the right time, with the right message.",
        features: [
            "Monitors and filters high-value posts from potential customers",
            "Scores posts based on relevance and engagement context",
            "Generates personalized reply suggestions in your brand’s voice",
            "Alerts on posts with high engagement or buying signals",
            "Integrates with CRM and tracks engagement outcomes",
        ],
        benefit:
            "Boosts social selling by enabling timely, context-aware interactions that feel human and increase reply and conversion rates, while saving hours of manual research.",
        useCases:
            "Sales teams nurturing leads, account managers managing key relationships, business development spotting strategic opportunities, agencies handling social engagement at scale.",
    },
    {
        title: "Entrepreneur Copilot",
        slug: "entrepreneur-copilot",
        img: "entrepreneurCopilot",
        link: "https://entrepreneur-kartavya.vercel.app/",
        description:
            "Empowers startup founders to instantly generate, refine, and execute robust go-to-market (GTM) strategies tailored to their business idea—leveraging AI for market analysis, customer targeting, competitive positioning, and rapid business launch.",
        features: [
            "Analyzes startup ideas and target markets using real-time data",
            "Recommends ideal customer profiles and behavioral segmentation",
            "Identifies core value propositions and strategic business positioning",
            "Suggests effective acquisition and channel strategies for market entry",
            "Generates actionable outreach, content, and growth initiatives",
            "Tracks GTM progress with automated feedback and optimization",
        ],
        benefit:
            "Accelerates go-to-market execution, reduces research burden, enhances targeting precision, and adapts strategy dynamically for higher early-stage ROI.",
        useCases:
            "Solo founders building a launch and growth plan for a new idea, early-stage startups refining their first customer acquisition strategy, accelerators and incubators helping portfolio companies scale, businesses entering new markets or pivoting their GTM.",
    },
    {
        title: "Lead Generation with voice calling",
        slug: "lead-generation-with-voice",
        img: "leadGeneration",
        link: "https://lead-frontend-flax.vercel.app/",
        description:
            "Empower businesses to efficiently generate qualified leads and engage them through automated, personalized email and AI calling outreach.",
        features: [
            "Automated lead discovery based on business requirements",
            "AI-driven lead qualification and scoring with custom criteria",
            "Personalized and adaptive email outreach",
            "AI-powered calling outreach for real-time engagement",
            "Seamless CRM integration for real-time updates",
            "Performance analytics tracking open rates, replies, and conversions",
        ],
        benefit:
            "Boosts sales pipeline with high-value prospects, eliminates manual prospecting, increases response and conversion rates with AI-personalized messaging, enables scaled outreach to hundreds or thousands of leads, and delivers actionable insights for continuous improvement.",
        useCases:
            "B2B companies sourcing new clients, Agencies prospecting for service opportunities, Startups rapidly building customer lists",
    },
    {
        title: "Github Profile Review Assistant",
        slug: "github-profile-review-assistant",
        img: "githubProfileReviewAssistant",
        link: "https://git-hub-profile-review-kartavya.vercel.app/",
        description:
            "Empowers hiring teams to make confident, data-informed decisions by analyzing and summarizing GitHub profiles—surfacing the most relevant skills, project strengths, and collaboration habits for each developer candidate.",
        features: [
            "Scans and evaluates public repositories, code samples, and contribution activity",
            "Detects programming languages, frameworks, and technology stacks used",
            "Summarizes contribution graph, pull requests, and open-source involvement",
            "Highlights personal, collaborative, and popular projects with code quality metrics",
            "Flags key skills, best practices adoption, and community engagement",
            "Benchmarks activity and portfolio against peer/role standards",
        ],
        benefit:
            "Speeds up developer shortlisting, reveals technical depth objectively, reduces recruiter screening time, and removes bias with standardized GitHub insights.",
        useCases:
            "Recruiters and hiring managers screening developer candidates, technical leads benchmarking applicants for skill fit, agencies shortlisting remote or freelance talent, HR teams assessing open-source engagement for culture fit.",
    },
    {
        title: "Presentation Maker",
        slug: "presentation-maker",
        img: "presentationMaker",
        link: "https://presentation-maker-kartavya.vercel.app/",
        description:
            "Transforms simple business ideas, briefs, or overviews into ready-to-share, professional-grade presentations—saving teams hours on formatting, writing, and design.",
        features: [
            "Converts plain-text or structured input into visually organized PowerPoint decks",
            "Auto-generates titles, subtitles, bullet points, and visual layout suggestions",
            "Applies branded templates, themes, and fonts based on user settings",
            "Supports multiple formats: business pitch, product walkthrough, investor deck, etc.",
            "Allows easy export to PowerPoint, Google Slides, or PDF",
            "Offers editable slide notes and speaker cues for presenting",
        ],
        benefit:
            "Saves hours on formatting, ensures consistent branding, enables non-designers to produce high-quality decks, and speeds up iterations for internal and external communication.",
        useCases:
            "Founders generating pitch decks from idea summaries, sales and BD teams creating proposals from client briefs, internal teams sharing reports and strategies, freelancers and consultants building client presentations.",
    },
    {
        title: "Researcher",
        slug: "researcher",
        img: "researcher",
        link: "https://market-researcher-kartavya.vercel.app/",
        description:
            "Empowers teams and individuals to perform thorough research and automatically produce structured, decision-ready reports on any subject.",
        features: [
            "Searches, reviews, and analyzes diverse web sources and proprietary data",
            "Identifies and extracts key findings, themes, and supporting evidence",
            "Summarizes complex information and synthesizes literature across datasets",
            "Produces well-organized, professional reports with clear sections and structure",
            "Suggests visual elements (charts/tables) and provides inline citations",
            "Adapts style, depth, and formatting for academic, business, or casual use",
            "Enables collaborative research, annotation, and report editing",
            "Integrates seamlessly with knowledge bases and data repositories for deep dives",
        ],
        benefit:
            "Cuts time spent on research and writing, delivers high-quality structured reports, improves accuracy with up-to-date insights, and empowers users of all expertise levels to tackle complex topics.",
        useCases:
            "Consultants generating client-ready market analysis, executives needing briefing reports, academic teams synthesizing literature, product managers conducting competitive intelligence, content creators writing on complex topics, and students preparing research efficiently.",
    },
    {
        title: "Web App Performance Analyst",
        slug: "web-app-performance-analyst",
        link: "#",
        description:
            "Delivers real-time, AI-powered insights into web application performance—enabling teams to detect, diagnose, and resolve slowdowns and bottlenecks before they impact users or business goals.",
        features: [
            "Monitors response times, error rates, resource utilization, and user experience metrics",
            "Detects anomalies and root causes with automated diagnostics",
            "Predicts issues and capacity constraints using historical pattern analysis",
            "Generates actionable recommendations for speed and reliability improvements",
            "Automates application tuning and configuration adjustments to optimize performance",
            "Integrates with dashboards and reporting tools for continuous visibility",
        ],
        benefit:
            "Prevents app downtime and lost revenue, reduces troubleshooting time, ensures high-speed user experiences, informs upgrade decisions, cuts IT costs, and enables innovation with less risk.",
        useCases:
            "SaaS teams managing customer portals, e-commerce platforms ensuring transaction reliability, enterprises scaling internal tools, DevOps/SRE teams automating incident resolution, and startups optimizing MVPs with lean resources.",
        img: "webAppPerformanceAnalyst",
    },
    {
        title: "Poll Generation for Social Media",
        slug: "poll-generation-for-social-media",
        link: "#",
        description:
            "Automatically creates and posts engaging, relevant polls based on trending topics—enhancing audience interaction, collecting feedback, and boosting visibility across social media platforms.",
        features: [
            "Scans news, hashtags, and social signals to identify trending topics",
            "Generates attention-grabbing poll questions tailored to your audience",
            "Suggests or writes witty post captions with strong CTAs",
            "Posts polls across platforms like LinkedIn, Twitter, and Instagram",
            "Tracks voting activity, engagement metrics, and response trends",
            "Learns from engagement history to improve future polls",
        ],
        benefit:
            "Boosts engagement with interactive content, ensures brand relevance in trending conversations, saves time through full automation, collects actionable audience insights, and supports campaign testing with real-time feedback.",
        useCases:
            "Brands increasing visibility through daily engagement, marketing teams testing ideas or campaigns, creators nurturing follower participation, community managers growing interactive fanbases, and HR teams using polls for remote feedback.",
        img: "pollGenerationForSocialMedia",
    },
    {
        title: "Presentation Analyzer",
        slug: "presentation-analyzer",
        link: "https://presentation-analyzer-kartavya.vercel.app/",
        description:
            "Automatically reviews presentation decks to extract insights, summarize content, and suggest actionable improvements—empowering users to deliver more effective, impactful, and well-structured presentations.",
        features: [
            "Content Summarization: Extracts main points, key themes, and actionable insights from each slide",
            "Structure & Flow Check: Analyzes overall narrative coherence, detects logical gaps, and assesses section transitions",
            "Design & Visual Assessment: Reviews slide layout for clarity, consistency, and optimal visual presentation",
            "Audience Readiness: Evaluates alignment of content with the intended audience, recommending additional context or clarity",
            "Actionable Recommendations: Suggests concise, targeted improvements across content, design, and structure",
            "Engagement Metrics: (Where supported) Analyzes past presentation performance to identify high-engagement slides or topics",
            "Data Security: Ensures secure processing with encrypted transfers and temporary storage mechanisms",
        ],
        benefit:
            "Saves hours of manual editing, helps non-designers polish slides, improves message clarity and engagement, ensures consistent branding, and flags narrative issues before critical meetings.",
        useCases:
            "Sales teams refining presentations, executives preparing board or investor decks, educators improving lesson clarity, marketing teams ensuring brand alignment, and anyone seeking fast, actionable feedback on their slides.",
        img: "presentationAnalyzer",
    },
    {
        title: "Contract Generator",
        slug: "contract-generator",
        link: "#",
        description:
            "Creates customized project contracts and Statements of Work (SOW) instantly from basic project details—standardizing agreements, accelerating project start, and safeguarding both business and client interests.",
        features: [
            "Instantly generates project contracts and SOWs from inputs like scope, deliverables, timelines, and terms",
            "Customizes contracts with company branding, preferred legal clauses, and industry standards",
            "Supports online editing with real-time updates via drag-and-drop interface or smart prompts",
            "Offers one-click digital signature capability and automatic PDF export",
            "Supports importing/exporting in Word, PDF, and plain text formats",
            "Tracks contract lifecycle: sent, signed, pending, archived — ready for audits",
        ],
        benefit:
            "Drastically reduces drafting time, minimizes legal risk, enhances brand professionalism, improves revision cycles, and streamlines compliance and contract storage.",
        useCases:
            "Ideal for IT/software teams creating SOWs, agencies and freelancers defining deliverables and payment terms, procurement teams managing vendor contracts, startups formalizing investor/partner scopes, and any business automating contract workflows for faster deal closures.",
        img: "contractGenerator",
    },
    {
        title: "Social Profile Analyst",
        slug: "social-profile-analyst",
        link: "#",
        description:
            "Analyzes and summarizes candidates’ social media presence to provide deeper, data-driven insights into personality, values, skills, and potential culture fit—enabling recruiters to make informed, holistic hiring decisions.",
        features: [
            "Aggregates data from public profiles such as LinkedIn, Twitter, GitHub, and others",
            "Analyzes posts, likes, comments, and network patterns for sentiment, engagement, and relevance",
            "Identifies skills, values, and interests that are not visible in resumes",
            "Flags red-flag content such as hate speech, toxicity, or unprofessional behavior",
            "Measures influence, credibility, and engagement within relevant communities",
            "Scores candidates on soft skills like communication, collaboration, and thought leadership",
            "Benchmarks social profiles against industry peers and job-specific requirements",
        ],
        benefit:
            "Provides holistic, bias-reduced candidate insights; speeds up shortlisting; surfaces hidden risks or value adds; saves time on manual research while ensuring thorough, consistent evaluations.",
        useCases:
            "Used by recruiters evaluating remote or international candidates, enterprises seeking socially engaged talent, startups screening for cultural alignment, tech teams identifying open-source contributors, and HR enforcing behavioral standards in hiring processes.",
        img: "socialProfileAnalyst",
    },
    {
        title: "AWS Expert",
        slug: "aws-expert",
        link: "#",
        description:
            "Your intelligent AWS Expert Copilot automates, optimizes, and secures your cloud operations, delivering enterprise-grade support and strategic recommendations that empower teams to operate at the forefront of cloud innovation.",
        features: [
            "Provides real-time best-practice guidance across all AWS services",
            "Automates infrastructure deployment, scaling, and configuration tasks",
            "Continuously monitors for cost efficiency, security posture, and compliance",
            "Diagnoses issues, recommends fixes, and optionally implements them end-to-end",
            "Translates complex AWS concepts into simple, actionable insights for any skill level",
            "Integrates with DevOps pipelines and reporting dashboards",
            "Retains memory for personalized, contextual support across sessions",
            "Supports multi-step workflows like log analysis, ETL optimization, automated incident response, and cross-service orchestration",
        ],
        benefit:
            "Reduces cloud management overhead, boosts security, cuts AWS costs, and enables both experts and non-experts to efficiently operate cloud systems with 24/7 support and automation.",
        useCases:
            "Enterprises automating and securing AWS infrastructure; DevOps teams managing CI/CD and monitoring; Startups using AWS without deep in-house expertise; MSPs scaling AWS management for clients; Security teams enforcing policies; Data teams optimizing pipelines and analytics; Any organization embedding AWS best practices into daily operations.",
        img: "awsExpert",
    },
    {
        title: "World Economic Expert",
        slug: "world-economic-expert",
        link: "#",
        description:
            "An AI-powered World Economic Expert provides real-time global economic analysis, market forecasting, and actionable policy recommendations, enabling rapid and deep understanding of global macroeconomic trends, market shifts, and international trade dynamics.",
        features: [
            "Analyzes global datasets to track economic indicators such as GDP, inflation, trade flows, and policy changes",
            "Generates near-instant forecasts for GDP growth, sector trends, inflation, and volatility using advanced AI/ML techniques",
            "Runs agent-based simulations to model economic scenarios, risks, and policy impacts",
            "Detects micro and macroeconomic patterns beyond traditional statistical methods",
            "Visualizes complex data in a simplified, decision-ready format for executives and analysts",
            "Combines AI insights with economic theory for explainability and trust",
            "Provides continuous updates on real-time market shifts, economic shocks, and policy changes",
        ],
        benefit:
            "Accelerates accurate economic forecasting, reduces exposure to global risks, supports data-driven investments and policymaking, and enables scalable, real-time monitoring across economies and industries.",
        useCases:
            "Central banks simulating interest rate impacts; Global firms tracking multi-market financial risk; Consultants delivering economic outlooks to clients; Asset managers forecasting global trends; Supply chain teams mitigating disruption from macro shifts; Think tanks evaluating new trade agreements and fiscal policies.",
        img: "worldEconomicExpert",
    },
    {
        title: "YouTube Automation Assistant",
        slug: "youtube-automation-assistant",
        link: "http://youtube-agent-kartavya.vercel.app/",
        description:
            "Automates the complete YouTube channel lifecycle—from topic discovery to video creation and publishing—helping creators deliver high-quality content effortlessly and consistently.",
        features: [
            "Performs automated competitor and keyword research to identify trending topics",
            "Generates engaging, audience-tailored video scripts using AI",
            "Creates visuals with AI-generated images/videos and adds natural-sounding AI voiceovers",
            "Automatically edits, compiles, and formats video content for YouTube",
            "Generates compelling titles, descriptions, tags, and thumbnail prompts for SEO",
            "Supports direct video scheduling or instant uploading to YouTube",
            "Analyzes performance data and refines future content for better engagement",
        ],
        benefit:
            "Enables consistent, high-quality video production with minimal effort or cost—accelerating growth, increasing discoverability, and freeing creators to focus on strategy and audience interaction.",
        useCases:
            "Solo creators launching channels with limited resources; Businesses using YouTube for content marketing and education; Agencies managing multiple niche channels; Educators automating training video production; Creators building faceless channels for monetization at scale.",
        img: "youtubeAutomationAssistant",
    },
    {
        title: "Worksheet Generation Tool",
        slug: "worksheet-generation-tool",
        link: "https://worksheet-generation-kartavya.vercel.app/",
        description:
            "Automatically creates customizable, curriculum-aligned educational worksheets across subjects and grade levels—saving time and enhancing instructional effectiveness.",
        features: [
            "Instant worksheet generation for any subject and grade level",
            "Supports various question types: multiple choice, fill-in-the-blank, short answer, matching, labeling, and open-ended",
            "Fully customizable content with editable questions and instructions",
            "Aligns worksheets with curriculum standards and specific learning objectives",
            "Output options for print, digital, or interactive auto-graded formats",
            "Automatically includes answer keys for efficient assessment",
        ],
        benefit:
            "Eliminates manual formatting, ensures high-quality learning materials, and empowers educators to deliver personalized, engaging content without time-consuming prep.",
        useCases:
            "Teachers delivering classroom practice or assessments; Tutors creating personalized study material; Edtech platforms offering K-12 or vocational worksheets; Learning centers building homework or revision packs; HR and L&D teams generating skill evaluation worksheets.",
        img: "worksheetGenerationTool",
    },
    {
        title: "Video Dubbing Tool",
        slug: "video-dubbing-tool",
        link: "#",
        description:
            "Transforms any video into multiple languages with AI-powered dubbing, authentic lip-sync, and voice cloning—enabling seamless global content distribution.",
        features: [
            "Translates and dubs videos into 30–140+ languages with a single click",
            "Uses human-like AI voices with emotion replication",
            "Supports voice cloning to retain original speaker’s tone and delivery",
            "Provides realistic lip-sync with advanced audiovisual alignment",
            "Generates automatic subtitles and editable translation scripts",
            "Handles batch processing and supports multiple video formats",
        ],
        benefit:
            "Speeds up video localization while reducing costs, preserves speaker identity, and broadens global reach by making content accessible in multiple languages.",
        useCases:
            "Brands distributing global ads or explainers; Edtech companies localizing educational content; Content creators and agencies scaling multilingual social videos; Enterprises training multilingual teams; Media studios localizing documentaries and original films.",
        img: "videoDubbingTool",
    },
    {
        title: "Resume Shortlisting Assistant",
        slug: "resume-shortlisting-assistant",
        link: "https://resume-shortlisting-assistant-kartavya.vercel.app/",
        description:
            "Automates resume evaluation and shortlisting, surfacing top candidates based on job fit, skills, and experience—reducing bias and administrative effort.",
        features: [
            "Parses thousands of resumes in various formats across industries",
            "Matches qualifications, skills, and experience to job descriptions or custom role profiles",
            "Supports filtering by education, certifications, keywords, project history, outcomes, and soft skills",
            "Identifies standout achievements, leadership traits, and unique career highlights",
            "Flags concerns such as employment gaps, frequent role changes, or mismatches",
            "Ranks and scores candidates objectively with customizable weighting",
            "Integrates with existing HR tools and applicant tracking systems",
        ],
        benefit:
            "Speeds up hiring cycles, improves quality of hire, reduces bias, and enables scalable, data-driven recruitment for any role or volume.",
        useCases:
            "HR teams handling high-volume applications; Enterprises or agencies needing fast shortlisting; Startups hiring without dedicated HR; Companies running seasonal or project-based hiring drives; Internal promotion and mobility programs.",
        img: "resumeShortlistingAssistant",
    },
    {
        title: "Company Name Finder",
        slug: "company-name-finder",
        link: "https://company-mca-eligibility-kartavya.vercel.app/",
        description:
            "Assists entrepreneurs in selecting unique company names that are domain-available and MCA-compliant for legal incorporation in India.",
        features: [
            "Checks availability of proposed names across domain extensions like .com and .in",
            "Validates name eligibility with MCA’s official database for incorporation",
            "Identifies similar or conflicting names and reserved terms per MCA guidelines",
            "Screens for trademark conflicts to prevent legal disputes",
            "Generates brandable name alternatives when original suggestions are unavailable",
            "Provides one-click reports summarizing name, domain, MCA, and trademark statuses",
        ],
        benefit:
            "Reduces risk of naming conflicts, streamlines incorporation, and enables fast digital and legal launch for startups.",
        useCases:
            "Entrepreneurs launching new companies; Startups validating names before branding; Agencies offering incorporation services; Teams seeking instantly usable names with domain and legal availability.",
        img: "companyNameFinder",
    },
    {
        title: "Open Source Projects Finder",
        slug: "open-source-projects-finder",
        link: "https://open-source-projects-finder-kartavya.vercel.app/",
        description:
            "Automatically discovers and recommends relevant open source projects tailored to specific business requirements—enabling faster, smarter tech decisions.",
        features: [
            "Searches open source repositories using natural language input",
            "Ranks projects by use case, maintenance status, community support, and compatibility",
            "Analyzes documentation, stars, contributors, and recent activity for reliability",
            "Flags potential licensing and compliance risks before adoption",
            "Recommends best-fit stacks, libraries, or frameworks by industry and context",
            "Provides side-by-side comparisons between alternative tools",
            "Integrates with internal systems for smooth adoption and tracking",
            "Learns from user feedback to improve future recommendations",
        ],
        benefit:
            "Accelerates solution discovery, reduces adoption risks, supports innovation, and ensures high-quality open-source usage aligned with business needs.",
        useCases:
            "Tech teams sourcing tools for development, DevOps, or AI/ML; Product managers evaluating build vs. buy decisions; CTOs managing license compliance; Startups launching MVPs quickly; Enterprises seeking cost-effective, scalable solutions.",
        img: "openSourceProjectsFinder",
    },
    {
        title: "AI Project Manager",
        slug: "ai-project-manager",
        link: "#",
        description:
            "Orchestrates projects from planning to delivery using AI-powered automation, predictive insights, and risk management to help teams stay on track and deliver results efficiently.",
        features: [
            "Automates project planning, task assignments, and timeline scheduling",
            "Predicts delays and risks using real-time analytics and historical trends",
            "Balances workloads and allocates resources for optimal productivity",
            "Tracks progress with AI-generated dashboards and status reports",
            "Summarizes meetings, documents, and communications into actionable items",
            "Offers scenario planning and predictive analytics for better decisions",
            "Drafts project documents, status reports, and cost-benefit summaries",
            "Supports team collaboration through reminders and communication automation",
        ],
        benefit:
            "Boosts productivity by automating management tasks, reduces risk and delays, optimizes resource allocation, and empowers teams to consistently deliver successful projects.",
        useCases:
            "Enterprises automating large-scale project workflows, IT teams managing complex software rollouts, agencies streamlining multi-client project delivery, startups launching and iterating MVPs, and any team seeking intelligent support for planning and execution.",
        img: "aiProjectManager",
    },
    {
        title: "Data Analyst Copilot",
        slug: "data-analyst-copilot",
        link: "#",
        description:
            "Transforms how businesses handle and analyze data by automatically exploring datasets, identifying trends, and delivering actionable insights in real time—eliminating manual number crunching.",
        features: [
            "Understands business questions and plans multi-step data analysis autonomously",
            "Retrieves and analyzes data from multiple structured and unstructured sources",
            "Applies descriptive, diagnostic, and predictive analytics",
            "Detects trends, patterns, outliers, and anomalies across datasets",
            "Generates visualizations, dashboards, and narrative reports in plain language",
            "Enables natural language queries for self-service analytics",
            "Automates report generation and ad-hoc data exploration",
            "Monitors KPIs and metrics in real time with instant alerts",
            "Learns from previous tasks to improve recommendations continuously",
        ],
        benefit:
            "Accelerates insight generation, reduces reliance on manual analysis, democratizes data access across teams, improves forecasting accuracy, and automates complex workflows—freeing up analysts for strategic initiatives.",
        useCases:
            "Automated BI dashboards and executive summaries, real-time anomaly alerts, demand forecasting for sales/operations, customer behavior analytics, predictive modeling for finance or supply chain, plain language analytics for non-technical teams, and generation of investor-ready reports.",
        img: "dataAnalystCopilot",
    },
    {
        title: "Interactive Smart Cook",
        slug: "interactive-smart-cook",
        link: "http://interactive-smart-cook-kartavya.vercel.app/",
        description:
            "Hands-free, automated gas stove assistant that manages flame, timing, and safety based on your recipe—just arrange the ingredients and let AI handle the rest.",
        features: [
            "Automatically adjusts gas flame and timing based on recipe steps and cookware type",
            "Supports voice, mobile app, or touch-based controls for hands-free operation",
            "Equipped with smart sensors to monitor pan temperature and ingredient status",
            "Provides real-time notifications for adding ingredients and adapts as needed",
            "Built-in safety mechanisms to shut off gas after completion or if anomalies are detected",
            "Stores personalized recipes and user favorites for quick access",
        ],
        benefit:
            "Enables consistent, safe, and effortless cooking without constant supervision—saving time, reducing accidents, and enhancing everyday convenience, especially for families and elderly users.",
        useCases:
            "Home kitchens aiming for safe and easy cooking, elderly or differently-abled individuals needing hands-free meal preparation, and smart kitchen brands offering automation with ethnic or regional presets.",
        img: "interactiveSmartCook",
    },
    {
        title: "School Search Assistant",
        slug: "school-search-assistant",
        link: "https://school-search-kartavya.vercel.app/",
        description:
            "An AI-powered platform that helps parents discover, compare, and select the ideal school for their children by filtering thousands of options based on personalized preferences.",
        features: [
            "Search and filter schools by board (CBSE, ICSE, IB, State), location, fees, and amenities",
            "View detailed school profiles covering academics, infrastructure, co-curriculars, and performance",
            "Compare multiple schools side-by-side to evaluate pros and cons easily",
            "Receive expert counseling tailored to your child’s unique educational needs",
            "Get real-time admission details including deadlines, requirements, and application links",
            "Access verified reviews and ratings from other parents",
            "Explore all types of institutions: preschools, day-schools, boarding, and pre-university",
            "Send direct inquiries and track application status within the platform",
        ],
        benefit:
            "Simplifies school selection for parents by providing trusted data, personalized recommendations, and seamless application tracking—reducing stress and saving valuable time.",
        useCases:
            "Parents relocating and searching schools in a new city, families comparing academic boards based on budget and learning style, guardians evaluating options for day or boarding schools, and parents needing expert advice and application support.",
        img: "schoolSearchAssistant",
    },
    {
        title: "Drawing Copilot",
        slug: "drawing-copilot",
        link: "#",
        description:
            "An AI-powered assistant that helps students improve their drawing skills through guided prompts, step-by-step instructions, and creative feedback in a fun and safe environment.",
        features: [
            "Step-by-step guidance for drawing cartoons, animals, scenes, and more",
            "Creative prompts, coloring pages, and fun art challenges to inspire imagination",
            "Live encouragement and feedback with supportive messages instead of grades",
            "Suggestions on tools to use, whether markers, crayons, pencils, or digital styluses",
            "Photo upload feature for personalized improvement tips on user drawings",
            "Storybuilder mode for creating illustrated books or comics",
            "Progress tracking with badges and family-friendly sharing options",
            "Built-in parental controls and a safe, ad-free environment",
        ],
        benefit:
            "Makes learning to draw fun, encouraging, and accessible for kids, while supporting creativity, confidence, and skill-building in a safe, screen-time-positive platform.",
        useCases:
            "Children aged 5–12 discovering drawing, parents encouraging meaningful screen time, teachers incorporating art into lessons, and after-school programs or camps providing creative enrichment.",
        img: "drawingCopilot",
    },
    {
        title: "Travel Planner",
        slug: "travel-planner",
        // link: "https://travel-planner-kartavya.vercel.app/",
        link: "https://travel-planner-es87.vercel.app",
        description:
            "Smart travel planner that instantly creates and customizes itineraries based on user preferences like source, destination, purpose, budget, and duration—streamlining every journey with tailored recommendations and real-time updates.",
        features: [
            "Auto-generates personalized day-by-day travel plans based on user input",
            "Optimizes trips for various purposes: leisure, business, adventure, or family travel",
            "Recommends flights, accommodations, and activities that match user budget",
            "Allows manual edits, reordering of events, and reflects live route and timing changes",
            "Exports itineraries to PDF or mobile view and integrates live booking links",
        ],
        benefit:
            "Eliminates the need for manual research, delivering cost-effective, personalized itineraries for any kind of traveler while supporting real-time planning and adjustments.",
        useCases:
            "Families planning affordable vacations, professionals organizing business trips with leisure time, and backpackers creating flexible adventure-focused routes.",
        img: "travelPlanner",
    },
    {
        title: "Company Valuation by DCF",
        slug: "company-valuation-by-dcf",
        link: "https://dcf-analysis-kartavya.vercel.app/",
        description:
            "AI calculates a company’s intrinsic value using the Discounted Cash Flow (DCF) method—projecting and discounting future free cash flows to support informed, data-backed investment and business decisions.",
        features: [
            "Collects financial data, projects free cash flow (FCF), and estimates terminal value",
            "Applies appropriate discount rates such as WACC or cost of equity",
            "Supports both FCFF (firm value) and FCFE (equity value) methodologies",
            "Performs scenario and sensitivity analyses on growth assumptions, risk, and discount rates",
            "Generates valuation summaries and detailed calculation trails with export options",
        ],
        benefit:
            "Provides unbiased, cash flow-based company valuations that improve decision-making for M&A, fundraising, and investments while saving hours of manual modeling effort.",
        useCases:
            "Analysts inputting financial forecasts for automated valuation, founders preparing for investor meetings, or VCs evaluating deal opportunities using reliable DCF models.",
        img: "companyValuationByDcf",
    },
    {
        title: "US College Admission Counselor",
        slug: "us-college-admission-counselor",
        link: "#",
        description:
            "An AI-driven admission counselor that guides students and families through every step of the US college application process—offering tailored recommendations, document review, deadline tracking, and 24/7 support based on individual profiles and aspirations.",
        features: [
            "Provides personalized college and major recommendations based on academic profile and goals",
            "Answers queries instantly about admission requirements, deadlines, eligibility, and documentation for any US college",
            "Delivers step-by-step guidance on applications, essays, scholarships, and financial aid",
            "Generates dynamic checklists and reminders for every stage of the application process",
            "Offers real-time feedback on essays and resumes with personalized improvement tips",
            "Includes 24/7 interactive chat support for students, parents, and counselors",
            "Integrates insights from thousands of admissions experts and verified sources",
        ],
        benefit:
            "Democratizes access to high-quality college admissions guidance, reduces stress and errors, improves student outcomes, and scales support for schools and families.",
        useCases:
            "Used by high school counselors to scale guidance, by students and parents navigating complex US applications, and by international applicants or underserved communities seeking reliable and affordable college counseling.",
        img: "usCollegeAdmissionCounselor",
    },
    {
        title: "Stock Market Expert",
        slug: "stock-market-expert",
        link: "https://nse-stock-market-analysis-kartavya.vercel.app/",
        description:
            "An AI-powered assistant that instantly answers user queries about Indian stocks, sectors, and market trends using real-time data, analytics, and expert-level insights—available 24/7 in both English and Hindi.",
        features: [
            "Answers queries about stocks, sectors, and markets in plain English or Hindi",
            "Analyzes live stock prices, charts, financial statements, earnings, and news",
            "Provides buy/sell/hold recommendations based on technical and fundamental analysis",
            "Tracks user portfolios, sets custom alerts, and delivers personalized research summaries",
            "Handles 'what-if' investment scenarios and long-term strategy recommendations",
            "Continuously learns from live market data and user feedback for more accurate advice",
        ],
        benefit:
            "Empowers users with instant, data-backed investment decisions while reducing risk and saving time—eliminating the need for manual research or waiting on analysts.",
        useCases:
            "Used by retail investors for real-time stock insights, traders for technical signals and alerts, beginners learning to invest in India, and advanced users optimizing portfolios and strategies.",
        img: "stockMarketExpert",
    },
    {
        title: "Books Finder",
        slug: "books-finder",
        link: "#",
        description:
            "An intelligent book discovery assistant that finds and recommends titles perfectly aligned with a user’s niche topics, interests, and criteria—cutting through massive catalogs to deliver curated, high-quality reading options.",
        features: [
            "Understands niche requirements via keywords, themes, genres, or technical subjects",
            "Searches across multiple sources: online libraries, bookstores, academic repositories, and user reviews",
            "Filters by relevance, author credibility, publication date, ratings, and availability",
            "Provides summaries, excerpts, and side-by-side comparisons of recommended books",
            "Supports multiple formats: print, ebook, audiobook, and open-access options",
            "Enables bookmarking, wishlists, and direct purchase or library lending links",
            "Offers multilingual search and recommendations based on user language preference",
        ],
        benefit:
            "Saves users hours of manual research by delivering curated, niche-focused book lists while enhancing learning, leisure, and discovery experiences with precise, relevant suggestions.",
        useCases:
            "Students or researchers finding specialized academic resources; professionals staying updated with the latest industry literature; hobbyists discovering niche guides; libraries and bookstores offering AI-driven book discovery; content creators and educators sourcing high-quality supporting materials.",
        img: "booksFinder",
    },
    {
        title: "Movies Explorer",
        slug: "movies-explorer",
        link: "#",
        description:
            "An intelligent movie discovery assistant that finds films perfectly aligned with a user’s niche interests, genres, and preferences—delivering curated, high-quality viewing recommendations across multiple platforms.",
        features: [
            "Understands user preferences via keywords, themes, genres, actors, or directors",
            "Searches multiple databases and streaming platforms for broad availability",
            "Filters by release year, language, ratings, popularity, and critical acclaim",
            "Provides detailed summaries, trailers, reviews, and viewing options",
            "Supports personalized watchlists and alerts for new niche-specific releases",
            "Suggests related movies and curated niche collections",
            "Offers multi-language support and subtitle availability",
        ],
        benefit:
            "Saves users hours of searching by delivering curated, highly relevant movie recommendations while enhancing viewing satisfaction and content discovery experiences.",
        useCases:
            "Movie buffs exploring specific genres or cult classics; viewers seeking films by niche themes such as environmental documentaries or indie horror; streaming platforms delivering personalized recommendations; educators and curators building themed lists; casual viewers discovering unique, tailored content.",
        img: "moviesExplorer",
    },
    {
        title: "City Guide",
        slug: "city-guide",
        link: "https://personalized-guide-kartavya.vercel.app/",
        description:
            "An AI-powered city guide that delivers personalized recommendations on attractions, dining, events, transport, and hidden gems—helping users explore new cities effortlessly with tailored, real-time insights.",
        features: [
            "Creates customizable itineraries based on user interests like history, food, or art",
            "Offers real-time navigation with offline accessibility and interactive maps",
            "Discovers local events with personalized suggestions and booking options",
            "Provides multilingual support and in-app translation for seamless communication",
            "Includes augmented reality features for enriched landmark exploration",
            "Integrates city passes for transport and attraction discounts",
            "Displays user reviews, ratings, and safety alerts for informed decisions",
        ],
        benefit:
            "Enhances travel experiences with tailored, immersive city exploration while saving time and improving engagement with local culture, businesses, and events.",
        useCases:
            "Tourists seeking curated city tours and hidden gems; business travelers looking for quick, relevant recommendations; residents discovering local events; travel agencies and tourism boards offering AI-powered visitor services.",
        img: "cityGuide",
    },
    {
        title: "SRS Generator",
        slug: "srs-generator",
        link: "https://srs-generator-kartavya.vercel.app/",
        description:
            "An AI-powered agent that understands plain-language business requirements and instantly produces a structured, professional Software Requirements Specification (SRS) ready for engineering teams.",
        features: [
            "Reads and analyzes business needs, goals, and use cases from prompts or plain text",
            "Auto-generates scope, objectives, functional & non-functional requirements, user stories, and technical constraints",
            "Organizes content into standard SRS sections with editable details",
            "Supports custom formats and templates (e.g., IEEE or client-specific)",
            "Tracks versions with history and exports to PDF or Word",
            "Suggests improvements and flags ambiguities for clarification",
        ],
        benefit:
            "Saves hours of manual documentation, ensures clear and comprehensive specs for smooth developer handoff, and reduces misunderstandings, rework, and project delays across product, app, web, or API projects.",
        useCases:
            "Startup founders turning a vision into dev-ready specs; consultants generating SRS for client projects; enterprises standardizing requirements for vendors; agile teams quickly updating specs for new features.",
        img: "srsGenerator",
    },
    {
        title: "Pricing Agent",
        slug: "pricing-agent",
        link: "#",
        description:
            "An AI-powered agent that conducts market research, analyzes competitors, customer demand, and business goals, then suggests optimal prices for products or services—maximizing profit and competitiveness.",
        features: [
            "Scans competitor pricing, market trends, and customer willingness-to-pay",
            "Factors in costs, target margins, and business objectives",
            "Runs dynamic pricing simulations and 'what-if' scenarios",
            "Suggests tiered plans, discounting strategies, and segmentation",
            "Auto-generates pricing tables/reports and exportable recommendations",
            "Adapts for B2B, B2C, SaaS, retail, and services",
            "Includes ongoing monitoring with alerts for market changes",
        ],
        benefit:
            "Takes the guesswork out of pricing with data-backed recommendations, increases sales, margins, and competitiveness, and saves hours of manual research and spreadsheets. Flexible for launches, promotions, or changing market conditions.",
        useCases:
            "New product launches requiring competitive pricing; service businesses analyzing market rates for client segments; SaaS firms testing tiered pricing and discounts; retailers updating prices for seasonal or trend-based shifts.",
        img: "pricingAgent",
    },
    {
        title: "Dietitian",
        slug: "dietitian",
        link: "https://ai-dietitian-kartavya.vercel.app/",
        description:
            "An AI Dietitian assistant that understands each user’s unique health goal (weight loss, muscle gain, managing conditions, or boosting energy) and instantly creates a personalized diet plan—adapting recommendations for tastes, allergies, lifestyle, and progress.",
        features: [
            "Learns user health targets, food preferences, allergies, and schedule",
            "Crafts daily/weekly meal plans with calorie & macro targets calculated for the goal",
            "Suggests recipes, grocery lists, and easy swaps for variety",
            "Tracks food intake and gives adjustment tips as user progresses",
            "Integrates with fitness trackers for holistic health monitoring",
            "Supports special diets: vegetarian/vegan, diabetic, gluten-free, etc.",
            "Offers reminders, motivational nudges, and progress dashboards",
        ],
        benefit:
            "Accelerates goal achievement with professional, tailored advice, simplifies healthy eating for any lifestyle or cuisine, reduces decision fatigue, and keeps users engaged and accountable on their health journey.",
        useCases:
            "Weight loss, muscle gain, or energy optimization; managing conditions like diabetes or cholesterol; athletes fine-tuning performance nutrition; families or individuals developing healthy lifelong habits.",
        img: "dietitian",
    },
    {
        title: "AI Doctor",
        slug: "ai-doctor",
        link: "https://ai-doctor-kartavya.vercel.app/",
        description:
            "An AI Doctor assistant that listens to user-reported symptoms, assesses health issues, and recommends appropriate medicines or next steps—providing instant, personalized suggestions in clear language.",
        features: [
            "Quickly understands health problems from user description",
            "Offers possible diagnoses and drug recommendations (OTC/Rx) with dosage guidance",
            "Considers age, gender, allergies, conditions, and medication history",
            "Suggests when to seek doctor or emergency care for complex issues",
            "Explains usage, side-effects, and interactions in plain language",
            "Tracks health queries, medicine usage, and outcomes for better follow-up",
            "Supports multiple languages and private, secure conversations",
        ],
        benefit:
            "Provides rapid, accessible medical support for minor issues and first aid, reduces time spent on basic health research, empowers users to manage health proactively and safely, and escalates urgent or unclear cases to human doctors when needed.",
        useCases:
            "Cold, fever, pain, digestive issues, allergies, skin problems; chronic illness management and monitoring; parents caring for children’s routine ailments; travelers needing medicine advice abroad.",
        img: "aiDoctor",
    },
];

export const projectsShortDescriptions = [
    {
        title: "Lead Generation",
        slug: "lead-generation",
        description:
            "Empower businesses to efficiently generate qualified leads and engage them through automated, personalized email outreach.",
    },
    {
        title: "Contract Review Assistant",
        slug: "contract-review-assistant",
        description:
            "Automates contract analysis to extract key terms, identify negotiation points, and recommend improvements—accelerating legal workflows and reducing risk.",
    },
    {
        title: "LinkedIn Posting Assistant",
        slug: "linkedin-posting-assistant",
        description:
            "Identifies and analyzes key LinkedIn posts from your target audience and generates AI-personalized replies—helping your team engage at the right time, with the right message.",
    },
    {
        title: "Entrepreneur Copilot",
        slug: "entrepreneur-copilot",
        description:
            "Empowers startup founders to instantly generate, refine, and execute robust go-to-market (GTM) strategies tailored to their business idea—leveraging AI for market analysis, customer targeting, competitive positioning, and rapid business launch.",
    },
    {
        title: "Lead Generation with Voice Calling",
        slug: "lead-generation-with-voice",
        description:
            "Empower businesses to efficiently generate qualified leads and engage them through automated, personalized email and AI calling outreach.",
    },
    {
        title: "Github Profile Review Assistant",
        slug: "github-profile-review-assistant",
        description:
            "Empowers hiring teams to make confident, data-informed decisions by analyzing and summarizing GitHub profiles—surfacing the most relevant skills, project strengths, and collaboration habits for each developer candidate.",
    },
    {
        title: "Presentation Maker",
        slug: "presentation-maker",
        description:
            "Transforms simple business ideas, briefs, or overviews into ready-to-share, professional-grade presentations—saving teams hours on formatting, writing, and design.",
    },
    {
        title: "Researcher",
        slug: "researcher",
        description:
            "Empowers teams and individuals to perform thorough research and automatically produce structured, decision-ready reports on any subject.",
    },
    {
        title: "Web App Performance Analyst",
        slug: "web-app-performance-analyst",
        description:
            "Delivers real-time, AI-powered insights into web application performance—enabling teams to detect, diagnose, and resolve slowdowns and bottlenecks before they impact users or business goals.",
    },
    {
        title: "Poll Generation for Social Media",
        slug: "poll-generation-for-social-media",
        description:
            "Automatically creates and posts engaging, relevant polls based on trending topics—enhancing audience interaction, collecting feedback, and boosting visibility across social media platforms.",
    },
    {
        title: "Presentation Analyzer",
        slug: "presentation-analyzer",
        description:
            "Automatically reviews presentation decks to extract insights, summarize content, and suggest actionable improvements—empowering users to deliver more effective, impactful, and well-structured presentations.",
    },
    {
        title: "Contract Generator",
        slug: "contract-generator",
        description:
            "Creates customized project contracts and Statements of Work (SOW) instantly from basic project details—standardizing agreements, accelerating project start, and safeguarding both business and client interests.",
    },
    {
        title: "Social Profile Analyst",
        slug: "social-profile-analyst",
        description:
            "Analyzes and summarizes candidates’ social media presence to provide deeper, data-driven insights into personality, values, skills, and potential culture fit—enabling recruiters to make informed, holistic hiring decisions.",
    },
    {
        title: "AWS Expert",
        slug: "aws-expert",
        description:
            "Your intelligent AWS Expert Copilot automates, optimizes, and secures your cloud operations, delivering enterprise-grade support and strategic recommendations that empower teams to operate at the forefront of cloud innovation.",
    },
    {
        title: "World Economic Expert",
        slug: "world-economic-expert",
        description:
            "An AI-powered World Economic Expert provides real-time global economic analysis, market forecasting, and actionable policy recommendations, enabling rapid and deep understanding of global macroeconomic trends, market shifts, and international trade dynamics.",
    },
    {
        title: "YouTube Automation Assistant",
        slug: "youtube-automation-assistant",
        description:
            "Automates the complete YouTube channel lifecycle—from topic discovery to video creation and publishing—helping creators deliver high-quality content effortlessly and consistently.",
    },
    {
        title: "Worksheet Generation Tool",
        slug: "worksheet-generation-tool",
        description:
            "Automatically creates customizable, curriculum-aligned educational worksheets across subjects and grade levels—saving time and enhancing instructional effectiveness.",
    },
    {
        title: "Video Dubbing Tool",
        slug: "video-dubbing-tool",
        description:
            "Transforms any video into multiple languages with AI-powered dubbing, authentic lip-sync, and voice cloning—enabling seamless global content distribution.",
    },
    {
        title: "Resume Shortlisting Assistant",
        slug: "resume-shortlisting-assistant",
        description:
            "Automates resume evaluation and shortlisting, surfacing top candidates based on job fit, skills, and experience—reducing bias and administrative effort.",
    },
    {
        title: "Company Name Finder",
        slug: "company-name-finder",
        description:
            "Assists entrepreneurs in selecting unique company names that are domain-available and MCA-compliant for legal incorporation in India.",
    },
    {
        title: "Open Source Projects Finder",
        slug: "open-source-projects-finder",
        description:
            "Automatically discovers and recommends relevant open source projects tailored to specific business requirements—enabling faster, smarter tech decisions.",
    },
    {
        title: "AI Project Manager",
        slug: "ai-project-manager",
        description:
            "Orchestrates projects from planning to delivery using AI-powered automation, predictive insights, and risk management to help teams stay on track and deliver results efficiently.",
    },
    {
        title: "Data Analyst Copilot",
        slug: "data-analyst-copilot",
        description:
            "Transforms how businesses handle and analyze data by automatically exploring datasets, identifying trends, and delivering actionable insights in real time—eliminating manual number crunching.",
    },
    {
        title: "Interactive Smart Cook",
        slug: "interactive-smart-cook",
        description:
            "Hands-free, automated gas stove assistant that manages flame, timing, and safety based on your recipe—just arrange the ingredients and let AI handle the rest.",
    },
    {
        title: "School Search Assistant",
        slug: "school-search-assistant",
        description:
            "An AI-powered platform that helps parents discover, compare, and select the ideal school for their children by filtering thousands of options based on personalized preferences.",
    },
    {
        title: "Drawing Copilot",
        slug: "drawing-copilot",
        description:
            "An AI-powered assistant that helps students improve their drawing skills through guided prompts, step-by-step instructions, and creative feedback in a fun and safe environment.",
    },
    {
        title: "Travel Planner",
        slug: "travel-planner",
        description:
            "Smart travel planner that instantly creates and customizes itineraries based on user preferences like source, destination, purpose, budget, and duration—streamlining every journey with tailored recommendations and real-time updates.",
    },
    {
        title: "Company Valuation by DCF",
        slug: "company-valuation-by-dcf",
        description:
            "AI calculates a company’s intrinsic value using the Discounted Cash Flow (DCF) method—projecting and discounting future free cash flows to support informed, data-backed investment and business decisions.",
    },
    {
        title: "US College Admission Counselor",
        slug: "us-college-admission-counselor",
        description:
            "An AI-driven admission counselor that guides students and families through every step of the US college application process—offering tailored recommendations, document review, deadline tracking, and 24/7 support based on individual profiles and aspirations.",
    },
    {
        title: "Stock Market Expert",
        slug: "stock-market-expert",
        description:
            "An AI-powered assistant that instantly answers user queries about Indian stocks, sectors, and market trends using real-time data, analytics, and expert-level insights—available 24/7 in both English and Hindi.",
    },
    {
        title: "Books Finder",
        slug: "books-finder",
        description:
            "An intelligent book discovery assistant that finds and recommends titles perfectly aligned with a user’s niche topics, interests, and criteria—cutting through massive catalogs to deliver curated, high-quality reading options.",
    },
    {
        title: "Movies Explorer",
        slug: "movies-explorer",
        description:
            "An intelligent movie discovery assistant that finds films perfectly aligned with a user’s niche interests, genres, and preferences—delivering curated, high-quality viewing recommendations across multiple platforms.",
    },
    {
        title: "City Guide",
        slug: "city-guide",
        description:
            "An AI-powered city guide that delivers personalized recommendations on attractions, dining, events, transport, and hidden gems—helping users explore new cities effortlessly with tailored, real-time insights.",
    },
    {
        title: "SRS Generator",
        slug: "srs-generator",
        description:
            "An AI-powered agent that understands plain-language business requirements and instantly produces a structured, professional Software Requirements Specification (SRS) ready for engineering teams.",
    },
    {
        title: "Pricing Agent",
        slug: "pricing-agent",
        description:
            "An AI-powered agent that conducts market research, analyzes competitors, customer demand, and business goals, then suggests optimal prices for products or services—maximizing profit and competitiveness.",
    },
    {
        title: "Dietitian",
        slug: "dietitian",
        description:
            "An AI Dietitian assistant that understands each user’s unique health goal (weight loss, muscle gain, managing conditions, or boosting energy) and instantly creates a personalized diet plan—adapting recommendations for tastes, allergies, lifestyle, and progress.",
    },
    {
        title: "AI Doctor",
        slug: "ai-doctor",
        description:
            "An AI Doctor assistant that listens to user-reported symptoms, assesses health issues, and recommends appropriate medicines or next steps—providing instant, personalized suggestions in clear language.",
    },
];
