import { Link } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
    { name: "Services", path: "/#services" },
    { name: "AI Agents", path: "/#agents" },
    { name: "AI Apps", path: "/#apps" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
];

const Logo = ({ size = 12 }) => (
    <Link
        to="/"
        className={`flex items-center gap-2 font-bold text-2xl sm:text-3xl`}
    >
        <img
            src="/lovable-uploads/7242a710-3055-4f90-acd8-738e65364450.png"
            alt="Kartavya Logo"
            className={`h-${size} w-${size} animate-spin-slow`}
        />
        <span className="text-logo-gradient ">Kartavya</span>
    </Link>
);

const Header = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-50 pt-2 px-2 md:px-16">
            <header className="  backdrop-blur-md border-[1px]  rounded-full">
                <div className="px-4 sm:px-7 flex h-16 items-center justify-between ">
                    <Logo />
                    <nav className="hidden md:flex items-center md:text-sm lg:text-lg gap-6">
                        {navItems.map(({ name, path }) => (
                            <Link
                                key={name}
                                to={path}
                                className="text-muted-foreground transition-all duration-300 hover:text-primary hover:text-xl hover:-translate-y-0.5"
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>
                    {/* <Link
          to="/#contact"
          className="hidden md:inline-block bg-gradient-to-r from-fuchsia-800 to-purple-800 text-black backdrop-blur-md border border-white/20 shadow-md hover:shadow-lg transition px-4 py-2 rounded-md"
        >
          Get a Demo
        </Link> */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="p-2" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] flex flex-col p-0"
                            >
                                <div className="p-4 border-b">
                                    <Logo size={8} />
                                </div>
                                <nav className="flex flex-col gap-4 p-4">
                                    {navItems.map(({ name, path }) => (
                                        <SheetClose asChild key={name}>
                                            <Link
                                                to={path}
                                                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                                <div className="mt-auto p-4 border-t">
                                    <SheetClose asChild>
                                        <Link
                                            to="/#contact"
                                            className="w-full inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-primary to-purple-600 px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:from-primary/90 hover:to-purple-600/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        >
                                            Get a Demo
                                        </Link>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
