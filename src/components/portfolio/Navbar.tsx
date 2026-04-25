import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => (
  <motion.nav
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
      <a href="#" className="font-display font-bold text-lg gradient-text">ESLAM EMAD</a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          </li>
        ))}
      </ul>
      <a
        href="https://wa.me/201030860633"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium px-5 py-2 rounded-full btn-glow text-primary-foreground"
      >
        Hire Me
      </a>
    </div>
  </motion.nav>
);
