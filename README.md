# มหกรรมพืชสวนโลก อุดรธานี 2569 (Udon Thani International Horticultural Expo 2026)

เว็บไซต์สำหรับงานมหกรรมพืชสวนโลก อุดรธานี 2569 เวอร์ชัน Production/Portfolio พัฒนาด้วย React + Vite + TypeScript ภายใต้ธีมการออกแบบ Dark Luxury Editorial (ดำ-ทอง)

## 🚀 Tech Stack

- **Framework**: Vite 6 + React 19
- **Language**: TypeScript (Strict Mode)
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 (Custom Theme & Animations)
- **i18n**: Custom React Context Hook (TH / EN / ZH)
- **Icons**: Heroicons (SVG inline)

## ✨ Features

- **Dark Luxury Editorial Design**: ดีไซน์ระดับพรีเมียม โทนสีดำ-ทอง พร้อมฟอนต์ Playfair Display
- **3-Language Support**: รองรับภาษาไทย, อังกฤษ, และจีน (Simplified) พร้อมระบบบันทึกภาษาลง localStorage
- **Scroll Reveal Animations**: แอนิเมชันเปิดตัวเนื้อหาขณะเลื่อนหน้าจอด้วย Intersection Observer
- **Responsive Layout**: รองรับการแสดงผลทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- **Interactive Gallery**: ระบบแกลเลอรีแบบ Grid Masonry พร้อม Lightbox Modal
- **Interactive Map**: แผนที่ฝังจาก OpenStreetMap แบบ Custom CSS Filter

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, ScrollToTop
│   └── ui/           # SectionHeader, CountdownTimer
├── hooks/            # useLanguage, useCountdown, useScrollAnimation
├── i18n/             # Translation files (th, en, zh) and Context Provider
├── pages/            # HomePage, AboutPage, ExhibitionPage, GalleryPage, MapPage
├── styles/           # Tailwind CSS v4 directives & Custom Base/Components
├── types/            # TypeScript Interfaces for components and i18n
├── App.tsx           # Router and Layout wrapper
└── main.tsx          # Application Entry Point
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ หรือสูงกว่า
- npm 9+ หรือสูงกว่า

### Installation

1. ติดตั้ง Dependencies
```bash
npm install
```

2. รัน Development Server
```bash
npm run dev
```

3. Type Checking
```bash
npx tsc --noEmit
```

4. สร้าง Production Build
```bash
npm run build
```

## 🌐 Deployment
โปรเจกต์นี้ตั้งค่าให้พร้อมสำหรับการ Deploy ขึ้น **Vercel** โดยสามารถใช้วิธีนำเข้าผ่าน GitHub หรือใช้ Vercel CLI:

```bash
npm i -g vercel
vercel
```

---
*Created for Udon Thani International Horticultural Expo 2026 Portfolio.*
