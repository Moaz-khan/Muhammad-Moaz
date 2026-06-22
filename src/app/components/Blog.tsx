import { motion } from "motion/react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts, BlogPost } from "../data/blogData";

interface BlogProps {
  isDark: boolean;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Blog({ isDark }: BlogProps) {
  const navigate = useNavigate();

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section
      id="blog"
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
            ✦ Blog
          </p>
          <h2
            className="uppercase leading-tight md:leading-none text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold"
          >
            LATEST NEWS FROM
            <br />
            <span className="text-[#0099FF]">THE IT INDUSTRY</span>
          </h2>
        </motion.div>

        {/* Blog Cards Grid - Fully Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {blogPosts.map((post: BlogPost) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => handleBlogClick(post.slug)}
              className={`group overflow-hidden cursor-pointer transition-shadow duration-300 rounded-lg ${isDark ? "bg-[#1a1a1a] hover:shadow-xl" : "bg-white hover:shadow-xl"
                } shadow-md`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-gray-200 dark:bg-gray-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tag Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-[#FF4757] text-white text-[9px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 uppercase tracking-wider">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Meta Info - Mobile Responsive */}
                <div className={`flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs mb-3 sm:mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="flex-shrink-0" />
                    <span className="truncate">{post.readTime}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={13} className="flex-shrink-0" />
                    <span className="truncate">{post.date}</span>
                  </span>
                </div>

                {/* Title - Mobile Responsive */}
                <h3
                  className="text-sm sm:text-base font-bold leading-snug mb-3 sm:mb-4 group-hover:text-[#0099FF] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-[11px] sm:text-xs leading-relaxed mb-4 sm:mb-5 line-clamp-2 ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(post.slug);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#0099FF] hover:gap-2 transition-all uppercase tracking-wider"
                >
                  Learn More <ArrowRight size={12} className="flex-shrink-0" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}