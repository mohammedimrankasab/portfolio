import { useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#09090b]"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400">
          <motion.div
            className="absolute inset-0 bg-black/20"
            animate={{ y: ["100%", "0%"] }}
            transition={{
              duration: 1.5,
              ease: "circOut",
            }}
          />

          <span className="relative z-10 text-2xl font-black text-[#09090b]">
            KMI
          </span>
        </div>

        <div className="h-1 w-48 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}