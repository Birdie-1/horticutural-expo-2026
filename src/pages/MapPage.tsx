import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/ui/SectionHeader';

export default function MapPage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const mapRef = useScrollAnimation();
  const travelRef = useScrollAnimationMultiple();

  return (
    <main>
      {/* Sub-hero */}
      <section className="sub-hero">
        <div className="sub-hero-bg bg-dark-950">
           <img src="images/hero_map_real_1783313363882.jpg" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-40" />
           <div className="absolute inset-0 bg-dark-900/40" />
        </div>
        <div ref={heroRef} className="scroll-animate relative z-10 px-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4">
            {t.map.heroTitle}
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            {t.map.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="bg-dark-950 py-24">
        <div className="section-container">
          <SectionHeader
            eyebrow={t.map.mapEyebrow}
            title={t.map.mapTitle}
          />
          
          <div className="mt-12">
            
            {/* Map Embed - OpenStreetMap */}
            <div ref={mapRef} className="scroll-animate w-full h-[600px] rounded-2xl overflow-hidden border border-gold-500/20 glass-card p-2 relative group">
               {/* Note: Udon Thani Nong Dae exact coordinates 17°27'30.6"N 102°47'59.1"E */}
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0} 
                 src="https://maps.google.com/maps?q=17.4585,102.79975&z=15&output=embed"
                 className="rounded-xl transition-all duration-700 shadow-xl shadow-black/20"
               />
            </div>

          </div>
        </div>
      </section>

      {/* Getting There Regional */}
      <section className="bg-dark-900 py-24 border-t border-gold-500/10">
        <div className="section-container">
          <SectionHeader
            eyebrow={t.map.travelEyebrow}
            title={t.map.travelTitle}
            subtitle={t.map.travelSubtitle}
          />
          
          <div ref={travelRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { 
                id: 'bangkok', 
                icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, 
                title: 'fromBangkok', 
                desc: 'fromBangkokDesc' as const 
              },
              { 
                id: 'khonkaen', 
                icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, 
                title: 'fromKhonKaen', 
                desc: 'fromKhonKaenDesc' as const 
              },
              { 
                id: 'nongkhai', 
                icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>, 
                title: 'fromNongKhai', 
                desc: 'fromNongKhaiDesc' as const 
              },
            ].map((route, idx) => (
              <div 
                key={route.id}
                className="scroll-animate bg-dark-800/40 rounded-xl p-8 border border-dark-700 hover:border-gold-500/30 transition-colors"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-3xl mb-4">{route.icon}</div>
                <h4 className="font-display text-xl text-gold-400 mb-3">
                  {t.map[route.title as keyof typeof t.map]}
                </h4>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {t.map[route.desc as keyof typeof t.map]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
