import { motion } from "motion/react";
import {
  Code2, Server, Database, FileJson, Zap, Globe, ShoppingCart, Settings,
  Search, Lightbulb, Palette, PenTool, Smartphone, Figma, Layers, Rocket,
} from "lucide-react";

interface AboutProps {
  isDark: boolean;
}

const skillColumns = [
  {
    title: "My Skills",
    items: [
      { name: "React.js", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "TypeScript", icon: FileJson },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Zap },
      { name: "GraphQL", icon: Layers },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma", icon: Figma },
      { name: "Adobe XD", icon: PenTool },
      { name: "UI/UX Design", icon: Palette },
      { name: "Responsive", icon: Smartphone },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "CSS Animation", icon: Rocket },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Web Dev", icon: Globe },
      { name: "E-Commerce", icon: ShoppingCart },
      { name: "CMS", icon: Settings },
      { name: "Performance", icon: Zap },
      { name: "SEO", icon: Search },
      { name: "Consulting", icon: Lightbulb },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About({ isDark }: AboutProps) {
  return (
    <section
      id="about"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isDark ? "bg-[#111] text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            {/* Badge */}
            <p className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase">
              ✦ Who I Am
            </p>

            {/* Heading - Responsive */}
            <h2
              className="uppercase leading-tight md:leading-none text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold"
            >
              ABOUT
              <br />
              <span className="text-[#FF4757]">ME</span>
            </h2>

            {/* Paragraphs - Mobile Optimized */}
            <div className="flex flex-col gap-4 md:gap-5 text-sm sm:text-base">
              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                I'm Muhammad Maaz, a Full Stack Web Developer passionate about building modern, scalable, and user-focused digital experiences. I specialize in creating fast, responsive, and SEO-friendly websites and web applications using React, Next.js, TypeScript, Node.js, and Tailwind CSS.
              </p>

              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Over the course of my development journey, I've worked on a variety of projects ranging from business websites and e-commerce platforms to custom web applications and dynamic CMS-driven solutions. My focus is not only on writing clean, maintainable code but also on delivering intuitive user experiences.
              </p>

              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Beyond web development, I have experience with Python automation and AI-powered chatbots, integrating modern AI technologies to create conversational experiences that can handle customer support, lead generation, and workflow automation.
              </p>

              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                I enjoy solving complex problems and transforming ideas into reliable, production-ready solutions. Whether it's developing a high-performance web application, automating a business process, or building an AI-powered chatbot, I am always focused on delivering solutions that create real value.
              </p>
            </div>

            {/* Stats - Fully Responsive */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-4 md:pt-6">
              <div>
                <div
                  className="text-2xl sm:text-3xl text-[#FF4757] font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  120+
                </div>
                <div className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Projects Completed
                </div>
              </div>

              <div className={`w-px h-8 sm:h-12 hidden sm:block ${isDark ? "bg-gray-700" : "bg-gray-200"}`} />

              <div>
                <div
                  className="text-2xl sm:text-3xl text-[#0099FF] font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  100%
                </div>
                <div className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Client Satisfaction
                </div>
              </div>

              <div className={`w-px h-8 sm:h-12 hidden sm:block ${isDark ? "bg-gray-700" : "bg-gray-200"}`} />

              <div>
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  2+
                </div>
                <div className={`text-xs mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Years Experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid - Mobile Responsive */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6"
          >
            {skillColumns.map((col) => (
              <motion.div key={col.title} variants={itemVariants}>
                <h3
                  className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 pb-2 sm:pb-3 border-b-2 border-[#FF4757]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {col.title}
                </h3>

                <ul className="space-y-3 sm:space-y-4">
                  {col.items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <li
                        key={item.name}
                        className={`text-[11px] sm:text-xs flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:translate-x-1 cursor-default group ${
                          isDark ? "text-gray-400 hover:text-[#FF4757]" : "text-gray-600 hover:text-[#FF4757]"
                        }`}
                      >
                        <IconComponent
                          size={16}
                          className="flex-shrink-0 transition-colors duration-300 group-hover:text-[#FF4757]"
                        />
                        <span className="line-clamp-1">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}