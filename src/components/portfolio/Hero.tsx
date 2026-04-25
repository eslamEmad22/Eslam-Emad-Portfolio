import { motion } from "framer-motion";
import { Play, Sparkles, Film, TrendingUp } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";
import clientIcon from "@/assets/client icon.png";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 1, delay: i * 0.15, ease } }),
};

export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden content-section smooth-scroll">
    {/* Ambient glows - optimized for performance */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[80px] animate-glow-pulse" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/15 blur-[80px] animate-glow-pulse-subtle" />

    <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
      {/* Left: copy */}
      <div className="relative z-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-muted-foreground"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          Available for new projects · 2026
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
        >
          Professional <span className="gradient-text glow-text">Video Editor</span>
          <br />
          Specialized in <span className="gradient-text">Viral Short-Form</span> Content
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          I've worked on 20+ projects with 12+ clients, delivering over 250+ high-performing
          videos that drive views, engagement, and revenue.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://drive.google.com/drive/folders/1NHVV5CNoNcukRgy6xl2cGqwb0t8dsFN-?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-glow text-primary-foreground font-medium px-8 py-4 rounded-full inline-flex items-center gap-2"
          >
            View My Work <Play className="w-4 h-4 fill-current" />
          </a>
          <a href="#pricing" className="glass px-8 py-4 rounded-full font-medium hover:bg-card transition-colors">
            See Pricing
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="grid grid-cols-3 gap-6 mt-14 max-w-md"
        >
          {[
            { v: "250+", l: "Videos" },
            { v: "12+", l: "Clients" },
            { v: "20+", l: "Projects" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold gradient-text">{s.v}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: portrait + floating cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative h-[560px] lg:h-[640px]"
      >
        {/* Portrait card */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-cinematic glow-border-strong">
          {/* Image with lazy loading */}
          <div className="image-container w-full h-full rounded-[2rem]">
            <img
              src={portrait}
              alt="Professional video editor portrait"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>

          {/* Center play */}
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full btn-glow flex items-center justify-center group transition-all duration-500">
            <Play className="w-9 h-9 fill-current text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Floating card 1 */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -left-6 lg:-left-12 glass-cinematic rounded-2xl p-5 w-56 hidden sm:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Avg. Reach</div>
              <div className="font-display font-bold">+340%</div>
            </div>
          </div>
        </motion.div>

        {/* Floating card 2 */}
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-4 lg:-right-10 glass-cinematic rounded-2xl p-5 w-52 hidden sm:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Film className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Delivered</div>
              <div className="font-display font-bold">250+ videos</div>
            </div>
          </div>
        </motion.div>

        {/* Floating card 3 */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -left-4 lg:-left-14 glass-cinematic rounded-2xl p-4 hidden sm:flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background relative flex items-center justify-center">
                <img
                  src={clientIcon}
                  alt="Client"
                  className="w-5 h-5 object-cover brightness-0 invert opacity-50"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                  }}
                />
              </div>
            ))}
          </div>
          <div className="text-xs">
            <div className="font-medium">12+ Happy</div>
            <div className="text-muted-foreground">Clients</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
