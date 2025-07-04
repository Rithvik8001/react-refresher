// svg logo component for our food delivery app
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle for contrast */}
      <circle cx="24" cy="24" r="24" fill="#18181b" />

      {/* Cloche (serving dome) */}
      <ellipse
        cx="24"
        cy="28"
        rx="12"
        ry="8"
        fill="#fff"
        stroke="#FF6B35"
        strokeWidth="2"
      />
      {/* Cloche knob */}
      <circle cx="24" cy="18" r="2.2" fill="#FF6B35" />
      {/* Cloche highlight */}
      <path
        d="M18 26 Q24 20 30 26"
        stroke="#F7931E"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {/* Speed/motion lines */}
      <path
        d="M10 32 h6"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 36 h6"
        stroke="#F7931E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Smile (friendly touch) */}
      <path
        d="M20 33 Q24 36 28 33"
        stroke="#FF6B35"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
