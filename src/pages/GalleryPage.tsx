import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { GalleryImage } from '@/types';

const mockImages: GalleryImage[] = Array.from({ length: 12 }).map((_, i) => {
  const categories = ['Zones', 'Activities', 'Night', 'Aerial'];
  const category = categories[i % categories.length]!;
  
  // Real images from generation
  const realImages = [
    'images/hero_home_real_1783313355094.jpg',
    'images/hero_about_1783226591930.jpg',
    'images/hero_exhibition_real_1783313395889.jpg',
    'images/hero_gallery_1783226617059.jpg',
    'images/hero_map_real_1783313363882.jpg',
    'images/zone_royal_1783225575801.jpg',
    'images/zone_cactus_real_1783313373299.jpg',
    'images/zone_future_1783226646480.jpg',
    'images/zone_cultural_1783226656775.jpg',
    'images/zone_dino_real_1783313386013.jpg',
    'images/zone_night_1783226685334.jpg'
  ];
  const imageSrc = realImages[i % realImages.length]!;

  return {
    id: i + 1,
    src: imageSrc, // Using real image src
    alt: `Gallery image ${i + 1}`,
    category
  };
});

export default function GalleryPage() {
  const { t } = useLanguage();
  const heroRef = useScrollAnimation();
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'All', label: t.gallery.filterAll },
    { id: 'Zones', label: t.gallery.filterZones },
    { id: 'Activities', label: t.gallery.filterActivities },
    { id: 'Night', label: t.gallery.filterNight },
    { id: 'Aerial', label: t.gallery.filterAerial },
  ];

  const filteredImages = activeFilter === 'All' 
    ? mockImages 
    : mockImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ''; // Unlock scroll
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <main>
      {/* Sub-hero */}
      <section className="sub-hero">
        <div className="sub-hero-bg bg-dark-950">
           <img src="images/hero_gallery_1783226617059.jpg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-50" />
           <div className="absolute inset-0 bg-dark-900/40" />
        </div>
        <div ref={heroRef} className="scroll-animate relative z-10 px-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-4">
            {t.gallery.heroTitle}
          </h1>
          <p className="text-dark-200 text-lg max-w-2xl mx-auto">
            {t.gallery.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-dark-950 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gold-500 text-dark-900 shadow-md shadow-gold-500/20'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-gold-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid Layout - Masonry style approximation with CSS Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[250px]">
            {filteredImages.map((image, index) => {
              // Add some visual variety to grid spans
              const isLarge = index % 5 === 0;
              const isWide = index % 7 === 0;
              
              let spanClass = '';
              if (isLarge) spanClass = 'sm:col-span-2 sm:row-span-2';
              else if (isWide) spanClass = 'sm:col-span-2';

              return (
                <div 
                  key={image.id}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer ${spanClass} bg-dark-800`}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image (Real) */}
                  <img src={image.src} alt={image.alt} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                       <svg className="w-10 h-10 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                       </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredImages.length === 0 && (
             <div className="text-center py-20 text-dark-400">
                No images found for this category.
             </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-dark-950/98 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-dark-300 hover:text-gold-400 transition-colors p-2"
            onClick={closeLightbox}
            aria-label={t.gallery.close}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-dark-300 hover:text-gold-400 transition-colors"
            onClick={prevImage}
            aria-label={t.gallery.prev}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-dark-300 hover:text-gold-400 transition-colors"
            onClick={nextImage}
            aria-label={t.gallery.next}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Main Image Area */}
          <div className="w-[85vw] h-[80vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={filteredImages[lightboxIndex!]!.src} alt="Lightbox" className="w-full max-w-5xl max-h-[70vh] object-contain rounded-lg shadow-2xl" />
            <div className="mt-6 text-gold-400 font-medium">
               {filteredImages[lightboxIndex!]!.category} • {lightboxIndex! + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
