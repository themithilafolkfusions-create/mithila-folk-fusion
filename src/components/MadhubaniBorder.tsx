import React from 'react';

export const MadhubaniBorderTop: React.FC = () => (
  <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full">
    <defs>
      <pattern id="zigzag-top" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
        <polyline points="0,20 10,0 20,20 30,0 40,20" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
      </pattern>
      <pattern id="dots-top" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="#C41E7F"/>
      </pattern>
      <pattern id="fish-scale" x="0" y="0" width="30" height="15" patternUnits="userSpaceOnUse">
        <path d="M0,15 Q15,0 30,15" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
      </pattern>
    </defs>
    <rect y="0" width="100%" height="4" fill="#1A1A1A"/>
    <rect y="5" width="100%" height="15" fill="url(#zigzag-top)"/>
    <rect y="22" width="100%" height="15" fill="url(#dots-top)"/>
    <rect y="39" width="100%" height="15" fill="url(#fish-scale)"/>
    <rect y="56" width="100%" height="4" fill="#1A1A1A"/>
  </svg>
);

export const MadhubaniBorderBottom: React.FC = () => (
  <svg width="100%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full">
    <defs>
      <pattern id="zigzag-bot" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
        <polyline points="0,0 10,20 20,0 30,20 40,0" fill="none" stroke="#C41E3A" strokeWidth="2"/>
      </pattern>
      <pattern id="diamond-bot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <polygon points="10,0 20,10 10,20 0,10" fill="none" stroke="#E8A317" strokeWidth="1.5"/>
      </pattern>
      <pattern id="leaf-bot" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0,6 Q6,0 12,6 Q6,12 0,6" fill="#2E5A1C" opacity="0.3"/>
        <path d="M12,6 Q18,0 24,6 Q18,12 12,6" fill="#006B6B" opacity="0.3"/>
      </pattern>
    </defs>
    <rect y="0" width="100%" height="4" fill="#1A1A1A"/>
    <rect y="5" width="100%" height="15" fill="url(#leaf-bot)"/>
    <rect y="22" width="100%" height="15" fill="url(#diamond-bot)"/>
    <rect y="39" width="100%" height="15" fill="url(#zigzag-bot)"/>
    <rect y="56" width="100%" height="4" fill="#1A1A1A"/>
  </svg>
);

export const SectionDivider: React.FC<{ variant?: 'lotus' | 'peacock' | 'fish' }> = ({ variant = 'lotus' }) => {
  if (variant === 'lotus') {
    return (
      <div className="flex items-center justify-center py-8">
        <svg width="300" height="60" viewBox="0 0 300 60">
          <line x1="0" y1="30" x2="100" y2="30" stroke="#8B1A1A" strokeWidth="1.5" strokeDasharray="4,4"/>
          {/* Lotus */}
          <g transform="translate(150,30)">
            <ellipse cx="0" cy="-5" rx="8" ry="18" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(-30)"/>
            <ellipse cx="0" cy="-5" rx="8" ry="18" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(0)"/>
            <ellipse cx="0" cy="-5" rx="8" ry="18" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(30)"/>
            <ellipse cx="0" cy="-5" rx="8" ry="18" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(-60)"/>
            <ellipse cx="0" cy="-5" rx="8" ry="18" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(60)"/>
            <circle cx="0" cy="0" r="5" fill="#C41E7F"/>
            <circle cx="0" cy="0" r="3" fill="#E8A317"/>
          </g>
          <line x1="200" y1="30" x2="300" y2="30" stroke="#8B1A1A" strokeWidth="1.5" strokeDasharray="4,4"/>
        </svg>
      </div>
    );
  }

  if (variant === 'peacock') {
    return (
      <div className="flex items-center justify-center py-8">
        <svg width="400" height="50" viewBox="0 0 400 50">
          <line x1="0" y1="25" x2="140" y2="25" stroke="#006B6B" strokeWidth="1.5"/>
          {/* Peacock eye feather */}
          <g transform="translate(200,25)">
            <ellipse cx="0" cy="0" rx="20" ry="12" fill="none" stroke="#006B6B" strokeWidth="2"/>
            <ellipse cx="0" cy="0" rx="14" ry="8" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
            <ellipse cx="0" cy="0" rx="8" ry="5" fill="none" stroke="#1B4F72" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="3" fill="#1B4F72"/>
          </g>
          <line x1="260" y1="25" x2="400" y2="25" stroke="#006B6B" strokeWidth="1.5"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      <svg width="300" height="40" viewBox="0 0 300 40">
        <line x1="0" y1="20" x2="110" y2="20" stroke="#E8A317" strokeWidth="1.5"/>
        {/* Fish */}
        <g transform="translate(150,20)">
          <path d="M-20,0 Q-10,-12 0,0 Q-10,12 -20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
          <path d="M0,0 L8,-6 L8,6 Z" fill="#8B1A1A"/>
          <circle cx="-10" cy="-2" r="2" fill="#1A1A1A"/>
        </g>
        <line x1="190" y1="20" x2="300" y2="20" stroke="#E8A317" strokeWidth="1.5"/>
      </svg>
    </div>
  );
};

export const DecorativeCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; size?: number }> = ({ position, size = 80 }) => {
  const transforms: Record<string, string> = {
    tl: '',
    tr: 'scale(-1, 1)',
    bl: 'scale(1, -1)',
    br: 'scale(-1, -1)',
  };

  return (
    <svg width={size} height={size} viewBox="0 0 80 80" style={{ transform: transforms[position] }}>
      <path d="M0,0 L0,80" stroke="#8B1A1A" strokeWidth="3" fill="none"/>
      <path d="M0,0 L80,0" stroke="#8B1A1A" strokeWidth="3" fill="none"/>
      <path d="M5,5 Q5,25 25,25 Q5,25 5,45" stroke="#C41E7F" strokeWidth="1.5" fill="none"/>
      <path d="M5,5 Q25,5 25,25 Q25,5 45,5" stroke="#006B6B" strokeWidth="1.5" fill="none"/>
      <circle cx="5" cy="5" r="4" fill="#E8A317"/>
      <circle cx="25" cy="25" r="3" fill="#C41E7F"/>
      <path d="M10,10 L18,10 L14,18 Z" fill="none" stroke="#2E5A1C" strokeWidth="1"/>
    </svg>
  );
};

export const PaisleyPattern: React.FC = () => (
  <svg width="60" height="80" viewBox="0 0 60 80" className="opacity-10">
    <path d="M30,5 Q55,20 45,50 Q35,75 15,60 Q-5,45 10,25 Q20,10 30,5" 
          fill="none" stroke="#8B1A1A" strokeWidth="2"/>
    <path d="M30,15 Q45,25 40,45 Q32,62 20,52 Q8,42 15,30 Q22,20 30,15" 
          fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
    <circle cx="30" cy="35" r="5" fill="none" stroke="#006B6B" strokeWidth="1"/>
    <circle cx="30" cy="35" r="2" fill="#E8A317"/>
  </svg>
);
