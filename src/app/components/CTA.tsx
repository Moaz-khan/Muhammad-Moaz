import { motion } from "motion/react";
import { MessageCircle, Download, UserCheck, Mail } from "lucide-react";

interface CTAProps {
  isDark: boolean;
}

export function CTA({ isDark }: CTAProps) {
  return (
    <section className={`py-20 sm:py-24 md:py-28 px-4 sm:px-6 relative overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-[#111]"}`}>
      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FF4757] opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#0099FF] opacity-5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center"
        >
          {/* Badge */}
          <p className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4 sm:mb-6">
            ✦ Let's Work Together
          </p>

          {/* Heading - Responsive */}
          <h2
            className="text-white uppercase leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
            }}
          >
            INTERESTED IN
            <br />
            WORKING
            <br />
            <span className="text-[#FF4757]">TOGETHER?</span>
          </h2>

          {/* Email Link - Mobile Touch Friendly */}
          <motion.a
            href="mailto:muhammadmoaz458@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors duration-200 mb-8 sm:mb-12 group flex-wrap justify-center px-4"
          >
            <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-[#FF4757] flex-shrink-0" />
            <span
              className="text-base sm:text-lg md:text-xl border-b border-white/20 group-hover:border-white/60 transition-colors pb-1"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}
            >
              muhammadmoaz458@gmail.com
            </span>
          </motion.a>

          {/* CTA Buttons - Fully Responsive Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
          >
            {/* Let's Talk Button */}
            <a
              href="mailto:muhammadmoaz458@gmail.com"
              className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[#FF4757] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-red-500 transition-colors uppercase tracking-wider text-xs sm:text-sm w-full sm:w-auto rounded touch-manipulation"
            >
              <MessageCircle size={14} className="flex-shrink-0" />
              <span>Let's Talk</span>
            </a>

            {/* Download CV Button */}
            <a
              href="/MaazCv.pdf"
              download="Muhammad_Moaz_CV.pdf"
              className="inline-flex items-center justify-center sm:justify-start gap-2 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold hover:border-white hover:bg-white hover:text-black transition-all uppercase tracking-wider text-xs sm:text-sm w-full sm:w-auto rounded touch-manipulation"
            >
              <Download size={14} className="flex-shrink-0" />
              <span>Download CV</span>
            </a>

            {/* Hire Me Button */}
            <a
              href="mailto:muhammadmoaz458@gmail.com"
              className="inline-flex items-center justify-center sm:justify-start gap-2 bg-[#0099FF] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-blue-600 transition-colors uppercase tracking-wider text-xs sm:text-sm w-full sm:w-auto rounded touch-manipulation"
            >
              <UserCheck size={14} className="flex-shrink-0" />
              <span>Hire Me</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}