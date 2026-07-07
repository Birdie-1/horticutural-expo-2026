// ============================================
// Shared TypeScript interfaces for Expo 2026
// ============================================

export type Language = 'th' | 'en' | 'zh';

export interface NavItem {
  key: string;
  path: string;
}

export interface ZoneInfo {
  id: number;
  nameKey: string;
  descKey: string;
  icon: string;
  color: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface TicketTier {
  nameKey: string;
  priceKey: string;
  featuresKeys: string[];
  highlighted?: boolean;
}

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

import type { ReactNode } from 'react';

export interface TransportMode {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
}

// ============================================
// Translation types
// ============================================

export interface NavTranslations {
  home: string;
  about: string;
  exhibition: string;
  gallery: string;
  map: string;
}

export interface HomeTranslations {
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroCta: string;
  countdownTitle: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  infoDate: string;
  infoDateValue: string;
  infoLocation: string;
  infoLocationValue: string;
  infoZones: string;
  infoZonesValue: string;
  infoVisitors: string;
  infoVisitorsValue: string;
  zonesTitle: string;
  zonesEyebrow: string;
  zonesSubtitle: string;
  galleryTitle: string;
  galleryEyebrow: string;
  gallerySubtitle: string;
  galleryViewAll: string;
}

export interface ZoneTranslations {
  zone1Name: string;
  zone1Desc: string;
  zone1Detail: string;
  zone2Name: string;
  zone2Desc: string;
  zone2Detail: string;
  zone3Name: string;
  zone3Desc: string;
  zone3Detail: string;
  zone4Name: string;
  zone4Desc: string;
  zone4Detail: string;
  zone5Name: string;
  zone5Desc: string;
  zone5Detail: string;
  zone6Name: string;
  zone6Desc: string;
  zone6Detail: string;
}

export interface AboutTranslations {
  heroTitle: string;
  heroSubtitle: string;
  historyEyebrow: string;
  historyTitle: string;
  historyP1: string;
  historyP2: string;
  historyP3: string;
  ticketsEyebrow: string;
  ticketsTitle: string;
  ticketsSubtitle: string;
  ticket1DayTitle: string;
  ticket1DayStandard: string;
  ticket1DayDesignated: string;
  ticketAdult: string;
  ticketStudent: string;
  ticketSenior: string;
  ticketMultiDayTitle: string;
  ticket3Day: string;
  ticket7Day: string;
  ticketHotDealTitle: string;
  ticketEarlyBird: string;
  ticketEarlyBirdPrice: string;
  ticketEarlyBirdNote: string;
  ticketGroupTitle: string;
  ticketGroupOrg: string;
  ticketGroupEdu: string;
  ticketGroupSize1: string;
  ticketGroupSize2: string;
  ticketGroupSize3: string;
  ticketGroupSize4: string;
  ticketCurrency: string;
  ticketCurrencyShort: string;
  travelEyebrow: string;
  travelTitle: string;
  travelCar: string;
  travelCarDesc: string;
  travelFlight: string;
  travelFlightDesc: string;
  travelTrain: string;
  travelTrainDesc: string;
  travelBus: string;
  travelBusDesc: string;
  faqEyebrow: string;
  faqTitle: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
  faq3Q: string;
  faq3A: string;
  faq4Q: string;
  faq4A: string;
  faq5Q: string;
  faq5A: string;
  faq6Q: string;
  faq6A: string;
}

export interface ExhibitionTranslations {
  heroTitle: string;
  heroSubtitle: string;
  zonesEyebrow: string;
  zonesTitle: string;
  zonesSubtitle: string;
  activitiesEyebrow: string;
  activitiesTitle: string;
  activitiesSubtitle: string;
  activity1: string;
  activity1Desc: string;
  activity2: string;
  activity2Desc: string;
  activity3: string;
  activity3Desc: string;
  activity4: string;
  activity4Desc: string;
  galleryEyebrow: string;
  galleryTitle: string;
}

export interface GalleryTranslations {
  heroTitle: string;
  heroSubtitle: string;
  filterAll: string;
  filterZones: string;
  filterActivities: string;
  filterNight: string;
  filterAerial: string;
  close: string;
  prev: string;
  next: string;
}

export interface MapTranslations {
  heroTitle: string;
  heroSubtitle: string;
  mapEyebrow: string;
  mapTitle: string;
  legendEyebrow: string;
  legendTitle: string;
  travelEyebrow: string;
  travelTitle: string;
  travelSubtitle: string;
  fromBangkok: string;
  fromBangkokDesc: string;
  fromKhonKaen: string;
  fromKhonKaenDesc: string;
  fromNongKhai: string;
  fromNongKhaiDesc: string;
}

export interface FooterTranslations {
  about: string;
  aboutDesc: string;
  quickLinks: string;
  contact: string;
  address: string;
  email: string;
  phone: string;
  copyright: string;
  followUs: string;
}

export interface CommonTranslations {
  learnMore: string;
  viewAll: string;
  backToTop: string;
  loading: string;
}

export interface Translations {
  nav: NavTranslations;
  home: HomeTranslations;
  zones: ZoneTranslations;
  about: AboutTranslations;
  exhibition: ExhibitionTranslations;
  gallery: GalleryTranslations;
  map: MapTranslations;
  footer: FooterTranslations;
  common: CommonTranslations;
}
