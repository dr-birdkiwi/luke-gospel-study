import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '在福音的路上｜路加福音小组查经',
  description: '为隔周小组预备的路加福音逐章查经空间：逐段阅读、背景串联与信仰生活回应。',
  icons: {
    icon: 'favicon.svg',
    shortcut: 'favicon.svg',
    apple: 'favicon.svg',
  },
  openGraph: {
    title: '在福音的路上｜路加福音小组查经',
    description: '逐章阅读路加福音，连接经文背景、整本圣经与当下信仰生活。',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '在福音的路上｜路加福音小组查经', description: '逐章读经、背景串联与信仰回应。' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
