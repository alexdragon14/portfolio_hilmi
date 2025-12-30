import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // scroll to top of About when navigating to /about
      const aboutEl = document.getElementById("about");
      if (aboutEl) aboutEl.scrollIntoView({ behavior: "auto" });
    }
  }, [location]);

  return (
    <main id="about" className="px-6 py-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <p className="text-gray-600 mb-8">Brief about content goes here.</p>
      </section>

      <section id="experience" className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Experience />
      </section>

      <section id="education" className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Education />
      </section>

      <section id="skills" className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <Skills />
      </section>
    </main>
  );
}
