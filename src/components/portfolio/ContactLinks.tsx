import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp icon.png";

type Contact = {
  label: string;
  href: string;
  icon: any;
  customIcon?: string;
};

const contacts: Contact[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201030860633",
    icon: MessageCircle,
    customIcon: whatsappIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61576879882672",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eslamemad010/",
    icon: Instagram,
  },
];

export const ContactLinks = () => (
  <section id="contact" className="relative px-6 pb-32">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl px-8 py-12 md:px-12 md:py-16"
      >
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-5">Contact</div>
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            Let&apos;s <span className="gradient-text">work</span> together
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full p-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-card"
            >
              {c.customIcon ? (
                <img
                  src={c.customIcon}
                  alt={c.label}
                  className="w-6 h-6 object-cover opacity-70"
                  style={{
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              ) : (
                <c.icon className="w-6 h-6 opacity-70" />
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

