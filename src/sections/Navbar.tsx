import Image from "next/image";
import logoImage from "@/assets/images/logo.png";
import menu from "@/assets/images/menu.svg";
import Button from "@/components/Button";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4  md:pr-2 items-center">
                    <div className="flex items-center justify-start gap-2">
                        <Image
                            src={logoImage}
                            alt="Strata Logo"
                            className="h-8 md:h-10 w-auto"
                        />
                        <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">Strata</h1>
                    </div>

                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <Link href={link.href} key={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex justify-end gap-4">
                        <Image
                            src={menu}
                            alt="Menu"
                            style={{ filter: "invert(1)" }}
                            className="md:hidden"
                        />
                        <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="primary"
                            className="hidden md:inline-flex items-center"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
