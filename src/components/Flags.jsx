import React from 'react';

// Common style properties to ensure beautiful alignment
const defaultStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  borderRadius: '50%',
  flexShrink: 0,
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
};

export function UKFlag({ size = 20, style = {} }) {
  const combinedStyle = { ...defaultStyles, ...style };
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      style={combinedStyle} 
      aria-hidden="true"
    >
      <mask id="ukMask">
        <circle cx="12" cy="12" r="12" fill="white" />
      </mask>
      <g mask="url(#ukMask)">
        {/* Blue background */}
        <rect width="24" height="24" fill="#012169" />
        
        {/* White diagonals */}
        <path d="M0,0 L24,24 M24,0 L0,24" stroke="#FFFFFF" strokeWidth="3" />
        
        {/* Red diagonals (saltires) */}
        <path d="M0,0 L24,24 M24,0 L0,24" stroke="#C8102E" strokeWidth="1.2" />
        
        {/* White cross */}
        <path d="M12,0 L12,24 M0,12 L24,12" stroke="#FFFFFF" strokeWidth="5" />
        
        {/* Red cross */}
        <path d="M12,0 L12,24 M0,12 L24,12" stroke="#C8102E" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function TZFlag({ size = 20, style = {} }) {
  const combinedStyle = { ...defaultStyles, ...style };
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      style={combinedStyle} 
      aria-hidden="true"
    >
      <mask id="tzMask">
        <circle cx="12" cy="12" r="12" fill="white" />
      </mask>
      <g mask="url(#tzMask)">
        {/* Blue background */}
        <rect width="24" height="24" fill="#00A3DD" />
        
        {/* Yellow diagonal stripe */}
        <path d="M-2,20 L20,-2 L26,4 L4,26 Z" fill="#FCDD09" />
        
        {/* Black diagonal stripe centered */}
        <path d="M-2,21.5 L21.5,-2 L24.5,1 L1.5,24 Z" fill="#000000" />
        
        {/* Green top-hoist triangle */}
        <polygon points="0,0 17,0 0,17" fill="#1EB53A" />
      </g>
    </svg>
  );
}

export function RUFlag({ size = 20, style = {} }) {
  const combinedStyle = { ...defaultStyles, ...style };
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      style={combinedStyle} 
      aria-hidden="true"
    >
      <mask id="ruMask">
        <circle cx="12" cy="12" r="12" fill="white" />
      </mask>
      <g mask="url(#ruMask)">
        <rect width="24" height="8" y="0" fill="#FFFFFF" />
        <rect width="24" height="8" y="8" fill="#0039A6" />
        <rect width="24" height="8" y="16" fill="#D52B1E" />
      </g>
    </svg>
  );
}

export function FRFlag({ size = 20, style = {} }) {
  const combinedStyle = { ...defaultStyles, ...style };
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      style={combinedStyle} 
      aria-hidden="true"
    >
      <mask id="frMask">
        <circle cx="12" cy="12" r="12" fill="white" />
      </mask>
      <g mask="url(#frMask)">
        <rect width="8" height="24" x="0" fill="#002395" />
        <rect width="8" height="24" x="8" fill="#FFFFFF" />
        <rect width="8" height="24" x="16" fill="#ED2939" />
      </g>
    </svg>
  );
}
