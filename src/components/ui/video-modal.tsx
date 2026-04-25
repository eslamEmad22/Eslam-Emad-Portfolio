import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export const VideoModal = ({ isOpen, onClose, videoSrc, title }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current && videoSrc) {
      // Ensure video source is properly set
      if (videoRef.current.src !== videoSrc) {
        videoRef.current.src = videoSrc;
      }
      
      // Load video metadata when modal opens
      videoRef.current.load();
      
      // For mobile, we need to handle autoplay differently
      const attemptPlay = async () => {
        try {
          // Try to play without muting first
          await videoRef.current?.play();
        } catch (error) {
          console.log('Autoplay prevented, user will need to click play');
          // If autoplay fails, ensure controls are visible and user can click play
          if (videoRef.current) {
            videoRef.current.controls = true;
          }
        }
      };
      
      // Small delay to ensure video is ready
      const timer = setTimeout(attemptPlay, 100);
      return () => clearTimeout(timer);
    } else if (!isOpen && videoRef.current) {
      // Pause and reset video when modal closes
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen, videoSrc]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video container */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="video-container glass-cinematic bg-black">
              <video
                key={videoSrc}
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full"
                controls={true}
                playsInline
                preload="metadata"
                x-webkit-airplay="allow"
                x-webkit-playsinline
                webkit-playsinline="true"
                style={{
                  position: 'relative',
                  zIndex: 10
                }}
              />
              
              {/* Title overlay */}
              {title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                  <h3 className="text-white font-semibold text-base">{title}</h3>
                </div>
              )}
              
              {/* Mobile tap hint */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
                <div className="bg-black/60 text-white px-3 py-2 rounded-lg text-sm">
                  Tap to play
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
