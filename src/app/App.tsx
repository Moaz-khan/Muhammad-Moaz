import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsBanner } from "./components/SkillsBanner";
import { About } from "./components/About";
import { WorkingProcess } from "./components/WorkingProcess";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BlogDetail } from "./components/BlogDetail";
import { useScrollToSection } from "./hooks/useScrollToSection";

// Wrapper component jor Router ke andar ho
function AppContent({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  useScrollToSection(); // ← Ab hook Router ke andar hai

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        logoDark="/logodark.png"    
        logoLight="/logo.png"       
      />

      <Routes>
        {/* Home Page - All Components */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero isDark={isDark} />
              </div>
              <div id="skills">
                <SkillsBanner />
              </div>
              <div id="about">
                <About isDark={isDark} />
              </div>
              <div id="services">
                <WorkingProcess />
              </div>
              <div id="works">
                <Projects isDark={isDark} />
              </div>
              <div id="stats">
                <Stats />
              </div>
              <div id="testimonials">
                <Testimonials isDark={isDark} />
              </div>
              <div id="blog">
                <Blog isDark={isDark} />
              </div>
              <CTA isDark={isDark} />
              <Footer isDark={isDark} logoSrc="./logodark.png" />
            </>
          }
        />

        {/* Blog Detail Page */}
        <Route 
          path="/blog/:slug" 
          element={
            <>
              <BlogDetail isDark={isDark} />
              <Footer isDark={isDark} logoSrc="../public/logodark.png" />
            </>
          } 
        />
      </Routes>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Page load hone par localStorage se theme load karo
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  // Dark mode toggle function
  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <Router>
      <div 
        className={isDark ? "dark" : "light"}
        style={{
          backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          transition: "background-color 0.3s ease, color 0.3s ease",
          minHeight: "100vh"
        }}
      >
        <AppContent 
          isDark={isDark} 
          toggleTheme={toggleTheme}
        />
      </div>
    </Router>
  );
}