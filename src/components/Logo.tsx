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
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#F7931E" />
        </linearGradient>
        <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C3E50" />
          <stop offset="100%" stopColor="#34495E" />
        </linearGradient>
      </defs>

      {/* Main background circle */}
      <circle
        cx="24"
        cy="24"
        r="22"
        fill="url(#logoGradient)"
        stroke="#E74C3C"
        strokeWidth="1"
      />

      {/* Delivery bag */}
      <path
        d="M16 18C16 15.7909 17.7909 14 20 14H28C30.2091 14 32 15.7909 32 18V20H16V18Z"
        fill="url(#bagGradient)"
        stroke="#2C3E50"
        strokeWidth="0.5"
      />

      {/* Bag handle */}
      <path
        d="M20 14C20 12.8954 20.8954 12 22 12H26C27.1046 12 28 12.8954 28 14"
        stroke="#2C3E50"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bag body */}
      <rect
        x="16"
        y="20"
        width="16"
        height="12"
        fill="url(#bagGradient)"
        stroke="#2C3E50"
        strokeWidth="0.5"
      />

      {/* Fork */}
      <path
        d="M20 26L20 34M19 26L19 34M21 26L21 34M20 26C20 24.8954 20.8954 24 22 24C23.1046 24 24 24.8954 24 26L24 34"
        stroke="#ECF0F1"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Knife */}
      <path
        d="M28 26L28 34M27 26L27 34M29 26L29 34M28 26C28 24.8954 27.1046 24 26 24C24.8954 24 24 24.8954 24 26L24 34"
        stroke="#ECF0F1"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Small decorative elements */}
      <circle cx="18" cy="22" r="0.8" fill="#E74C3C" opacity="0.8" />
      <circle cx="30" cy="22" r="0.8" fill="#E74C3C" opacity="0.8" />

      {/* Text label - "FOOD" */}
      <text
        x="24"
        y="42"
        textAnchor="middle"
        fill="#2C3E50"
        fontSize="6"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        Duno
      </text>
    </svg>
  );
};

export default Logo;
