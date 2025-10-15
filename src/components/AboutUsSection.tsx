import { Award, Rocket } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";

const AboutUsSection = () => {
    return (
        <section
            id="about"
            className="py-24 md:px-10 bg-background relative overflow-hidden"
        >
            {/* Decorative background blur */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div
                        className="animate-fade-in-up space-y-6"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-foreground leading-tight">
                            About <AuroraText>Kartavya Technology</AuroraText>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            <TextAnimate animation="slideUp" by="word">
                                Founded by technology visionary
                            </TextAnimate>
                            <a
                                href="https://www.linkedin.com/in/dharamtiwari/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-primary/80"
                            >
                                Dharam Tiwari
                            </a>
                            <TextAnimate animation="slideUp" by="word">
                                Kartavya Technology is based in Bangalore,
                                India’s premier tech hub. With 24+ years in
                                software, Dharam has led global projects and
                                built scalable AI-powered platforms.
                            </TextAnimate>
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <Rocket className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Our Mission
                                    </h3>
                                    <p className="text-muted-foreground">
                                        <TextAnimate
                                            animation="slideUp"
                                            by="word"
                                        >
                                            As an official CrewAI partner, we
                                            make advanced AI solutions scalable
                                            and accessible for businesses of all
                                            sizes.
                                        </TextAnimate>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Our Expertise
                                    </h3>
                                    <p className="text-muted-foreground">
                                        <TextAnimate
                                            animation="slideUp"
                                            by="word"
                                        >
                                            Our experienced team builds robust,
                                            scalable AI platforms that deliver
                                            real business outcomes.
                                        </TextAnimate>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div
                        className="animate-fade-in-up  shadow-2xl shadow-primary hidden md:flex"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="relative overflow-hidden border-[1px] border-[#737373] shadow-lg group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl opacity-20 z-[-1]" />
                            <img
                                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800"
                                alt="Our Team"
                                className=" w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
