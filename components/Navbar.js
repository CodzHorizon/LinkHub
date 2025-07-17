"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation } from "@/components/animationcontext";

// Color options for hover effects
const HOVER_COLORS = [
  // Dark Purples & Blues
  "#1e3a8a", // dark blue
  "#1e40af", // indigo
  "#312e81", // dark indigo
  "#3730a3", // vibrant indigo
  "#4f46e5", // vivid indigo
  "#4338ca", // dark violet
  "#3b0764", // very dark purple
  "#7c3aed", // strong violet

  // Deep Greens & Teals
  "#065f46", // dark green
  "#064e3b", // forest green
  "#047857", // deep emerald
  "#134e4a", // dark teal
  "#0f766e", // muted cyan

  // Dark Reds & Maroons
  "#7f1d1d", // dark red
  "#991b1b", // deep crimson
  "#b91c1c", // bright blood red
  "#9f1239", // rich raspberry

  // Rich Yellows & Oranges (muted/dark)
  "#78350f", // deep amber
  "#92400e", // dark orange
  "#a16207", // strong mustard
  "#854d0e", // muted gold

  // Bold Pinks & Magentas
  "#701a75", // dark magenta
  "#831843", // dark pink
  "#9d174d", // rose red
  "#6b21a8", // violet

  // Cool Darks
  "#0c4a6e", // navy cyan
  "#1e293b", // dark slate
  "#0f172a", // near-black blue
  "#111827", // cool gray-black
];


// Navbar background animation styles and icons
export function NAVBAR_ANIMATIONS() {
  return [
    {
      name: "Plain",
      className: "navbar-plain",
      icon: <PlainIcon />,
    },
    {
      name: "Colorful",
      className: "animated-navbar-bg",
      icon: <ColorfulIcon />,
    },
    {
      name: "Cloudy",
      className: "animated-navbar-bg cloudy",
      icon: <CloudyIcon />,
    },
    {
      name: "Nature",
      className: "animated-navbar-bg nature",
      icon: <NatureIcon />,
    },
  ];
}


const PlainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="6" />
  </svg>
);
const CloudyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#000" className="w-5 h-5" viewBox="0 0 16 16">
    <path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973M8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 1M7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724z" />
  </svg>
);
const NatureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#1D976C" className="w-5 h-5" viewBox="0 0 16 16">
    <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z" />
  </svg>
);
const ColorfulIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#F77772" className="w-5 h-5" viewBox="0 0 16 16">
    <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </svg>
);



