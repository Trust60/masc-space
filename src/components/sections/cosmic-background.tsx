"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StarBackground } from "./star-background";

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated stars layer */}
      <StarBackground />
      
      {/* Planets */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-10 w-32 h-32 md:w-48 md:h-48 opacity-60"
      >
        <Image
          src="/planet-1.png"
          alt="Planet"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))" }}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -40, 0],
          
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-5 w-24 h-24 md:w-36 md:h-36 opacity-50"
      >
        <Image
          src="/planet-2.png"
          alt="Planet"
          width={144}
          height={144}
          className="w-full h-full object-cover rounded-full"
          style={{ filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))" }}
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 50, 0],
          
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-20 h-20 md:w-32 md:h-32 opacity-40"
      >
        <Image
          src="/planet-3.png"
          alt="Planet"
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-full"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))" }}
        />
      </motion.div>

      {/* Asteroids */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-10 w-16 h-16 md:w-24 md:h-24 opacity-50"
      >
        <Image
          src="/asteroid-1.png"
          alt="Asteroid"
          width={96}
          height={96}
          className="w-full h-full object-cover"
          style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.15))" }}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-12 h-12 md:w-20 md:h-20 opacity-45"
      >
        <Image
          src="/asteroid-2.png"
          alt="Asteroid"
          width={80}
          height={80}
          className="w-full h-full object-cover"
          style={{ filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.1))" }}
        />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        animate={{
          y: [0, 100, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/3 w-8 h-8 md:w-12 md:h-12"
      >
        <div className="w-full h-full bg-white rounded-full blur-sm opacity-50" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -80, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/4 w-6 h-6 md:w-10 md:h-10"
      >
        <div className="w-full h-full bg-white rounded-full blur-sm opacity-40" />
      </motion.div>
    </div>
  );
}


