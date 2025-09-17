'use client'
import React, { useEffect, useRef, useState } from 'react';

const lerp = (start, end, amt) => start + (end - start) * amt;

const GradientBackground = () => {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [anim, setAnim] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track theme changes (dark/light) in real-time
  useEffect(() => {
    const docEl = document.documentElement;
    const updateTheme = () => setIsDark(docEl.classList.contains('dark'));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(docEl, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animate = () => {
      setAnim((prev) => {
        const nx = lerp(prev.x, target.x, 0.12);
        const ny = lerp(prev.y, target.y, 0.12);
        return { x: nx, y: ny };
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target.x, target.y]);

  const x = Math.round(anim.x);
  const y = Math.round(anim.y);

  // Theme-aware colors
  // Tune intensities per theme
  const auraOpacity = isDark ? 0.18 : 0.06;
  const highlightOpacity = isDark ? 0.10 : 0.00; // disable moving white highlight in light mode
  const vignetteOpacity = isDark ? 0.20 : 0.05;

  // Only show gradient effects in dark mode
  const layers = isDark ? [
      // Soft moving highlight
      `radial-gradient(220px circle at ${x}px ${y}px, rgba(255,255,255,${highlightOpacity}), transparent 60%)`,
      // Colorful aura
      `radial-gradient(360px circle at ${x}px ${y}px, rgba(168,85,247,${auraOpacity}), transparent 60%)`,
      `radial-gradient(420px circle at ${x}px ${y}px, rgba(59,130,246,${Math.max(auraOpacity - 0.04, 0)}), transparent 65%)`,
      // Gentle top glow for depth
      `radial-gradient(1000px circle at 50% -10%, rgba(147,51,234,0.06), transparent 60%)`,
      // Subtle vignette to focus center
      `radial-gradient(closest-side at 50% 50%, transparent 60%, rgba(0,0,0,${vignetteOpacity}))`
    ] : [
      // Light mode: just a subtle static background
      `linear-gradient(135deg, rgba(248,250,252,0.8) 0%, rgba(255,255,255,0.9) 100%)`
    ];

  const style = {
    backgroundImage: layers.join(','),
      // Soft moving highlight
    transition: 'background-image 120ms ease-out',
    willChange: 'background-image',
  };

  return (
    <div className="fixed inset-0 pointer-events-none -z-20" style={style} />
  );
};

export default GradientBackground;
