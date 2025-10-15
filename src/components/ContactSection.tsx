import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import pp from "../../public/images/dharamTiwariProfilePicture.png";
import { ShinyButton } from "@/components/magicui/shiny-button";

const ContactSection = () => {
    return (
        <section id="contact" className="pt-10 pb-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                        Ready to <AuroraText>Innovate?</AuroraText>
                    </h2>
                    <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
                        <TextAnimate
                            animation="blurIn"
                            as="h1"
                            delay={1}
                            duration={1.5}
                        >
                            Let's discuss how our AI agents can revolutionize
                            your business. Schedule a free consultation with us.
                        </TextAnimate>
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Founder Profile */}
                    <div className="">
                        <img
                            src={pp}
                            alt="Founder"
                            className="w-32 h-32 rounded-2xl mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold">Dharam Tiwari</h3>
                        <p className="text-muted-foreground mt-2 text-sm">
                            Founder & CEO, Kartavya Technology
                        </p>
                    </div>

                    {/* Booking Section */}
                    <div className="">
                        <h4 className="text-2xl font-bold mb-4">
                            Book a Free Consultation
                        </h4>
                        <p className="text-muted-foreground mb-6">
                            Discuss your project and explore how AI agents can
                            elevate your business.
                        </p>
                        <a
                            href="https://calendly.com/dharam-tiwari/30min?month=2025-07"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <a
                                href="https://calendly.com/dharam-tiwari/30min?month=2025-07"
                                className=""
                            >
                                <ShinyButton className="font-bold rounded-full hover:border-primary border-[1px] py-3 bg-primary ">
                                    Schedule Demo
                                </ShinyButton>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
