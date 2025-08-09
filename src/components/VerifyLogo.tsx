import React from 'react';

interface VerifyLogoProps {
  className?: string;
  size?: number;
}

const VerifyLogo: React.FC<VerifyLogoProps> = ({ className = "", size = 56 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="checkmarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle 
        cx="100" 
        cy="100" 
        r="90" 
        fill="url(#primaryGradient)" 
        opacity="0.1"
      />
      
      {/* Main Checkmark */}
      <g transform="translate(100, 100)">
        {/* Large prominent checkmark */}
        <path 
          d="M-45,-10 L-15,25 L50,-25" 
          stroke="url(#checkmarkGradient)" 
          strokeWidth="8" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          opacity="0.9"
        />
        
        {/* Arabic text elements - stylized */}
        <g fill="url(#primaryGradient)" opacity="0.8">
          {/* Letter ت (taa) */}
          <rect x="-60" y="35" width="25" height="4" rx="2" />
          <rect x="-52" y="25" width="3" height="20" rx="1.5" />
          <rect x="-45" y="25" width="3" height="20" rx="1.5" />
          <circle cx="-48.5" cy="20" r="1.5" />
          <circle cx="-41.5" cy="20" r="1.5" />
          
          {/* Letter أ (alif) */}
          <rect x="-25" y="25" width="4" height="20" rx="2" />
          <path d="M-21,30 L-15,35 L-21,40" stroke="url(#primaryGradient)" strokeWidth="2" fill="none"/>
          
          {/* Letter ك (kaaf) */}
          <path d="M-5,45 C-5,35 5,35 15,40 C20,42 20,45 15,45 L-5,45" fill="url(#primaryGradient)"/>
          <rect x="10" y="25" width="3" height="15" rx="1.5" />
          
          {/* Letter د (dal) */}
          <path d="M25,45 C25,35 35,35 40,40 C42,42 40,45 35,45 Z" fill="url(#primaryGradient)"/>
        </g>
        
        {/* Decorative dots */}
        <circle cx="60" cy="-35" r="3" fill="url(#primaryGradient)" opacity="0.6"/>
        <circle cx="-60" cy="-20" r="2.5" fill="url(#checkmarkGradient)" opacity="0.7"/>
        <circle cx="65" cy="10" r="2" fill="url(#primaryGradient)" opacity="0.5"/>
        
        {/* Small verification elements */}
        <g opacity="0.4">
          <circle cx="45" cy="-45" r="1.5" fill="url(#checkmarkGradient)"/>
          <circle cx="-50" cy="50" r="1.5" fill="url(#primaryGradient)"/>
          <circle cx="55" cy="35" r="1" fill="url(#checkmarkGradient)"/>
        </g>
      </g>
    </svg>
  );
};

export default VerifyLogo;