import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  isDark: boolean;
}

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "NextJs · Tailwind · Typescript · Node.js",
    image: "./../public/projects/nikill.png",
    url: "https://nikill-s7iu.vercel.app/",
  },
  {
    id: 2,
    name: "SaaS Dashboard UI",
    category: "React · Tailwind · TypeScript",
    image: "./../public/projects/spectrum.png",
    url: "https://spectrum-dashboard-xi.vercel.app/",
  },
  {
    id: 3,
    name: "Dev Blog Platform",
    category: "Docusaurus · Markdown · Python",
    image: "./../public/projects/Robotic.png",
    url: "https://physical-ai-humanoid-robotics2-0.vercel.app/",
  },
  {
    id: 4,
    name: "Portfolio Site",
    category: "Next.js · Tailwind · TypeScript",
    image: "./../public/projects/tahanajam2.png",
    url: "https://www.tahanajam.co/",
  },
  {
    id: 5,
    name: "Agency Website",
    category: "Next.js · Tailwind · Node.js",
    image: "./../public/projects/vibe bureau.png",
    url: "https://www.vibebureau.com/",
  },
  {
    id: 6,
    name: "Product Landing Page",
    category: "Next.js · Tailwind · TypeScript",
    image: "./../public/projects/taskopilot.png",
    url: "https://task-pilot-orpin.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Projects({ isDark }: ProjectsProps) {
  return (
    <section
      id="works"
      className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isDark ? "bg-[#0d0d0d] text-white" : "bg-gray-50 text-black"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <p className="text-[#FF4757] text-[10px] sm:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase mb-4">
            ✦ Portfolio
          </p>
          <h2
            className="uppercase leading-tight md:leading-none text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
            }}
          >
            TAKE A LOOK AT MY
            <br />
            <span className="text-[#0099FF]">RECENT PROJECTS</span>
          </h2>
        </motion.div>

        {/* Projects Grid - Fully Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden cursor-pointer transition-shadow duration-300 ${
                isDark ? "bg-[#1a1a1a] hover:shadow-xl" : "bg-white hover:shadow-xl"
              } shadow-md`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* External Link Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform touch-manipulation"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink size={18} className="text-black" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-5">
                <p className={`text-[10px] sm:text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  {project.category}
                </p>
                <h3
                  className="text-sm sm:text-base font-bold uppercase mb-3 line-clamp-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}