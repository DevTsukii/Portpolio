import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button
      className="
        relative group
        bg-transparent
        border border-border
        text-foreground
        hover:border-primary/50
        transition-all duration-1000
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        px-8 py-4
        text-lg font-medium
        rounded-full
        overflow-visible
      "
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 A 29,29 0 0 1 30,59 L 170,59 A 29,29 0 0 1 199,30 A 29,29 0 0 1 170,1 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          className="animated-border-path animate-border"
        />
      </svg>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Download className="w-5 h-5 "/>
        Download CV
      </span>
    </button>
  );
};
