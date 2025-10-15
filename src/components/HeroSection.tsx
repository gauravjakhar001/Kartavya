import { Link } from "react-router-dom";
import { Particles } from "@/components/magicui/particles";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShinyButton } from "@/components/magicui/shiny-button";

const HeroSection = () => {
    return (
        <section className="relative md:px-10 flex items-center text-center overflow-hidden">
            {/* Background Effects */}
            {/* <div className="absolute inset-0  z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute inset-0 animate-background-pan bg-gradient-to-br from-primary/10 via-background to-accent/10 [background-size:200%_200%]" />
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
          </div> */}

            {/* Overlay */}
            <div className="absolute inset-0  z-10" />

            {/* Content */}
            {/* Content */}
            <div
                className="container relative z-20 px-7 md:px-10 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
            >
                {/* Centered particles behind H1 */}
                <div className="relative inline-block w-full">
                    <div className="absolute inset-0 flex justify-center items-center z-[-1]">
                        <div className="w-full h-60 ">
                            <Particles
                                quantity={100}
                                className="h-screen"
                                color="#919191"
                                staticity={10}
                                ease={10}
                            />
                        </div>
                    </div>

                    <h1 className="mt-40 text-6xl font-bold tracking-tighter relative z-10">
                        AI{" "}
                        <span className="inline-block ">
                            <SparklesText
                                colors={{ first: "#A07CFE", second: "#FE8FB5" }}
                                className="text-white "
                            >
                                Agents
                            </SparklesText>
                        </span>{" "}
                        That Work Like Your Best Employees
                    </h1>
                </div>

                <p className="mx-auto mt-10 max-w-[700px] text-lg md:text-xl text-muted-foreground">
                    <TextAnimate
                        animation="blurIn"
                        as="h1"
                        delay={1}
                        duration={1.5}
                    >
                        We build custom AI agents for business tasks. From
                        customer support to internal operations.
                    </TextAnimate>
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <InteractiveHoverButton>
                        <Link to="/#contact" className="text-sm sm:text-lg">
                            Learn More
                        </Link>
                    </InteractiveHoverButton>
                    <a
                        href="https://calendly.com/dharam-tiwari/30min?month=2025-07"
                        className=""
                    >
                        <ShinyButton className="font-bold rounded-full hover:border-primary border-[1px] py-3 bg-primary ">
                            Schedule Demo
                        </ShinyButton>
                    </a>
                </div>

                {/* Partner Logo */}
                <div
                    className="mt-12 flex flex-col items-center justify-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                >
                    <p className="text-sm mt-8 font-medium tracking-widest text-muted-foreground uppercase">
                        An Official CrewAI Partner
                    </p>
                    <a
                        href="https://www.crewai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            alt="CrewAI Logo"
                            src="/lovable-uploads/41c54439-8765-4c3b-aeab-2a51271471c1.png"
                            className="h-28 object-fill transition-transform hover:scale-105"
                        />
                    </a>
                </div>
            </div>

            {/* Custom Grid Styles */}
            <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at 50% 50%, var(--tw-gradient-stops));
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
