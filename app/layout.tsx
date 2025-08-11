import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}