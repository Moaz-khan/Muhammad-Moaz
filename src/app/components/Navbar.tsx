import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  logoDark?: string;  // Dark mode logo
  logoLight?: string; // Light mode logo
}

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Works", id: "works" },
  { label: "Blog", id: "blog" }
];

export function Navbar({ isDark, toggleTheme, logoDark, logoLight }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open hone par body scroll disable karo
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Handle navigation with scrolling
  const handleNavClick = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setMobileOpen(false);
  };

  // Handle logo click - go home
  const handleLogoClick = () => {
    navigate("/#home");
  };

  // Select logo based on theme and scroll position
  const currentLogo = isDark ? logoDark : (scrolled ? logoLight : logoDark);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? isDark
            ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-xl"
            : "bg-white/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo - Responsive */}
        <button
          onClick={handleLogoClick}
          className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer flex-shrink-0"
        >
          {currentLogo ? (
            <img
              src={currentLogo}
              alt="Logo"
              className="h-10 sm:h-12 w-auto md:h-14 object-contain"
            />
          ) : (
            <div
              className={`h-10 sm:h-12 w-10 sm:w-12 md:h-14 md:w-14 rounded-lg flex items-center justify-center font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 ${isDark ? "bg-[#FF4757] text-white" : "bg-[#0099FF] text-white"
                }`}
            >
              S
            </div>
          )}
        </button>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className={`hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2 rounded-full border transition-all duration-300 ${isDark
            ? "bg-black/40 border-gray-800 backdrop-blur-md"
            : scrolled
              ? "bg-gray-100/80 border-gray-200 backdrop-blur-md"
              : "bg-white/85 border-white/40 backdrop-blur-md shadow-md"
          }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm tracking-wide transition-colors duration-200 cursor-pointer ${isDark
                  ? "text-gray-300 hover:text-[#0099FF]"
                  : "text-gray-800 hover:text-[#0099FF]"
                }`}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500 }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 sm:p-2.5 rounded-full border-2 transition-all duration-300 touch-manipulation ${isDark
                ? "border-gray-600 bg-gray-800/80 text-yellow-400 hover:border-yellow-400 hover:bg-gray-700"
                : scrolled
                  ? "border-gray-300 bg-gray-100 text-gray-800 hover:border-gray-800 hover:bg-gray-200"
                  : "border-gray-300 bg-white/80 text-gray-800 hover:border-gray-800 hover:bg-white"
              }`}
            aria-label="Toggle theme"
          >
            <motion.div
              key={isDark ? "sun" : "moon"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 touch-manipulation ${isDark
                ? "text-white hover:bg-gray-800"
                : scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Modern Slide Down */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop - NO blur, sirf dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 md:hidden"
              onClick={() => setMobileOpen(false)}
              style={{ top: 56 }}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`md:hidden overflow-hidden border-t ${isDark
                  ? "bg-[#1a1a1a]/95 border-gray-800"
                  : "bg-white/95 border-gray-200"
                }`}
            >
              <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-1 sm:gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm sm:text-base font-medium hover:text-[#0099FF] transition-colors py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg text-left cursor-pointer touch-manipulation ${isDark
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Divider */}
                <div
                  className={`my-2 h-px ${isDark ? "bg-gray-800" : "bg-gray-200"
                    }`}
                />

                {/* Theme Indicator in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className={`text-xs font-medium py-2 px-3 sm:px-4 rounded-lg ${isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                    }`}
                >
                  {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}