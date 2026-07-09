import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DeveloperPage: React.FC = () => {
  const { t } = useLanguage();
  useScrollAnimation();

  return (
    <div className="pt-24 bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-700/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title={t.developer.heroTitle} 
            subtitle={t.developer.heroSubtitle} 
            eyebrow="Portfolio"
          />

          <div className="max-w-5xl mx-auto mt-16 bg-dark-800/40 border border-dark-700 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
              
              {/* Photo Column */}
              <div className="lg:col-span-2 relative h-[500px] md:h-auto overflow-hidden group">
                <img 
                  src="images/profile.jpg" 
                  alt="Naruebordee Boonma" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x800/1a1a1a/d4af37?text=Profile+Photo\\n(Add+images/profile.jpg)';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-3xl text-gold-400 mb-2">{t.developer.nameValue}</h3>
                  <p className="text-dark-300 font-medium tracking-wide uppercase text-sm">{t.developer.roleValue}</p>
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-3 p-8 lg:p-14 flex flex-col justify-center">
                
                <div className="space-y-10">
                  {/* Education */}
                  <div className="scroll-animate">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500/80 mb-3 font-semibold">
                      {t.developer.educationKey}
                    </h4>
                    <p className="text-dark-50 text-xl leading-relaxed font-display">
                      {t.developer.educationValue}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="scroll-animate" style={{ transitionDelay: '100ms' }}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500/80 mb-4 font-semibold">
                      {t.developer.techStackKey}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite 6', 'React Router v7'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-dark-900 border border-dark-600 rounded-full text-sm text-gold-400/90 shadow-inner">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Links */}
                  <div className="scroll-animate" style={{ transitionDelay: '200ms' }}>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500/80 mb-5 font-semibold">
                      {t.developer.contactKey}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://github.com/Birdie-1" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 px-6 py-3.5 bg-dark-900 border border-dark-600 hover:border-gold-500 hover:text-gold-400 text-dark-50 rounded-xl transition-all duration-300 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{t.developer.github}</span>
                      </a>
                      
                      <a 
                        href="mailto:narueborde@gmail.com" 
                        className="flex items-center justify-center gap-3 px-6 py-3.5 bg-dark-900 border border-dark-600 hover:border-gold-500 hover:text-gold-400 text-dark-50 rounded-xl transition-all duration-300 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="font-medium">{t.developer.email}</span>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperPage;
