import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const ref = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-animate mb-12 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 ${
          light ? 'text-dark-50' : 'text-gold-gradient'
        }`}
      >
        {title}
      </h2>
      {align === 'center' ? (
        <div className="gold-line-center" />
      ) : (
        <div className="gold-line" />
      )}
      {subtitle && (
        <p className="text-dark-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
