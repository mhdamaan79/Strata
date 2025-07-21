import logoImage from "@/assets/images/logo.png";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div>
                        <div className="flex items-center justify-start gap-2">
                            <Image
                                src={logoImage}
                                alt="Strata Logo"
                                className="h-8 md:h-10 w-auto"
                            />
                            <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">
                                Strata
                            </h1>
                        </div>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