// Logo component
const LinkItLogo = ({ hovered, color, className = "h-8 w-8" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={`transition-all duration-300 ${className}`}>
    <rect width="32" height="32" rx="16" fill={hovered ? color : "#2563eb"} />
    <rect x="9" y="9" width="4" height="14" rx="2" fill="#fff" />
    <rect x="19" y="9" width="4" height="10" rx="2" fill="#fff" />
    <circle cx="21" cy="23" r="2" fill="#000" />
  </svg>
);
const navItems = [
  { label: "Get Started", href: "/generate" },
  { label: "About", href: "/About" },
  { label: "Home", href: "/" },
];
const navItems2 = [
  { label: "Get Started", href: "/generate" },
  { label: "About", href: "/About" },
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/Privacy" },
];

const Navbar = () => {
  const { animationIdx, handleAnimationChange } = useAnimation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [hoverColor, setHoverColor] = useState(HOVER_COLORS[0]);
  const [prevAnimationIdx, setPrevAnimationIdx] = useState(animationIdx);
  const [themeSelectorOpen, setThemeSelectorOpen] = useState(false);

  const scrollTimeout = useRef(null);
  const animations = NAVBAR_ANIMATIONS();
  const themeRef = useRef();


  useEffect(() => {
    function handleClickOutside(e) {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeSelectorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // Scroll-based auto-hide
  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (!hovering) setVisible(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [hovering]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const handleMouseEnter = () => {
    setHovering(true);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    scrollTimeout.current = setTimeout(() => setVisible(false), 1500);
  };

  // Function to get a random color from HOVER_COLORS, excluding the current hoverColor
  // This ensures that the logo color changes on hover without repeating the same color
  const RECENT_COLORS_LIMIT = 5;
  const recentColorsRef = useRef([]);

  const getDistinctRandomColor = () => {
    const recentColors = recentColorsRef.current;
    const filtered = HOVER_COLORS.filter(c => !recentColors.includes(c));
    const newColor = filtered[Math.floor(Math.random() * filtered.length)] || HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];

    recentColors.push(newColor);
    if (recentColors.length > RECENT_COLORS_LIMIT) recentColors.shift();

    return newColor;
  };

  const handleLogoHover = () => {
    setLogoHover(true);
    setHoverColor(getDistinctRandomColor());
  };

  // Uncomment this if you want to change the logo color on hover
  // This function changes the logo color to a random one from HOVER_COLORS
  // const handleLogoHover = () => {
  //   setLogoHover(true);
  //   const nextColor = HOVER_COLORS.filter(c => c !== hoverColor)[
  //     Math.floor(Math.random() * (HOVER_COLORS.length - 1))
  //   ];
  //   setHoverColor(nextColor);
  // };

  const handleLogoLeave = () => setLogoHover(false);

  const handleAnimationWithTransition = () => {
    setPrevAnimationIdx(animationIdx);
    setIsTransitioning(true);
    handleAnimationChange();
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const navbarClass = `
    top-2 z-50 w-[96vw] sm:w-[94vw]  mx-auto rounded-full shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-500
    ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
    ${animations[animationIdx].className}
  `;


  return (
    <>
      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black/30 backdrop-blur-md overflow-hidden">
          <div className="relative max-w-[320px] w-[75%] max-h-[480px] h-[75%] bg-gradient-to-br from-blue-50 via-white to-purple-100 rounded-2xl shadow-2xl pt-16 flex flex-col gap-8 items-center animate-slide-in-left" style={{ transformOrigin: 'center center' }}>
            {navItems2.map(({ label, href, text }, idx) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-black text-xl font-semibold transition duration-300 hover:-translate-y-1 hover:text-blue-600 tracking-wide fade-in-right"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://nexlink-url-shortener.vercel.app/"
              rtarget="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-black text-white px-7 py-3 rounded-full font-semibold hover:bg-gray-800 transition text-lg shadow-lg fade-in-right"
              style={{ animationDelay: `0.4s` }}
            >
              Url Shortener
            </a>
          </div>
        </div>
      )}
      {/* Main Navbar */}
      <nav
        role="navigation"
        className={navbarClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ willChange: "opacity, transform", position: "sticky" }}
      >

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
                zIndex: -1,
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
                left: "50%",
                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <ellipse cx="25" cy="18" rx="22" ry="10" fill="#e5e7eb" />
              <ellipse cx="60" cy="14" rx="18" ry="8" fill="#e5e7eb" />
              <ellipse cx="85" cy="20" rx="13" ry="6" fill="#e5e7eb" />
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
              width="0%"
              height="0"
              viewBox="0 0 500 40"
              fill="none"
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                zIndex: -1,
                pointerEvents: "none",
              }}
            >
              <ellipse cx="250" cy="40" rx="250" ry="20" fill="#bbf7d0" />
            </svg>
            <svg
              className="nature-tree"
              width="40"
              height="60"
              viewBox="0 0 40 60"
              fill="none"
              style={{
                position: "absolute",
                left: "15%",
                bottom: "10px",
                zIndex: -1,
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
              width="32"
              height="48"
              viewBox="0 0 32 48"
              fill="none"
              style={{
                position: "absolute",
                right: "25%",
                bottom: "12px",
                zIndex: -1,
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
              height="24"
              viewBox="0 0 60 24"
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

        {/* Logo + Name */}
        <div
          className="flex items-center gap-2 group  pointer"
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <LinkItLogo hovered={logoHover} color={hoverColor} />
          <Link
            href="/"
            className={`font-bold text-lg pointer transition-transform duration-300 ${logoHover ? "scale-110 text-accent" : ""}`}
            style={{
              color: logoHover ? hoverColor : animationIdx === 2 ? "#f3f4f6" : "#000",
              textShadow: animationIdx === 2 ? "0 1px 8px #000" : undefined,
            }}
          >
            LinkHub
          </Link>
        </div>
        <div className="flex gap-4 sm:gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 pointer">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`font-medium transition pointer duration-300 hover:-translate-y-1 ${animationIdx === 2 ? "text-white" : "text-black"
                  }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="https://nexlink-url-shortener.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full pointer font-semibold transition ${animationIdx === 2
                ? "bg-yellow-300 text-gray-900 hover:bg-yellow-200"
                : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              Url Shortener
            </Link>

          </div>


          <div className="flex items-center relative justify-center">
            {/* Animation Toggle Button */}
            <button
              onClick={() => setThemeSelectorOpen(!themeSelectorOpen)}
              className="z-50 relative ml-4 px-1.5 py-1.5 rounded-full bg-white/80 hover:bg-white/90 border border-gray-300 shadow transition duration-300 text-sm flex items-center justify-center hover:scale-110 pointer"
              title="Select theme"
              aria-label="Select animation theme"
            >
              {animations[animationIdx].icon}
            </button>


            {/* Theme Selector Dropdown */}
            {themeSelectorOpen && (
              <div ref={themeRef} className="absolute right-[-10px] top-14  z-50 bg-white rounded-xl shadow-lg  w-auto animate-fade-in">
                <ul className="flex flex-col divide-y divide-gray-200">
                  {animations.map((anim, idx) => (
                    <li
                      key={anim.name}
                      onClick={() => {
                        handleAnimationChange(idx);
                        setThemeSelectorOpen(false);
                      }}
                      className={`flex items-center px-4 py-2 pointer hover:bg-gray-100 transition ${idx === animationIdx ? "bg-gray-100 font-semibold" : ""
                        }`}
                    >
                      {anim.icon}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 z-60"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-6 bg-black mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
