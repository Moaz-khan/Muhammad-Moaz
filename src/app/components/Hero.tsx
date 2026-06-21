import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const HERO_PHOTO = "./../public/newprofile2.png";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Moaz-khan", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/m-maaz-602927243?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/muhammad_m93263", label: "Twitter/X" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden"
    >
      {/* Left: Photo Section */}
      <div className="relative flex items-end justify-center overflow-hidden min-h-[45vh] md:min-h-screen bg-black">
        <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-full">
          <img
            src={HERO_PHOTO}
            alt="Muhammad Maaz - Creative Web Developer"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </motion.div>

        {/* Left Accent Bars - Mobile Responsive */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-10 space-y-2">
          <div className="w-12 md:w-16 h-0.5 md:h-1 bg-black/70" />
          <div className="w-6 md:w-8 h-0.5 md:h-1 bg-black/70" />
        </div>

        {/* Social Links - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10 flex flex-col gap-2 md:gap-3"
        >
          {socialLinks.map(({ Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 md:w-9 md:h-9 bg-black/80 text-white flex items-center justify-center hover:bg-[#0099FF] transition-colors duration-200"
            >
              <Icon size={14} className="md:w-[16px] md:h-[16px]" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right: Text Content Section */}
      <motion.div
        style={{ y: textY, opacity }}
        className={`flex flex-col justify-center px-5 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-0 ${
          isDark ? "bg-[#1a1a1a] text-white" : "bg-white text-black"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-4 md:gap-6"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase"
          >
            ✦ Hello, I'm Muhammad Maaz
          </motion.p>

          {/* Main Heading - Responsive Typography */}
          <h1
            className="leading-[0.85] md:leading-[0.9] uppercase text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold"
            
          >
            CREATIVE
            <br />
            WEB
            <br />
            DEVELOPER
          </h1>

          {/* Description - Mobile Optimized */}
          <p
            className={`text-sm sm:text-base leading-relaxed max-w-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I build fast, responsive, and SEO-friendly web applications using React, Next.js, Node.js, and modern web technologies. From business websites to custom web platforms, I focus on creating scalable digital experiences.
          </p>

          {/* CTA Buttons - Side by Side */}
          <div className="flex flex-row items-center gap-3 sm:gap-4 pt-2 w-full">
            <a
              href="#works"
              className="inline-flex items-center justify-center gap-2 bg-[#0099FF] text-white px-3 sm:px-8 py-3 sm:py-4 font-semibold hover:bg-blue-600 transition-all duration-200 uppercase tracking-wider text-[10px] sm:text-xs group flex-1 text-center whitespace-nowrap"
            >
              View My Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
            <a
              href="#about"
              className={`inline-flex items-center justify-center gap-2 border-2 px-3 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-200 uppercase tracking-wider text-[10px] sm:text-xs group flex-1 text-center whitespace-nowrap ${
                isDark
                  ? "border-white text-white hover:bg-white hover:text-black"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              About Me
            </a>
          </div>

          {/* Stats Row - Mobile Optimized */}
          <div className={`flex items-center gap-0 border-t pt-6 sm:pt-8 mt-4 sm:mt-6 ${isDark ? "border-gray-800" : "border-gray-100"}`}>
            {[
              { value: "120+", label: "Projects" },
              { value: "100%", label: "Success" },
              { value: "2+", label: "Years" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex-1 text-center py-2 sm:py-0 ${
                  i > 0 ? `border-l ${isDark ? "border-gray-800" : "border-gray-100"}` : ""
                }`}
              >
                <p
                  className="text-lg sm:text-2xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className={`text-[10px] sm:text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}