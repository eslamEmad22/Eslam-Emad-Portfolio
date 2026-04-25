import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const WORKS_URL =
  "https://drive.google.com/drive/folders/1NHVV5CNoNcukRgy6xl2cGqwb0t8dsFN-?usp=drive_link";

export const Work = () => (
  <section id="work" className="relative py-40 px-6 content-section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between flex-wrap gap-8"
      >
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-5">Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            View My <span className="gradient-text">Portfolio</span>
          </h2>
        </div>

        <a
          href={WORKS_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-glow text-primary-foreground font-medium px-8 py-4 rounded-full inline-flex items-center gap-2"
        >
          Open Google Drive <FolderOpen className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);
