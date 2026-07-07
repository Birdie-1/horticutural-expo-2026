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
              <h3 className="font-display text-2xl text-gold-400 mb-6">🎟️ อัตราค่าเข้าชมรายวัน (1-Day Pass)</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">✅ บัตรมาตรฐาน (Standard)</h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>บุคคลทั่วไป:</span> <span className="text-dark-50 font-medium">350 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>นักเรียน:</span> <span className="text-dark-50 font-medium">180 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>ผู้สูงอายุ/ผู้มีปัญหาสุขภาพ:</span> <span className="text-dark-50 font-medium">120 บาท</span></li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">⭐ บัตรเฉพาะกลุ่ม (Designated)</h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>บุคคลทั่วไป:</span> <span className="text-dark-50 font-medium">500 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>นักเรียน:</span> <span className="text-dark-50 font-medium">250 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>ผู้สูงอายุ/ผู้มีปัญหาสุขภาพ:</span> <span className="text-dark-50 font-medium">250 บาท</span></li>
                </ul>
              </div>
            </div>

            {/* 3-7 Day Pass */}
            <div className="scroll-animate relative rounded-2xl p-8 bg-dark-800/50 border border-dark-700 hover:border-gold-500/30 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-display text-2xl text-gold-400 mb-6">🎫 บัตรหลายวัน (Multi-Day Pass)</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">📌 บัตร 3 วัน (3-Day Pass)</h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>บุคคลทั่วไป:</span> <span className="text-dark-50 font-medium">790 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>นักเรียน:</span> <span className="text-dark-50 font-medium">410 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>ผู้สูงอายุ/ผู้มีปัญหาสุขภาพ:</span> <span className="text-dark-50 font-medium">270 บาท</span></li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">📌 บัตร 7 วัน (7-Day Pass)</h4>
                <ul className="space-y-3 text-dark-300 text-sm">
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>บุคคลทั่วไป:</span> <span className="text-dark-50 font-medium">1,840 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>นักเรียน:</span> <span className="text-dark-50 font-medium">950 บาท</span></li>
                  <li className="flex justify-between items-center border-b border-dark-700/50 pb-2"><span>ผู้สูงอายุ/ผู้มีปัญหาสุขภาพ:</span> <span className="text-dark-50 font-medium">630 บาท</span></li>
                </ul>
              </div>
            </div>

            {/* Early Bird & Group */}
            <div className="scroll-animate relative rounded-2xl p-8 bg-gradient-to-b from-dark-800 to-dark-900 border border-gold-500/50 shadow-lg shadow-gold-500/10 lg:-translate-y-4 transition-all duration-500" style={{ transitionDelay: '200ms' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-600 to-gold-400 text-dark-900 text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                🔥 Hot Deal
              </div>
              <h3 className="font-display text-2xl text-gold-400 mb-6 mt-2">🔥 Early Bird & แบบกลุ่ม</h3>
              
              <div className="mb-6 bg-gold-500/10 p-4 rounded-xl border border-gold-500/20">
                <h4 className="font-bold text-gold-400 mb-2">🔥 สิทธิพิเศษบัตรล่วงหน้า (Early Bird)</h4>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-dark-100 text-sm">ราคาพิเศษ (ทุกกลุ่ม):</span> 
                  <span className="text-gold-400 font-bold text-2xl">120 บาท</span>
                </div>
                <div className="text-xs text-gold-500/80 bg-dark-900/50 p-2 rounded inline-block w-full text-center">
                  * 1 พฤษภาคม – 30 กันยายน 2569
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-dark-50 mb-3 flex items-center gap-2">👥 อัตราค่าเข้าชมแบบกลุ่ม</h4>
                <ul className="space-y-2 text-dark-300 text-xs">
                  <li className="text-gold-400/80 mb-1 mt-3">🏢 กลุ่มองค์กร</li>
                  <li className="flex justify-between items-center"><span>15–50 คน:</span> <span className="text-dark-50">270 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>51–100 คน:</span> <span className="text-dark-50">250 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>101–200 คน:</span> <span className="text-dark-50">230 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>201 คนขึ้นไป:</span> <span className="text-dark-50">210 บ./คน</span></li>
                  
                  <li className="text-gold-400/80 mb-1 mt-4">🏫 สถานศึกษา</li>
                  <li className="flex justify-between items-center"><span>15–50 คน:</span> <span className="text-dark-50">135 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>51–100 คน:</span> <span className="text-dark-50">125 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>101–200 คน:</span> <span className="text-dark-50">120 บ./คน</span></li>
                  <li className="flex justify-between items-center"><span>201 คนขึ้นไป:</span> <span className="text-dark-50">110 บ./คน</span></li>
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
