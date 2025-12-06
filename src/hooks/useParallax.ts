"use client";

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function useParallax({ speed = 0.5 }: { speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", `${speed * 100}%`]);

  return { ref, y };
}
