// Internal, dependency-free icon set.
// Hand-authored inline SVGs so the homepage doesn't pull from react-icons /
// @tabler/icons-react. Each icon is a small React component that forwards
// className / size and inherits `currentColor` for stroke.

import React from "react";

export type IconProps = {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
} & React.SVGProps<SVGSVGElement>;

const base = (
  { size = 24, className, strokeWidth = 1.75, children, ...rest }: IconProps & { children: React.ReactNode },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const ArrowRight = (p: IconProps) => base({ ...p, children: (
  <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>
) });

export const ArrowUpRight = (p: IconProps) => base({ ...p, children: (
  <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>
) });

export const Github = (p: IconProps) => base({ ...p, children: (
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
) });

export const Sparkles = (p: IconProps) => base({ ...p, children: (
  <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8.5 13.2 11l2.5 1-2.5 1L12 15.5 10.8 13l-2.5-1 2.5-1z" /></>
) });

export const Code = (p: IconProps) => base({ ...p, children: (
  <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></>
) });

export const ChartBar = (p: IconProps) => base({ ...p, children: (
  <><path d="M3 3v18h18" /><rect x="7" y="10" width="3" height="8" /><rect x="13" y="6" width="3" height="12" /></>
) });

export const Brain = (p: IconProps) => base({ ...p, children: (
  <path d="M9.5 4a2.5 2.5 0 0 0-2.4 3.1A2.5 2.5 0 0 0 5 12a2.5 2.5 0 0 0 1.7 4.3A2.5 2.5 0 0 0 9.5 20 2.5 2.5 0 0 0 12 17.5V4.9A2.5 2.5 0 0 0 9.5 4Zm5 0A2.5 2.5 0 0 1 17 6.5a2.5 2.5 0 0 1 2 4.5 2.5 2.5 0 0 1-1 5 2.5 2.5 0 0 1-2.8 3.8A2.5 2.5 0 0 1 12 17.5" />
) });

export const Palette = (p: IconProps) => base({ ...p, children: (
  <><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="8.5" cy="7.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2a10 10 0 0 0 0 20 2.5 2.5 0 0 0 2.5-2.5c0-.7-.3-1.3-.7-1.8-.4-.5-.7-1.1-.7-1.7A2.5 2.5 0 0 1 15.5 13.5H18a4 4 0 0 0 4-4C22 5.4 17.5 2 12 2Z" /></>
) });

export const Building = (p: IconProps) => base({ ...p, children: (
  <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></>
) });

export const Users = (p: IconProps) => base({ ...p, children: (
  <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
) });

export const Database = (p: IconProps) => base({ ...p, children: (
  <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></>
) });

export const Link = (p: IconProps) => base({ ...p, children: (
  <><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" /></>
) });

export const Compass = (p: IconProps) => base({ ...p, children: (
  <><circle cx="12" cy="12" r="10" /><path d="m16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3z" /></>
) });
