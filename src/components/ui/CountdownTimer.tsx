import { useCountdown } from '@/hooks/useCountdown';
import { useLanguage } from '@/hooks/useLanguage';

export default function CountdownTimer() {
  const { t } = useLanguage();
  const { days, hours, minutes, seconds } = useCountdown();

  const items = [
    { value: days, label: t.home.countdownDays },
    { value: hours, label: t.home.countdownHours },
    { value: minutes, label: t.home.countdownMinutes },
    { value: seconds, label: t.home.countdownSeconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-dark-800/80 border border-gold-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden group hover:border-gold-400/50 transition-colors duration-300">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent animate-shimmer bg-[length:200%_100%]" />
              <span className="relative text-2xl sm:text-3xl lg:text-4xl font-light text-gold-400 font-sans tabular-nums tracking-widest">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-2 text-xs sm:text-sm text-dark-300 font-medium uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 && (
            <span className="text-gold-500/50 text-2xl sm:text-3xl font-light mb-6">·</span>
          )}
        </div>
      ))}
    </div>
  );
}
