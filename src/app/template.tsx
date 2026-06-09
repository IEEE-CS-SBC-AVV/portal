"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const pageTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={pageTransition}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
