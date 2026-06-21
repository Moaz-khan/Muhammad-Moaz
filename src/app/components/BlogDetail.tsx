import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, MessageCircle, Mail } from "lucide-react";
import { blogPosts, BlogPost } from "../data/blogData";

interface BlogDetailProps {
  isDark: boolean;
}

export function BlogDetail({ isDark }: BlogDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
            Blog Post Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-[#0099FF] text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
<div
  className={`min-h-screen pt-24 ${
    isDark ? "bg-[#0a0a0a]" : "bg-white"
  }`}
>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`px-6 py-12 ${isDark ? "bg-[#0d0d0d]" : "bg-gray-50"}`}
      >
        <div className="max-w-3xl mx-auto">
          {/* Image */}
          <div className="mb-8 overflow-hidden rounded-lg h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Information */}
          <div className={`flex flex-wrap items-center gap-6 mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <span className="flex items-center gap-2 text-sm">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Tag size={14} />
              {post.date}
            </span>
            <span className="bg-[#FF4757] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded">
              {post.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${isDark ? "text-white" : "text-black"}`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {post.title}
          </h1>

          {/* Author */}
          <div className={`flex items-center gap-3 pb-8 border-b ${isDark ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-600"}`}>
            <div className="w-10 h-10 bg-[#FF4757] rounded-full flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>{post.author}</p>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`px-6 py-16 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
      >
        <article className="max-w-3xl mx-auto">
          <div
            className={`text-base leading-relaxed space-y-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n\n")
                .map((paragraph: string) => {
                  // Handle headers
                  if (paragraph.startsWith("# ")) {
                    return `<h2 class="${isDark ? "text-white" : "text-black"} text-3xl font-bold my-8 mt-12">${paragraph.replace("# ", "")}</h2>`;
                  }
                  if (paragraph.startsWith("## ")) {
                    return `<h3 class="${isDark ? "text-white" : "text-black"} text-2xl font-bold my-6 mt-10">${paragraph.replace("## ", "")}</h3>`;
                  }
                  if (paragraph.startsWith("### ")) {
                    return `<h4 class="${isDark ? "text-white" : "text-black"} text-xl font-bold my-4 mt-8">${paragraph.replace("### ", "")}</h4>`;
                  }

                  // Handle code blocks
                  if (paragraph.includes("```")) {
                    const codeMatch = paragraph.match(/```([\s\S]*?)```/);
                    if (codeMatch) {
                      const code = codeMatch[1].trim();
                      const codeContent = code.split("\n").slice(1).join("\n");
                      return `<pre class="${isDark ? "bg-[#1a1a1a]" : "bg-gray-100"} p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm">${codeContent}</code></pre>`;
                    }
                  }

                  // Handle lists
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter((line: string) => line.startsWith("- "));
                    const listHTML = items.map((item: string) => `<li>${item.replace("- ", "")}</li>`).join("");
                    return `<ul class="list-disc list-inside my-4 space-y-2">${listHTML}</ul>`;
                  }

                  // Regular paragraphs
                  return `<p class="my-4">${paragraph}</p>`;
                })
                .join(""),
            }}
          />
        </article>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`py-28 px-6 relative overflow-hidden ${isDark ? "bg-[#0d0d0d]" : "bg-gray-50"}`}
      >
        {/* Background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#FF4757] opacity-5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#0099FF] opacity-5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#FF4757] text-xs font-bold tracking-[0.3em] uppercase mb-6">
            ✦ Let's Work Together
          </p>

          <h2
            className={`uppercase leading-none mb-8 ${isDark ? "text-white" : "text-black"}`}
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            INTERESTED IN
            <br />
            WORKING
            <br />
            <span className="text-[#FF4757]">TOGETHER?</span>
          </h2>

          {/* Email */}
          <motion.a
            href="mailto:muhammadmoaz459@gmail.com"
            whileHover={{ scale: 1.03 }}
            className={`inline-flex items-center gap-3 transition-colors duration-200 mb-12 group ${
              isDark ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-black"
            }`}
          >
            <Mail size={18} className="text-[#FF4757]" />
            <span
              className={`text-lg md:text-xl border-b ${
                isDark ? "border-white/20 group-hover:border-white/60" : "border-gray-300 group-hover:border-gray-600"
              } transition-colors pb-1`}
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}
            >
              muhammadmoaz459@gmail.com
            </span>
          </motion.a>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:muhammadmoaz459@gmail.com"
              className="inline-flex items-center gap-2 bg-[#FF4757] text-white px-8 py-4 font-bold hover:bg-red-500 transition-colors uppercase tracking-wider text-xs rounded"
            >
              <MessageCircle size={14} />
              Let's Talk
            </a>

            <a
              href="/MaazCv.pdf"
              download="Muhammad_Moaz_CV.pdf"
              className={`inline-flex items-center gap-2 border-2 px-8 py-4 font-bold uppercase tracking-wider text-xs rounded transition-all ${
                isDark
                  ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-black"
                  : "border-gray-400 text-black hover:border-black hover:bg-black hover:text-white"
              }`}
            >
              Download CV
            </a>

            <a
              href="mailto:muhammadmoaz459@gmail.com"
              className="inline-flex items-center gap-2 bg-[#0099FF] text-white px-8 py-4 font-bold hover:bg-blue-600 transition-colors uppercase tracking-wider text-xs rounded"
            >
              Hire Me
            </a>
          </motion.div>
        </div>
      </motion.section>

      
    </div>
  );
}