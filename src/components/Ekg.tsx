"use client";

import { motion } from "framer-motion";

// One ECG trace: baseline → P wave → QRS spike → T wave, repeated 3x
const TRACE =
  "M0 32 H70 q6 0 9 -5 t9 5 H130 l7 3 8 -26 9 34 7 -14 5 4 q8 0 12 -6 t12 6 H270 q6 0 9 -5 t9 5 H330 l7 3 8 -26 9 34 7 -14 5 4 q8 0 12 -6 t12 6 H470 q6 0 9 -5 t9 5 H530 l7 3 8 -26 9 34 7 -14 5 4 H600";

export default function Ekg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 64"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* Static faint trace so the shape is always visible */}
      <path
        d={TRACE}
        stroke="var(--accent)"
        strokeOpacity={0.15}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Animated sweep */}
      <motion.path
        d={TRACE}
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.9 }}
        animate={{ pathLength: [0, 1, 1], opacity: [0.9, 0.9, 0] }}
        transition={{
          duration: 3.2,
          times: [0, 0.8, 1],
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
}
