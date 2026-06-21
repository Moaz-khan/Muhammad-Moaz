import { Github, Linkedin, Twitter } from "lucide-react";
import { SkillsBanner } from "./SkillsBanner";

interface FooterProps {
  isDark: boolean;
  logoSrc?: string;
}

export function Footer({ isDark, logoSrc }: FooterProps) {
  const navLinks = ["Home", "About", "Services", "Works", "Blog"];
  const socials = [
    { Icon: Github, href: "https://github.com/Moaz-khan", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/m-maaz-602927243?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/muhammad_m93263", label: "Twitter/X" },
  ];

  return (
    <footer className={`${isDark ? "bg-[#0a0a0a] text-white" : "bg-[#111] text-white"}`}>
      {/* Skills Banner */}
      <SkillsBanner reverse={true} />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="text-center sm:text-left">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt="Logo"
                className="h-20 sm:h-24 w-auto mb-4 object-contain"
              />
            ) : (
              <h2
                className="text-2xl sm:text-3xl mb-4"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900 }}
              >
                MAAZ
              </h2>
            )}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
              Creative Web Developer crafting high-performance digital experiences that blend design and technology.
            </p>
            
            {/* Social Icons - Mobile Responsive */}
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#FF4757] hover:border-[#FF4757] hover:text-white transition-all duration-200 touch-manipulation"
                >
                  <Icon size={14} className="sm:w-[16px] sm:h-[16px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Mobile Responsive */}
          <div className="text-center sm:text-left">
            <h3
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6 text-gray-400"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Mobile Responsive */}
          <div className="text-center sm:text-left">
            <h3
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-5 sm:mb-6 text-gray-400"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
              <li>
                <a
                  href="mailto:muhammadmoaz458@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  muhammadmoaz458@gmail.com
                </a>
              </li>
              <li className="text-xs sm:text-sm">Available for freelance work</li>
              <li className="text-xs sm:text-sm">Response within 24 hours</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 md:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-[10px] sm:text-xs">
            © {new Date().getFullYear()} Muhammad Maaz All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs">
            Built with React · Tailwind CSS · Motion
          </p>
        </div>
      </div>
    </footer>
  );
}