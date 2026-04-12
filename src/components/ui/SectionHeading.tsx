import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <div
        className={cn(
          'w-12 h-1 rounded-full mb-4',
          light ? 'bg-root-orange' : 'bg-root-orange',
          centered && 'mx-auto'
        )}
      />
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance',
          light ? 'text-white' : 'text-root-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-3xl leading-relaxed',
            light ? 'text-white/70' : 'text-root-muted',
            centered && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
