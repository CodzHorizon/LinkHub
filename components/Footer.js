"use client";
import React from "react";
import { useAnimation } from "@/components/animationcontext";
import Link from "next/link";
import { NAVBAR_ANIMATIONS } from "@/components/Navbar";

const Footer = () => {
    const { animationIdx } = useAnimation();
    const animations = NAVBAR_ANIMATIONS();
    const animation = animations[animationIdx] || animations[0];

    const NAVBAR_TEXT_COLOR = {
        0: "#000", // Plain
        1: "#000", // Colorful
        2: "#f3f4f6", // Cloudy (white)
        3: "#000", // Nature
    };

    const footerclass = ` w-[96vw] sm:w-[94vw]  mx-auto shadow-lg rounded-xl px-5 py-6 sm:px-4 sm:py-8  flex items-center justify-between transition-all overflow-hidden duration-500 mb-2
    ${animation.className}`;

    return (
        <footer className={footerclass}>
            {/* Cloudy animation */}
            {animationIdx === 2 && (
                <>
                    <div
                        className="lightning-flash"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1,
                            pointerEvents: "none",
                        }}
                    ></div>
                    <svg
                        className="cloud"
                        width="120"
                        height="40"
                        viewBox="0 0 120 40"
                        fill="none"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            pointerEvents: "none",
                        }}
                    >
                        <ellipse cx="30" cy="25" rx="30" ry="15" fill="#e5e7eb" />
                        <ellipse cx="70" cy="20" rx="25" ry="13" fill="#e5e7eb" />
                        <ellipse cx="100" cy="28" rx="20" ry="10" fill="#e5e7eb" />
                    </svg>
                    <svg
                        className="cloud cloud2"
                        width="100"
                        height="32"
                        viewBox="0 0 100 32"
                        fill="none"
                        style={{
                            position: "absolute",
                            top: "20px",
                            left: "60%",
                            zIndex: 2,
                            pointerEvents: "none",
                        }}
                    >
                        <ellipse cx="25" cy="18" rx="22" ry="10" fill="#e5e7eb" />
                        <ellipse cx="60" cy="14" rx="18" ry="8" fill="#e5e7eb" />
                        <ellipse cx="85" cy="20" rx="13" ry="6" fill="#e5e7eb" />
                    </svg>
                    <svg
                        className="cloud cloud3"
                        width="80"
                        height="24"
                        viewBox="0 0 80 24"
                        fill="none"
                        style={{
                            position: "absolute",
                            top: "10px",
                            left: "30%",
                            zIndex: 2,
                            pointerEvents: "none",
                        }}
                    >
                        <ellipse cx="20" cy="12" rx="16" ry="7" fill="#e5e7eb" />
                        <ellipse cx="50" cy="10" rx="14" ry="6" fill="#e5e7eb" />
                        <ellipse cx="70" cy="15" rx="10" ry="4" fill="#e5e7eb" />
                    </svg>
                    <svg
                        className="thunder"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{
                            position: "absolute",
                            left: "55%",
                            top: "38%",
                            zIndex: 3,
                            pointerEvents: "none",
                        }}
                    >
                        <polygon
                            points="14,4 18,16 13,16 18,28 18,18 22,18 14,4"
                            fill="#facc15"
                            stroke="#fbbf24"
                            strokeWidth="2"
                        />
                    </svg>
                </>
            )}
            {/* Nature animation */}
            {animationIdx === 3 && (
                <>
                    <svg
                        className="nature-ground"
                        width="100%"
                        height="40"
                        viewBox="0 0 500 40"
                        fill="none"
                        style={{
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            zIndex: 0,
                            pointerEvents: "none",
                        }}
                    >
                        <ellipse cx="250" cy="40" rx="250" ry="20" fill="#bbf7d0" />
                    </svg>
                    <svg
                        className="nature-tree"
                        width="100"
                        height="100"
                        viewBox="0 0 40 60"
                        fill="none"
                        style={{
                            position: "absolute",
                            left: "10%",
                            bottom: "10px",
                            zIndex: 1,
                            animation: "treeSway 4s ease-in-out infinite alternate",
                            pointerEvents: "none",
                        }}
                    >
                        <rect x="18" y="40" width="4" height="15" rx="2" fill="#166534" />
                        <ellipse cx="20" cy="45" rx="10" ry="12" fill="#22c55e" />
                        <ellipse cx="20" cy="38" rx="7" ry="8" fill="#4ade80" />
                    </svg>
                    <svg
                        className="nature-tree"
                        width="42"
                        height="52"
                        viewBox="0 0 32 48"
                        fill="none"
                        style={{
                            position: "absolute",
                            left: "80%",
                            bottom: "12px",
                            zIndex: 1,
                            animation: "treeSway 5s ease-in-out infinite alternate-reverse",
                            pointerEvents: "none",
                        }}
                    >
                        <rect x="14" y="32" width="4" height="12" rx="2" fill="#166534" />
                        <ellipse cx="16" cy="36" rx="8" ry="10" fill="#22c55e" />
                        <ellipse cx="16" cy="30" rx="5" ry="6" fill="#4ade80" />
                    </svg>
                    <svg
                        className="nature-bush"
                        width="60"
                        height="30"
                        viewBox="0 0 60 30 "
                        fill="none"
                        style={{
                            position: "absolute",
                            left: "40%",
                            bottom: "8px",
                            zIndex: 1,
                            animation: "bushBounce 3s ease-in-out infinite alternate",
                            pointerEvents: "none",
                        }}
                    >
                        <ellipse cx="15" cy="18" rx="15" ry="6" fill="#4ade80" />
                        <ellipse cx="35" cy="16" rx="13" ry="5" fill="#22c55e" />
                        <ellipse cx="50" cy="20" rx="10" ry="4" fill="#bbf7d0" />
                    </svg>
                </>
            )}

            <div className="flex flex-col sm:flex-row  mx-auto relative gap-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                    {/* Company */}
                    <div>
                        <h3 className=" font-bold mb-4 text-lg">Company</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/About" className="hover:text-gray-700 transition font-semibold pointer ">
                                About
                            </Link>
                            <Link href="/About" className="hover:text-gray-700 transition font-semibold pointer">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className=" font-bold mb-4 text-lg">Support</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/generate" className="hover:text-gray-700 transition font-semibold pointer">
                                Getting Started
                            </Link>

                            <Link href="/About" className="hover:text-gray-700 transition font-semibold pointer">
                                Features &amp; How-Tos
                            </Link>
                        </nav>
                    </div>

                    {/* Trust & Legal */}
                    <div>
                        <h3 className=" font-bold mb-4 text-lg">Trust &amp; Legal</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/Privacy" className="hover:text-gray-700 transition font-semibold pointer">
                                Terms &amp; Conditions
                            </Link>
                            <Link href="/Privacy" className="hover:text-gray-700 transition font-semibold pointer">
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="flex ">
                    <div className="text-gray-500 text-md  text-center ">
                        <div>© 2025 LinkHub, Inc.</div>
                        <div>
                            Built by{" "}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-blue-700 pointer font-semibold transition"
                            >
                                CodzHorizon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

