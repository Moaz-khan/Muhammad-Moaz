import { motion } from "motion/react";

const stats = [
  { value: "120", suffix: "+", label: "Projects", sub: "Completed" },
  { value: "100", suffix: "%", label: "Success", sub: "Client Rating" },
  { value: "2", suffix: "+", label: "Years", sub: "Experience" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden">
      {/* Skewed Container */}
      <div className="bg-[#FF4757] transform -skew-y-1 py-3 sm:py-4">
        <div className="transform skew-y-1 py-10 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-center py-6 sm:py-8 md:py-12 ${
                    i < stats.length - 1 ? "sm:border-r border-white/20" : ""
                  }`}
                >
                  {/* Value - Responsive Font Size */}
                  <div
                    className="text-white leading-none mb-2"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2.5rem, 7vw, 4rem)",
                    }}
                  >
                    {stat.value}
                    <span className="text-white/70 text-[0.6em]">{stat.suffix}</span>
                  </div>

                  {/* Primary Label */}
                  <p
                    className="text-white font-bold uppercase tracking-widest text-xs sm:text-sm mb-1"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {stat.label}
                  </p>

                  {/* Secondary Label */}
                  <p className="text-white/60 text-[10px] sm:text-xs">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}