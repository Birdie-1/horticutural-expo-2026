import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import type { TicketTier, TransportMode, FAQItem } from '@/types';

export default function AboutPage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const historyRef = useScrollAnimationMultiple();
  const ticketsRef = useScrollAnimationMultiple();
  const travelRef = useScrollAnimationMultiple();
  const faqRef = useScrollAnimationMultiple();

  const tickets: TicketTier[] = [
    {
      nameKey: 'ticketAdult',
      priceKey: 'ticketAdultPrice',
      featuresKeys: ['ticketFeature1', 'ticketFeature2', 'ticketFeature3']
    },
    {
      nameKey: 'ticketChild',
      priceKey: 'ticketChildPrice',
      featuresKeys: ['ticketFeature1', 'ticketFeature2', 'ticketFeature3']
    },
    {
      nameKey: 'ticketGroup',
      priceKey: 'ticketGroupPrice',
      featuresKeys: ['ticketFeature1', 'ticketFeature2', 'ticketFeature3']
    },
    {
      nameKey: 'ticketVip',
      priceKey: 'ticketVipPrice',
      featuresKeys: ['ticketFeature1', 'ticketFeatureVip1', 'ticketFeatureVip2', 'ticketFeatureVip3'],
      highlighted: true
    }
  ];

  const travelModes: TransportMode[] = [
    { 
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, 
      titleKey: 'travelCar', 
      descKey: 'travelCarDesc' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>, 
      titleKey: 'travelFlight', 
      descKey: 'travelFlightDesc' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25m0-5.25C18 5.004 17.496 4.5 16.875 4.5H7.125M18 10.875V7.125m0 3.75c0 .621-.504 1.125-1.125 1.125H7.125m10.875-1.125c.621 0 1.125-.504 1.125-1.125m-12 1.125c-.621 0-1.125-.504-1.125-1.125m1.125 1.125A1.125 1.125 0 016 9.375" /></svg>, 
      titleKey: 'travelTrain', 
      descKey: 'travelTrainDesc' 
    },
    { 
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, 
      titleKey: 'travelBus', 
      descKey: 'travelBusDesc' 
    },
  ];

  const faqs: FAQItem[] = [
    { questionKey: 'faq1Q', answerKey: 'faq1A' },
    { questionKey: 'faq2Q', answerKey: 'faq2A' },
    { questionKey: 'faq3Q', answerKey: 'faq3A' },
    { questionKey: 'faq4Q', answerKey: 'faq4A' },
    { questionKey: 'faq5Q', answerKey: 'faq5A' },
    { questionKey: 'faq6Q', answerKey: 'faq6A' },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main>
      {/* Sub-hero */}
      <section className="sub-hero">
        <div className="sub-hero-bg bg-dark-950">
           <img src="/images/hero_about_1783226591930.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover opacity-40" />
           <div className="absolute inset-0 bg-dark-900/40" />
        </div>
        <div ref={heroRef} className="scroll-animate relative z-10 px-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4">
            {t.about.heroTitle}
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-dark-950 py-24">
        <div className="section-container" ref={historyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <span className="eyebrow">{t.about.historyEyebrow}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-50 mt-3 mb-6">
                {t.about.historyTitle}
              </h2>
              <div className="gold-line mb-8" />
              <div className="space-y-6 text-dark-300 leading-relaxed">
                <p>{t.about.historyP1}</p>
                <p>{t.about.historyP2}</p>
                <p>{t.about.historyP3}</p>
              </div>
            </div>
            
            <div className="scroll-animate-right relative h-[500px] rounded-2xl overflow-hidden glass-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 rounded-full border border-gold-500/30 flex items-center justify-center">
                    <span className="font-display text-4xl text-gold-400 opacity-50">H</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="bg-dark-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 blur-[100px] rounded-full" />
        
        <div className="section-container relative z-10">
          <SectionHeader
            eyebrow={t.about.ticketsEyebrow}
            title={t.about.ticketsTitle}
            subtitle={t.about.ticketsSubtitle}
          />
          
          <div ref={ticketsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {tickets.map((ticket, idx) => (
              <div 
                key={ticket.nameKey}
                className={`scroll-animate relative rounded-2xl p-8 transition-all duration-500 ${
                  ticket.highlighted 
                    ? 'bg-gradient-to-b from-dark-800 to-dark-900 border border-gold-500/50 shadow-lg shadow-gold-500/10 -translate-y-4' 
                    : 'bg-dark-800/50 border border-dark-700 hover:border-gold-500/30'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {ticket.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                    Recommended
                  </div>
                )}
                
                <h3 className="font-display text-xl text-dark-50 mb-2">
                  {t.about[ticket.nameKey as keyof typeof t.about]}
                </h3>
                <div className="flex items-baseline gap-1 mb-6 text-gold-400">
                  <span className="text-3xl font-bold font-display">฿</span>
                  <span className="text-4xl font-bold font-display tracking-tight">
                    {t.about[ticket.priceKey as keyof typeof t.about]}
                  </span>
                </div>
                
                <div className="space-y-4 mb-8">
                  {ticket.featuresKeys.map(feature => (
                    <div key={feature} className="flex gap-3 text-sm text-dark-300">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{t.about[feature as keyof typeof t.about]}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  ticket.highlighted 
                    ? 'bg-gold-500 text-dark-900 hover:bg-gold-400' 
                    : 'bg-dark-700 text-dark-100 hover:bg-dark-600'
                }`}>
                  Buy Ticket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Info Section */}
      <section className="bg-dark-950 py-24 border-t border-gold-500/10">
        <div className="section-container">
          <SectionHeader
            eyebrow={t.about.travelEyebrow}
            title={t.about.travelTitle}
          />
          
          <div ref={travelRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {travelModes.map((mode, idx) => (
              <div 
                key={mode.titleKey}
                className="scroll-animate card-luxury text-center group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {mode.icon}
                </div>
                <h3 className="font-display text-lg text-gold-400 mb-3">
                  {t.about[mode.titleKey as keyof typeof t.about]}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {t.about[mode.descKey as keyof typeof t.about]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-dark-900 py-24">
        <div className="section-container max-w-4xl">
          <SectionHeader
            eyebrow={t.about.faqEyebrow}
            title={t.about.faqTitle}
          />
          
          <div ref={faqRef} className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={faq.questionKey}
                className="scroll-animate border border-dark-700 rounded-xl bg-dark-800/30 overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-dark-800/80 transition-colors focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-dark-50 pr-8">
                    {t.about[faq.questionKey as keyof typeof t.about]}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openFaqIndex === index ? 'bg-gold-500/10 rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`accordion-content px-6 text-dark-300 text-sm leading-relaxed ${
                    openFaqIndex === index ? 'open pb-6' : ''
                  }`}
                >
                  {t.about[faq.answerKey as keyof typeof t.about]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
