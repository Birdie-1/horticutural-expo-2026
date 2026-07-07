import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation, useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import type { TransportMode, FAQItem } from '@/types';

export default function AboutPage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  const historyRef = useScrollAnimationMultiple();
  const ticketsRef = useScrollAnimationMultiple();
  const travelRef = useScrollAnimationMultiple();
  const faqRef = useScrollAnimationMultiple();



  const travelModes: TransportMode[] = [
    { 
      // Car Icon
      icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, 
      titleKey: 'travelCar', 
      descKey: 'travelCarDesc' 
    },
    { 
      // Airplane Icon
      icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.1 11.8l3.7-1 4.5-6.5h3.3l-2.8 6.5h4l2.4-2h2.5l-1.4 4.5 1.4 4.5h-2.5l-2.4-2h-4l2.8 6.5h-3.3l-4.5-6.5-3.7-1c-1.1-.3-1.1-1.7 0-2z" /></svg>, 
      titleKey: 'travelFlight', 
      descKey: 'travelFlightDesc' 
    },
    { 
      // Train Icon
      icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M10 21v-3M14 21v-3M4 14l2-8h12l2 8v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm3-4h10M8 14v1m8-1v1" /></svg>, 
      titleKey: 'travelTrain', 
      descKey: 'travelTrainDesc' 
    },
    { 
      // Bus Icon
      icon: <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M4 16h16M4 16V6a2 2 0 012-2h12a2 2 0 012 2v10M6 10h12M8 18v2m8-2v2" /></svg>, 
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
           <img src="images/hero_about_1783226591930.jpg" alt="About" className="absolute inset-0 w-full h-full object-cover opacity-40" />
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
            
            <div className="scroll-animate-right relative h-[500px] rounded-2xl overflow-hidden glass-card p-0">
              <img src="images/history_about_1783312086157.jpg" alt="Udon Thani History" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
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
          
          <div ref={ticketsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {/* 1-Day Pass */}
            <div className="scroll-animate relative rounded-2xl p-8 bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 transition-all duration-500">
              <h3 className="font-display text-2xl text-gold-400 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
                {t.about.ticket1DayTitle}
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {t.about.ticket1DayStandard}
                </h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketAdult}</span> <span className="text-dark-50 font-medium">350 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketStudent}</span> <span className="text-dark-50 font-medium">180 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketSenior}</span> <span className="text-dark-50 font-medium">120 {t.about.ticketCurrency}</span></li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  {t.about.ticket1DayDesignated}
                </h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketAdult}</span> <span className="text-dark-50 font-medium">500 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketStudent}</span> <span className="text-dark-50 font-medium">250 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketSenior}</span> <span className="text-dark-50 font-medium">250 {t.about.ticketCurrency}</span></li>
                </ul>
              </div>
            </div>

            {/* 3-7 Day Pass */}
            <div className="scroll-animate relative rounded-2xl p-8 bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-display text-2xl text-gold-400 mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                {t.about.ticketMultiDayTitle}
              </h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {t.about.ticket3Day}
                </h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketAdult}</span> <span className="text-dark-50 font-medium">790 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketStudent}</span> <span className="text-dark-50 font-medium">410 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketSenior}</span> <span className="text-dark-50 font-medium">270 {t.about.ticketCurrency}</span></li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {t.about.ticket7Day}
                </h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketAdult}</span> <span className="text-dark-50 font-medium">1,840 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketStudent}</span> <span className="text-dark-50 font-medium">950 {t.about.ticketCurrency}</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>{t.about.ticketSenior}</span> <span className="text-dark-50 font-medium">630 {t.about.ticketCurrency}</span></li>
                </ul>
              </div>
            </div>

            {/* Early Bird & Group */}
            <div className="scroll-animate relative rounded-2xl p-8 bg-gradient-to-b from-dark-800 to-dark-900 border border-gold-500/50 shadow-lg shadow-gold-500/10 lg:-translate-y-4 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 text-xs font-bold flex items-center gap-1 uppercase tracking-wider py-1 px-4 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
                Hot Deal
              </div>
              <h3 className="font-display text-2xl text-gold-400 mb-6 mt-2 flex items-center gap-3">
                <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
                {t.about.ticketHotDealTitle}
              </h3>
              
              <div className="mb-6 bg-gold-500/10 p-4 rounded-xl border border-gold-500/20">
                <h4 className="font-bold text-gold-400 mb-2 flex items-center gap-2">
                  {t.about.ticketEarlyBird}
                </h4>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-dark-100 text-sm">{t.about.ticketEarlyBirdPrice}</span> 
                  <span className="text-gold-400 font-bold text-2xl">120 {t.about.ticketCurrency}</span>
                </div>
                <div className="text-xs text-gold-500/80 bg-dark-900/50 p-2 rounded inline-block w-full text-center">
                  {t.about.ticketEarlyBirdNote}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  {t.about.ticketGroupTitle}
                </h4>
                <ul className="space-y-2 text-dark-300 text-xs">
                  <li className="text-gold-400/80 mb-1 mt-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    {t.about.ticketGroupOrg}
                  </li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize1}</span> <span className="text-dark-50">270 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize2}</span> <span className="text-dark-50">250 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize3}</span> <span className="text-dark-50">230 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize4}</span> <span className="text-dark-50">210 {t.about.ticketCurrencyShort}</span></li>
                  
                  <li className="text-gold-400/80 mb-1 mt-4 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                    {t.about.ticketGroupEdu}
                  </li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize1}</span> <span className="text-dark-50">135 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize2}</span> <span className="text-dark-50">125 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize3}</span> <span className="text-dark-50">120 {t.about.ticketCurrencyShort}</span></li>
                  <li className="flex justify-between items-center pl-5"><span>{t.about.ticketGroupSize4}</span> <span className="text-dark-50">110 {t.about.ticketCurrencyShort}</span></li>
                </ul>
              </div>
            </div>
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
