import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  isDark: boolean;
}

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Alex delivered our e-commerce platform ahead of schedule. The code quality is exceptional and the UI is beautiful. Our conversion rate increased by 40% after launch. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager, DesignCo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Working with Alex was an absolute pleasure. He translated our complex wireframes into a stunning, fully responsive web app. His attention to detail and communication are top-notch.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, AgencyX",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    text: "Alex rebuilt our agency website from scratch and the results blew us away. Load time went from 6s to under 1s. Our clients constantly compliment the new design. Will definitely hire again.",
    rating: 5,
  },
];

export function Testimonials({ isDark }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isDark ? "bg-[#111] text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            ✦ Client Reviews
          </p>
          <h2
            className="uppercase leading-tight md:leading-none text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold"
          >
            WHAT MY CLIENTS
            <br />
            <span className="text-[#FF4757]">ARE SAYING</span>
          </h2>
        </motion.div>

        {/* Testimonial Card - Mobile Responsive */}
        <div className="relative overflow-hidden mb-8 md:mb-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`rounded-lg p-6 sm:p-10 md:p-14 relative ${isDark ? "bg-[#1a1a1a]" : "bg-gray-50"}`}
            >
              {/* Quote Icon */}
              <Quote
                size={40}
                className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 opacity-10"
                style={{ color: "#FF4757" }}
              />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FFB700] text-base sm:text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text - Mobile Optimized */}
              <p
                className={`text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 italic ${isDark ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                "{t.text}"
              </p>

              {/* Author Info - Mobile Responsive */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#FF4757] flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="font-bold text-sm sm:text-base line-clamp-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className={`text-xs sm:text-sm line-clamp-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4">
          {/* Dots Navigation */}
          <div className="flex gap-2 justify-center sm:justify-start">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`transition-all duration-300 touch-manipulation ${i === current
                    ? "w-6 sm:w-8 h-1 bg-[#FF4757]"
                    : `w-3 sm:w-4 h-1 ${isDark ? "bg-gray-700" : "bg-gray-300"}`
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons - Touch Friendly */}
          <div className="flex gap-2 sm:gap-2 justify-center sm:justify-end">
            <button
              onClick={prev}
              className={`w-10 h-10 sm:w-11 sm:h-11 border flex items-center justify-center hover:bg-[#FF4757] hover:border-[#FF4757] hover:text-white transition-all duration-200 touch-manipulation ${isDark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-600"
                }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="sm:w-[20px] sm:h-[20px]" />
            </button>

            <button
              onClick={next}
              className={`w-10 h-10 sm:w-11 sm:h-11 border flex items-center justify-center hover:bg-[#FF4757] hover:border-[#FF4757] hover:text-white transition-all duration-200 touch-manipulation ${isDark ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-600"
                }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="sm:w-[20px] sm:h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}