import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import { Link } from 'react-router-dom';

const zoneDetails = [
  { id: 1, color: 'from-yellow-600 to-amber-800', badgeColor: 'bg-yellow-500', nameKey: 'zone1Name', descKey: 'zone1Detail' },
  { id: 2, color: 'from-emerald-600 to-green-800', badgeColor: 'bg-emerald-500', nameKey: 'zone2Name', descKey: 'zone2Detail' },
  { id: 3, color: 'from-blue-600 to-cyan-800', badgeColor: 'bg-blue-500', nameKey: 'zone3Name', descKey: 'zone3Detail' },
  { id: 4, color: 'from-orange-600 to-amber-800', badgeColor: 'bg-orange-500', nameKey: 'zone4Name', descKey: 'zone4Detail' },
  { id: 5, color: 'from-pink-600 to-rose-800', badgeColor: 'bg-pink-500', nameKey: 'zone5Name', descKey: 'zone5Detail' },
  { id: 6, color: 'from-purple-600 to-violet-800', badgeColor: 'bg-purple-500', nameKey: 'zone6Name', descKey: 'zone6Detail' },
];

export default function ExhibitionPage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const activitiesRef = useScrollAnimationMultiple();

  return (
    <main>
      {/* Sub-hero */}
      <section className="sub-hero">
        <div className="sub-hero-bg bg-dark-950">
           <img src="images/hero_exhibition_real_1783313395889.jpg" alt="Exhibition" className="absolute inset-0 w-full h-full object-cover opacity-50" />
           <div className="absolute inset-0 bg-dark-900/40" />
        </div>
        <div ref={heroRef} className="scroll-animate relative z-10 px-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4">
            {t.exhibition.heroTitle}
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            {t.exhibition.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Zones Section */}
      <section className="bg-dark-950 py-24">
        <div className="section-container">
          <SectionHeader
            eyebrow={t.exhibition.zonesEyebrow}
            title={t.exhibition.zonesTitle}
            subtitle={t.exhibition.zonesSubtitle}
          />

          <div className="mt-20 space-y-32">
            {zoneDetails.map((zone, idx) => {
              const isEven = idx % 2 !== 0;
              
              // We need individual scroll animation hooks for each zone row
              const leftRef = useScrollAnimation({ animationClass: 'is-visible', rootMargin: '0px 0px -100px 0px' });
              const rightRef = useScrollAnimation({ animationClass: 'is-visible', rootMargin: '0px 0px -100px 0px' });
              
              return (
                <div key={zone.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  
                  {/* Image Block */}
                  <div 
                    ref={leftRef}
                    className={`scroll-animate-left relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass-card p-2 ${isEven ? 'lg:order-2' : ''}`}
                  >
                    <img 
                      src={
                        zone.id === 1 ? "images/zone_royal_1783225575801.jpg" :
                        zone.id === 2 ? "images/zone_cactus_real_1783313373299.jpg" :
                        zone.id === 3 ? "images/zone_future_1783226646480.jpg" :
                        zone.id === 4 ? "images/zone_cultural_1783226656775.jpg" :
                        zone.id === 5 ? "images/zone_dino_real_1783313386013.jpg" :
                        "images/zone_night_1783226685334.jpg"
                      }
                      alt="Zone"
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />
                    
                    {/* Zone number overlay */}
                    <div className="absolute bottom-6 left-6 font-display font-bold text-6xl text-white/10 select-none">
                      0{zone.id}
                    </div>
                  </div>

                  {/* Text Block */}
                  <div 
                    ref={rightRef}
                    className={`scroll-animate-right ${isEven ? 'lg:order-1' : ''}`}
                  >
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className={`w-2 h-2 rounded-full ${zone.badgeColor} animate-pulse`} />
                      <span className="eyebrow !m-0">Zone {zone.id}</span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-50 mb-6">
                      {t.zones[zone.nameKey as keyof typeof t.zones]}
                    </h2>
                    
                    <div className="gold-line mb-8" />
                    
                    <p className="text-dark-300 text-lg leading-relaxed mb-8">
                      {t.zones[zone.descKey as keyof typeof t.zones]}
                    </p>
                    
                    <Link to="/gallery" className="btn-outline-gold inline-flex items-center gap-2 text-sm px-6 py-2">
                      {t.gallery.filterZones} Gallery
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-dark-900 py-24 relative overflow-hidden border-t border-gold-500/10">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-600/5 blur-[120px] rounded-full -translate-y-1/2" />
         
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow={t.exhibition.activitiesEyebrow}
            title={t.exhibition.activitiesTitle}
            subtitle={t.exhibition.activitiesSubtitle}
          />
          
          <div ref={activitiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[1, 2, 3, 4].map((num, idx) => (
              <div 
                key={num}
                className="scroll-animate group relative bg-dark-800/40 border border-dark-700 rounded-2xl p-8 hover:border-gold-500/40 transition-colors duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 font-display font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  {num}
                </div>
                <h3 className="font-display text-lg text-dark-50 mb-4 group-hover:text-gold-400 transition-colors">
                  {t.exhibition[`activity${num}` as keyof typeof t.exhibition]}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {t.exhibition[`activity${num}Desc` as keyof typeof t.exhibition]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Small Gallery Preview */}
      <section className="bg-dark-950 py-24 border-t border-dark-800">
        <div className="section-container text-center">
           <span className="eyebrow">{t.exhibition.galleryEyebrow}</span>
           <h2 className="font-display text-3xl font-bold text-dark-50 mt-3 mb-10">{t.exhibition.galleryTitle}</h2>
           
           <div className="flex justify-center gap-4 mb-10 h-48 sm:h-64 rounded-xl">
              <img src="images/zone_royal_1783225575801.jpg" alt="Preview 1" className="w-1/3 object-cover rounded-lg shadow-lg opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer" />
              <img src="images/zone_cactus_real_1783313373299.jpg" alt="Preview 2" className="w-1/3 object-cover rounded-lg shadow-lg opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer" />
              <img src="images/zone_dino_real_1783313386013.jpg" alt="Preview 3" className="w-1/3 object-cover rounded-lg shadow-lg opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-pointer" />
           </div>
           
           <Link to="/gallery" className="btn-gold">
             {t.nav.gallery}
           </Link>
        </div>
      </section>
    </main>
  );
}
