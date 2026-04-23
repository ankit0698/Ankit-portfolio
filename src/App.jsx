import { useEffect, useState } from "react";
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
      <div className="pointer-events-none fixed inset-0 bg-hero-radial" />
      <div className="pointer-events-none fixed inset-0 noise-overlay opacity-70" />
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
