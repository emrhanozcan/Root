import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'orange' | 'yellow' | 'dark' | 'custom';
  className?: string;
}

const variantStyles = {
  orange: 'bg-root-orange/10 text-root-orange',
  yellow: 'bg-root-yellow/15 text-root-dark',
  dark: 'bg-root-dark/10 text-root-dark',
  custom: '',
};

export default function Badge({ children, variant = 'orange', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
