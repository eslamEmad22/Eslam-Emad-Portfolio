import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section id="cta" className="relative py-32 px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="relative max-w-5xl mx-auto text-center glass-strong rounded-[2.5rem] px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-80 animate-gradient-shift" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative">
        <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Let's create</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
          Ready to take your content <br className="hidden md:block" />
          to the <span className="gradient-text glow-text">next level?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Join 12+ creators and brands trusting me to ship cinematic, high-performing short-form video — every single week.
        </p>
        <a
          href="https://wa.me/201030860633?text=Hi%20I%20want%20to%20work%20with%20you"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 btn-glow text-primary-foreground font-medium px-10 py-5 rounded-full text-lg animate-glow-pulse"
        >
          Start Project <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  </section>
);
