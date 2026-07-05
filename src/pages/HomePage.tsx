import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';
import CountdownTimer from '@/components/ui/CountdownTimer';
import SectionHeader from '@/components/ui/SectionHeader';

const zoneData = [
  { id: 1, color: 'from-yellow-600 to-amber-800', borderColor: 'border-yellow-500/30', iconBg: 'bg-yellow-500/20', icon: '👑' },
  { id: 2, color: 'from-emerald-600 to-green-800', borderColor: 'border-emerald-500/30', iconBg: 'bg-emerald-500/20', icon: '🌴' },
  { id: 3, color: 'from-blue-600 to-cyan-800', borderColor: 'border-blue-500/30', iconBg: 'bg-blue-500/20', icon: '🔬' },
  { id: 4, color: 'from-orange-600 to-amber-800', borderColor: 'border-orange-500/30', iconBg: 'bg-orange-500/20', icon: '🏛️' },
  { id: 5, color: 'from-pink-600 to-rose-800', borderColor: 'border-pink-500/30', iconBg: 'bg-pink-500/20', icon: '🎠' },
  { id: 6, color: 'from-purple-600 to-violet-800', borderColor: 'border-purple-500/30', iconBg: 'bg-purple-500/20', icon: '🌙' },
];

const infoIcons = [
  <svg key="date" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
  <svg key="loc" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  <svg key="zones" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  <svg key="visitors" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
];

type ZoneKey = 'zone1Name' | 'zone2Name' | 'zone3Name' | 'zone4Name' | 'zone5Name' | 'zone6Name';
type ZoneDescKey = 'zone1Desc' | 'zone2Desc' | 'zone3Desc' | 'zone4Desc' | 'zone5Desc' | 'zone6Desc';

export default function HomePage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const infoRef = useScrollAnimationMultiple();
  const zonesRef = useScrollAnimationMultiple();

  const infoItems = [
    { label: t.home.infoDate, value: t.home.infoDateValue },
    { label: t.home.infoLocation, value: t.home.infoLocationValue },
    { label: t.home.infoZones, value: t.home.infoZonesValue },
    { label: t.home.infoVisitors, value: t.home.infoVisitorsValue },
  ];

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-dark-950">
          <img src="/images/hero_home_1783225564522.jpg" alt="Horticultural Expo" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-600/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/3 blur-3xl" />
        </div>
        <div className="hero-overlay" />

        {/* Hero Content */}
        <div ref={heroRef} className="scroll-animate relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-gold" />
            <span className="text-gold-400 text-sm font-medium tracking-wider uppercase">
              {t.home.heroTagline}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient">{t.home.heroTitle}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-dark-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.home.heroSubtitle}
          </p>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-dark-400 text-sm uppercase tracking-widest mb-4">
              {t.home.countdownTitle}
            </p>
            <CountdownTimer />
          </div>

          {/* CTA */}
          <Link to="/about" className="btn-gold text-base">
            {t.home.heroCta}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-dark-400 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
        </div>
      </section>

      {/* ===== QUICK INFO GRID ===== */}
      <section className="relative bg-dark-950 py-0">
        {/* Top fade connector */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

        <div ref={infoRef} className="section-container py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {infoItems.map((item, index) => (
              <div
                key={item.label}
                className="scroll-animate card-luxury text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                  {infoIcons[index]}
                </div>
                <p className="text-dark-400 text-sm uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-gold-400 font-sans text-lg font-medium tracking-wide">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6 ZONES PREVIEW ===== */}
      <section className="bg-dark-900">
        <div className="section-container">
          <SectionHeader
            eyebrow={t.home.zonesEyebrow}
            title={t.home.zonesTitle}
            subtitle={t.home.zonesSubtitle}
          />

          <div ref={zonesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zoneData.map((zone, index) => {
              const nameKey = `zone${zone.id}Name` as ZoneKey;
              const descKey = `zone${zone.id}Desc` as ZoneDescKey;
              return (
                <Link
                  key={zone.id}
                  to="/exhibition"
                  className={`scroll-animate group relative overflow-hidden rounded-2xl border ${zone.borderColor} bg-dark-800/50 hover:bg-dark-800 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image Background */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={
                        zone.id === 1 ? "/images/zone_royal_1783225575801.jpg" :
                        zone.id === 2 ? "/images/zone_tropical_1783225587369.jpg" :
                        zone.id === 3 ? "/images/zone_future_1783226646480.jpg" :
                        zone.id === 4 ? "/images/zone_cultural_1783226656775.jpg" :
                        zone.id === 5 ? "/images/zone_children_1783226672310.jpg" :
                        "/images/zone_night_1783226685334.jpg"
                      } 
                      alt="Zone" 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 pt-4">
                    <h3 className="font-display text-xl font-semibold text-dark-50 mb-2 group-hover:text-gold-400 transition-colors duration-300">
                      {t.zones[nameKey]}
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed line-clamp-2">
                      {t.zones[descKey]}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t.common.learnMore}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GALLERY TEASER ===== */}
      <section className="bg-dark-950">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="section-container">
          <SectionHeader
            eyebrow={t.home.galleryEyebrow}
            title={t.home.galleryTitle}
            subtitle={t.home.gallerySubtitle}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { gradient: 'from-gold-600/40 to-amber-900/40', span: 'lg:col-span-2 lg:row-span-2' },
              { gradient: 'from-emerald-600/40 to-green-900/40', span: '' },
              { gradient: 'from-purple-600/40 to-violet-900/40', span: '' },
              { gradient: 'from-blue-600/40 to-cyan-900/40', span: '' },
              { gradient: 'from-rose-600/40 to-pink-900/40', span: '' },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.span} relative overflow-hidden rounded-xl aspect-square group cursor-pointer`}
              >
                <img 
                  src={
                    index === 0 ? "/images/hero_exhibition_1783226605062.jpg" :
                    index === 1 ? "/images/zone_royal_1783225575801.jpg" :
                    index === 2 ? "/images/zone_night_1783226685334.jpg" :
                    index === 3 ? "/images/zone_future_1783226646480.jpg" :
                    "/images/zone_children_1783226672310.jpg"
                  } 
                  alt="Gallery Item" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/10 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* View All button */}
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-gold">
              {t.home.galleryViewAll}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
