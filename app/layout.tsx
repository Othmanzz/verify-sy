import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './components/ClientLayout'

export const viewport = 'width=device-width, initial-scale=1'

export const metadata: Metadata = {
  title: 'تأكد - منصة التحقق من الأخبار',
  description: 'منصة موثوقة للتحقق من صحة الأخبار ومكافحة المعلومات المضللة',
  keywords: 'تحقق, أخبار, حقيقة, معلومات, سوريا',
  authors: [{ name: 'Verify-sy' }],
  robots: 'index, follow',
  openGraph: {
    title: 'تأكد - منصة التحقق من الأخبار',
    description: 'منصة موثوقة للتحقق من صحة الأخبار ومكافحة المعلومات المضللة',
    url: 'https://verify-sy.com',
    siteName: 'تأكد',
    locale: 'ar_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تأكد - منصة التحقق من الأخبار',
    description: 'منصة موثوقة للتحقق من صحة الأخبار ومكافحة المعلومات المضللة',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Tajawal, sans-serif' }} suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}