import React from 'react';

interface BottonProps {
  color: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Botton({ color, children, onClick }: BottonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-md text-white font-bold uppercase tracking-wide transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
);
}