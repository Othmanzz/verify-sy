import { redirect } from 'next/navigation'

export const metadata = {
  title: 'مقال - تأكد',
  description: 'اقرأ المقالات المُحققة والتقارير التفصيلية من منصة تأكد',
}

export default function Article() {
  redirect('/')
}