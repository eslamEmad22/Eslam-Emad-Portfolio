import { motion } from "framer-motion";
import { Video, Music, Target, Megaphone, Youtube, Calendar, ArrowRight } from "lucide-react";

const services = [
  { icon: Video, title: "Reels Editing", desc: "Scroll-stopping Instagram Reels with cinematic cuts, motion text, and viral hooks." },
  { icon: Music, title: "TikTok Videos", desc: "Trend-aware TikToks engineered for the algorithm — fast pacing and punchy edits." },
  { icon: Target, title: "Content Strategy", desc: "End-to-end short-form strategy: hooks, structures, and posting cadence." },
  { icon: Megaphone, title: "Social Media Ads", desc: "High-converting paid creatives for Meta, TikTok and YouTube Shorts." },
];

const additionalServices = [
  {
    icon: Youtube,
    title: "YouTube Long Videos",
    desc: "Professional long-form video editing for YouTube content including documentaries, vlogs, and educational content with cinematic storytelling.",
    buttonText: "Watch Sample",
    buttonLink: "https://youtu.be/OzzZQ44FovY?si=xvDB2Pi5xFfD9DVJ"
  },
  {
    icon: Calendar,
    title: "Events & Promos",
    desc: "Corporate event coverage and promotional videos for major Egyptian companies including Unionaire, Techno Seeds, and Salem Pack. Specialized in video editing only (not photography).",
    buttonText: "Watch Samples",
    buttonLink: "https://drive.google.com/drive/folders/1I2GNEpQ4wtgZUz8UkKbpH8QrkzTlkYA2?usp=drive_link"
  }
];

export const Services = () => (
  <section id="services" className="relative py-40 px-6 content-section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 max-w-2xl mx-auto"
      >
        <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Services</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          What <span className="gradient-text">I Offer</span>
        </h2>
        <p className="text-muted-foreground">
          Cinematic short-form video tailored to grow your audience and your revenue.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass card-hover rounded-3xl p-9 group relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-7 shadow-[0_0_30px_hsl(262_83%_58%/0.4)]">
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Services */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-6 mt-12"
      >
        {additionalServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8 card-hover group h-full flex flex-col"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.desc}</p>
            <a
              href={service.buttonLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 btn-glow text-primary-foreground font-medium px-6 py-3 rounded-full transition-all duration-300 group-hover:scale-105 mt-auto"
            >
              {service.buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
