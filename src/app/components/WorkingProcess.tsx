import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Every successful project starts with understanding the problem. I work closely with clients to gather requirements, define project goals, analyze user needs, and identify the best technical approach. This planning phase helps create a clear roadmap that reduces development time and ensures the final product aligns with business objectives.",
    color: "#0099FF",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Before development begins, I structure the application's architecture and user experience. From responsive layouts and component planning to database design and API structure, every decision is made with scalability, performance, maintainability, and future growth in mind.",
    color: "#FF4757",
  },
  {
    number: "03",
    title: "Development & Deployment",
    description:
      "Using modern technologies such as React, Next.js, Node.js, TypeScript, and Tailwind CSS, I build fast, secure, and SEO-friendly web applications. Once development is complete, I thoroughly test the application, optimize performance, deploy it to production, and provide ongoing improvements when needed.",
    color: "#FFB700",
  },
  {
    number: "04",
    title: "Automation & AI Integration",
    description:
      "For businesses looking to streamline operations, I develop Python automation solutions and AI-powered chatbots. From workflow automation and data processing to intelligent customer support assistants, I create tools that save time, improve efficiency, and enhance user engagement.",
    color: "#A55EEA",
  },
];

export function WorkingProcess() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 bg-[#0d0d0d] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <p className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            ✦ How I Work
          </p>
          <h2
            className="uppercase leading-tight sm:leading-tight md:leading-none"
          >
            MY WORKING
            <br />
            <span className="text-[#FF4757]">PROCESS</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical connecting line - Desktop only */}
          <div className="absolute left-[2.5rem] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0099FF] via-[#FF4757] to-[#FFB700] opacity-30 hidden md:block" />

          {/* Steps Container */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 py-8 sm:py-10 md:py-12 lg:py-16 pl-10 sm:pl-12 md:pl-0"
              >
                {/* Left Side: Step Number & Title - Responsive */}
                <div className="flex-1 md:pr-4 lg:md:pr-8">
                  {/* Step Number - Responsive */}
                  <p
                    className="text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 sm:mb-3 opacity-50"
                    style={{ color: step.color }}
                  >
                    Step {step.number}
                  </p>

                  {/* Title - Responsive */}
                  <h3
                    className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl uppercase leading-tight"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Center Dot - Desktop only */}
                <div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 lg:w-12 h-10 lg:h-12 rounded-full border-4 items-center justify-center z-10"
                  style={{ borderColor: step.color, background: "#0d0d0d" }}
                >
                  <div
                    className="w-3 lg:w-4 h-3 lg:h-4 rounded-full"
                    style={{
                      background: step.color,
                      animation: "pulse-dot 2s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* Right Side: Description - Responsive */}
                <div className="flex-1 md:pl-4 lg:md:pl-8">
                  <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Left Dot - Mobile only */}
                <div
                  className="md:hidden absolute left-0 w-8 h-8 sm:w-10 sm:h-10 top-8 sm:top-10 rounded-full border-4 flex items-center justify-center flex-shrink-0 z-10"
                  style={{ borderColor: step.color, background: "#0d0d0d" }}
                >
                  <div
                    className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full"
                    style={{ background: step.color }}
                  />
                </div>

                {/* Mobile Vertical Line - Mobile only */}
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden absolute left-4 sm:left-5 top-12 sm:top-15 w-px h-[calc(100%+2rem)] sm:h-[calc(100%+2.5rem)]"
                    style={{
                      background: step.color,
                      opacity: "0.2",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe animation for pulse */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}