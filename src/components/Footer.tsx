import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="py-8 bg-background border-t">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-6">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <img
                                src="/lovable-uploads/7242a710-3055-4f90-acd8-738e65364450.png"
                                alt="Kartavya Technology Logo"
                                className="h-6 w-6"
                            />
                            <span className="font-semibold text-primary">
                                Kartavya Technology
                            </span>
                        </div>
                        <div className="flex flex-col items-start gap-0 text-sm text-muted-foreground">
                            <span>
                                <strong>Address:</strong> 419, Asset Alcazar,
                                Sarjapur Road, Bangalore-562125
                            </span>
                            <span>
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:dharam@kartavyatech.com"
                                    className="text-primary underline hover:text-primary/80"
                                >
                                    dharam@kartavyatech.com
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex gap-4">
                            <Link
                                to="/privacy-policy"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms-of-service"
                                className="text-sm text-muted-foreground hover:text-primary hover:underline"
                            >
                                Terms of Service
                            </Link>
                        </div>
                        <div className="text-xs text-muted-foreground text-right w-full mt-1">
                            &copy; 2025 Kartavya Technology. All rights
                            reserved.
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-border/20" />
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">An Official Partner of</span>
                    <a
                        href="https://crewai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-105"
                    >
                        <img
                            alt="CrewAI Logo"
                            src="/lovable-uploads/a21f687c-df43-4b30-b2a1-7fbaec561819.png"
                            className="h-12 object-contain"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
