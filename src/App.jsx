import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import About from "./Components/About";
import Blog from "./Components/Blog";
import BlogIndex from "./Components/BlogIndex";
import BlogPost from "./Components/BlogPost";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import IntroLoader from "./Components/IntroLoader";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";

const getRoute = () => {
  const path = window.location.pathname;

  if (path === "/blog") {
    return { page: "blog-index" };
  }

  if (path.startsWith("/blog/")) {
    return { page: "blog-post", slug: decodeURIComponent(path.replace("/blog/", "")) };
  }

  return { page: "home" };
};

const shouldShowIntro = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !prefersReducedMotion && window.sessionStorage.getItem("intro-seen") !== "true";
};

function App() {
  const route = getRoute();
  const [showIntro, setShowIntro] = useState(shouldShowIntro);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.72, 0.56, 0.38]);

  useEffect(() => {
    if (!showIntro) {
      return undefined;
    }

    window.sessionStorage.setItem("intro-seen", "true");
    const timeoutId = window.setTimeout(() => {
      setShowIntro(false);
    }, 1900);

    return () => window.clearTimeout(timeoutId);
  }, [showIntro]);

  return (
    <div className="min-h-screen overflow-hidden bg-surface-950 text-ink-100">
      {showIntro && <IntroLoader />}
      <motion.div
        className="pointer-events-none fixed inset-0"
        style={
          shouldReduceMotion
            ? undefined
            : {
                y: backgroundY,
                rotate: backgroundRotate,
              }
        }
      >
        <div className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="absolute right-[8%] top-[18%] h-96 w-96 rounded-full bg-accent-violet/12 blur-3xl" />
        <div className="absolute bottom-[12%] left-[14%] h-80 w-80 rounded-full bg-accent-amber/10 blur-3xl" />
        <div className="absolute inset-0 bg-hero-radial" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed inset-0 noise-overlay"
        style={shouldReduceMotion ? { opacity: 0.64 } : { opacity: gridOpacity }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-px origin-left bg-accent-gradient"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          {route.page === "blog-index" && <BlogIndex />}
          {route.page === "blog-post" && <BlogPost />}
          {route.page === "home" && (
            <>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Testimonials />
              <Blog />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
