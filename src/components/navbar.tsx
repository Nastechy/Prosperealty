"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const baseLinks = [
    { label: "Home", route: "/" },
    { label: "About Us", route: "/aboutUs" },
    { label: "Our Team", route: "/ourTeam" },
    // Properties handled separately (dropdown)
    { label: "Contact Us", route: "/contactUs" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobilePropsOpen, setMobilePropsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (route: string) => {
        if (route === "/") return pathname === "/";
        return pathname === route || pathname.startsWith(route + "/");
    };

    const propsActive =
        pathname === "/properties" ||
        pathname.startsWith("/properties/land") ||
        pathname.startsWith("/properties/houses");

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
            <div className="flex items-center justify-between md:px-20 px-0 h-16 md:h-24">
                <div className="flex items-start justify-start">
                    <Link href="/">
                        <Image
                            src="/prosperealty.jpg"
                            alt="prosperealty company Logo"
                            width={180}
                            height={150}
                            className="object-contain rounded-full md:w-[200px] w-[150px]"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-16 font-[500] text-[15px]">
                    {baseLinks.map(({ label, route }) => (
                        <Link
                            key={route}
                            href={route}
                            className={cn(
                                "transition-transform font-bold",
                                isActive(route)
                                    ? "text-[#7C9343]"
                                    : "text-[#1A1D20] hover:border-black hover:scale-110 hover:border hover:px-4 hover:py-2 hover:rounded-[4px]"
                            )}
                        >
                            {label}
                        </Link>
                    ))}

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                "flex items-center gap-1 font-bold outline-none",
                                propsActive ? "text-[#7C9343]" : "text-[#1A1D20]"
                            )}
                        >
                            Properties <ChevronDown className="h-4 w-4 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="min-w-[180px]">
                            <DropdownMenuItem asChild>
                                <Link href="/properties/houses" className="cursor-pointer font-semibold">Houses</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/properties/land" className="cursor-pointer font-semibold">Lands</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex">
                    <Link href="/properties" className="w-full">
                        <Button className="bg-[#7C9343] hover:bg-black cursor-pointer text-white rounded-[5px] px-3 font-bold w-full">
                            Discover Properties
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none mr-6"
                    onClick={() => setIsMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-[#0b1020]" />
                    ) : (
                        <Menu className="h-6 w-6 text-[#0b1020]" />
                    )}
                </button>

                {/* Mobile menu */}
                <div
                    className={cn(
                        "absolute top-full left-0 right-0 bg-[#0b1020] border-[1px] border-[#232225] border-t-0 rounded-b-[20px] shadow-lg p-4 transition-all duration-300 transform md:hidden",
                        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-4">
                        {baseLinks.map(({ label, route }) => (
                            <Link
                                key={route}
                                href={route}
                                className={cn(
                                    "transition-transform px-4 font-bold",
                                    isActive(route) ? "text-[#7C9343]" : "text-white hover:scale-110"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}

                        {/* Properties expandable (mobile) */}
                        <button
                            className={cn(
                                "px-4 text-left font-bold flex items-center justify-between",
                                propsActive ? "text-[#7C9343]" : "text-white"
                            )}
                            onClick={() => setMobilePropsOpen((v) => !v)}
                            aria-expanded={mobilePropsOpen}
                        >
                            <span>Properties</span>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform",
                                    mobilePropsOpen ? "rotate-180" : "rotate-0"
                                )}
                            />
                        </button>
                        {mobilePropsOpen && (
                            <div className="ml-6 flex flex-col space-y-2">
                                <Link
                                    href="/properties/houses"
                                    className={cn(
                                        "px-4 font-semibold",
                                        pathname.startsWith("/properties/houses") ? "text-[#7C9343]" : "text-white"
                                    )}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setMobilePropsOpen(false);
                                    }}
                                >
                                    Houses
                                </Link>
                                <Link
                                    href="/properties/land"
                                    className={cn(
                                        "px-4 font-semibold",
                                        pathname.startsWith("/properties/land") ? "text-[#7C9343]" : "text-white"
                                    )}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setMobilePropsOpen(false);
                                    }}
                                >
                                    Lands
                                </Link>

                            </div>
                        )}

                        <div className="pt-2">
                            <Button
                                className="bg-[#7C9343] hover:bg-[#1A1D20] cursor-pointer text-white rounded-[10px] px-3 font-bold w-full"
                                asChild
                            >
                                <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
                                    Discover Properties
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
