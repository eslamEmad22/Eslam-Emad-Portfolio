import { motion } from "framer-motion";
import { Check, Sparkles, Play } from "lucide-react";
import { useState, useRef } from "react";
import standardVideo from "@/assets/standard.mp4";
import goldVideo from "@/assets/gold.mp4";
import diamondVideo from "@/assets/diamond.mp4";
import standardCover from "@/assets/standard cover.png";
import goldCover from "@/assets/gold cover.png";
import diamondCover from "@/assets/diamond cover.png";

const plans = [
  {
    name: "✦ STANDARD PACKAGE ✦",
    price: "350 LE",
    unit: "",
    features: [
      "Strong 3-sec Hook",
      "Clean basic editing",
      "Captions included",
      "Basic B-rolls",
      "Simple transitions",
      "Sound Design & SFX",
      "1 Revision",
    ],
    note: "💡 For daily & simple reels",
    sampleVideo: standardVideo,
    coverImage: standardCover,
  },
  {
    name: "✦ GOLD PACKAGE ✦",
    price: "600 LE",
    unit: "",
    features: [
      "Advanced editing with strong flow",
      "Storytelling focused on retention",
      "Styled captions",
      "Motion Graphics",
      "AI-assisted editing",
      "Professional Sound Design & SFX",
      "2 Revisions",
    ],
    note: "💡 For brands & serious creators",
    sampleVideo: goldVideo,
    coverImage: goldCover,
    featured: true,
  },
  {
    name: "✦ DIAMOND PACKAGE ✦",
    price: "750 LE",
    unit: "",
    features: [
      "Full high-end editing (start to finish)",
      "Strong storytelling & viral structure",
      "Advanced captions & motion typography",
      "Heavy Sound Design",
      "Motion Graphics",
      "3D / SaaS-style visuals",
      "AI-powered workflow",
      "4 Revisions",
    ],
    note: "💡 For ads & premium viral content",
    sampleVideo: diamondVideo,
    coverImage: diamondCover,
  },
];

export const Pricing = () => {
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  
  const handlePlayVideo = (videoId: string) => {
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };
  
  const handlePauseVideo = (videoId: string) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };
  
  const handlePlayButtonClick = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (video) {
      video.play();
    }
  };
  
  return (
  <section id="pricing" className="relative py-40 px-6 content-section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 max-w-2xl mx-auto"
      >
        <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">Pricing</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Plans built to <span className="gradient-text">scale your content</span>
        </h2>
        <p className="text-muted-foreground">Pick the package that matches your ambition.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-3xl p-10 card-hover flex flex-col ${
              p.featured
                ? "glass-strong scale-100 md:scale-105 md:-my-2 animate-glow-pulse"
                : "glass"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full shadow-[0_0_30px_hsl(262_83%_58%/0.6)]">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}

            <h3 className="font-display text-2xl font-bold mb-4">{p.name}</h3>
            <div className="mt-4 mb-8 flex items-baseline gap-2">
              <span className={`font-display text-5xl font-bold ${p.featured ? "gradient-text" : ""}`}>{p.price}</span>
              {p.unit ? <span className="text-muted-foreground text-sm">{p.unit}</span> : null}
            </div>

            {/* Sample preview with inline video */}
            <div className="video-container mb-8 group/v relative">
              {/* Cover image - hidden when video is playing */}
              <img
                src={p.coverImage}
                alt={`${p.name} cover`}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${playingVideos.has(p.name) ? 'opacity-0' : 'opacity-1'}`}
                loading="lazy"
              />
              
              {/* Video element - initially hidden */}
              <video
                ref={(el) => {
                  if (el) videoRefs.current[p.name] = el;
                }}
                src={p.sampleVideo}
                className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ${playingVideos.has(p.name) ? 'opacity-1' : 'opacity-0'}`}
                controls={true}
                muted={false}
                playsInline
                preload="metadata"
                onPlay={() => handlePlayVideo(p.name)}
                onPause={() => handlePauseVideo(p.name)}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none z-10" />
              
              {/* Play button overlay */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-20 ${playingVideos.has(p.name) ? 'opacity-0' : 'opacity-1'} transition-opacity duration-300`}>
                <button
                  className="w-12 h-12 rounded-full glass-strong flex items-center justify-center group-hover/v:shadow-[0_0_20px_hsl(262_83%_58%/0.4)] transition-all duration-300 group-hover/v:scale-110 pointer-events-auto cursor-pointer"
                  onClick={() => handlePlayButtonClick(p.name)}
                >
                  <Play className="w-5 h-5 fill-current text-primary-foreground ml-0.5" />
                </button>
              </div>
              
              {/* Click hint */}
              <div className="absolute top-3 right-3 text-xs text-muted-foreground bg-black/60 px-2 py-1 rounded pointer-events-none z-10">
                Click to play
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground mb-8">{p.note}</p>

            <a
              href="https://wa.me/201030860633?text=Hi%20I%20want%20to%20work%20with%20you"
              target="_blank"
              rel="noreferrer"
              className={`text-center font-medium px-8 py-4 rounded-full transition-all ${
                p.featured
                  ? "btn-glow text-primary-foreground"
                  : "glass hover:bg-card border border-primary/20 hover:border-primary/50"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Pricing;
