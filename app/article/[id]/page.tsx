import { notFound } from 'next/navigation'
import { mockFactChecks } from '../../lib/mockData'
import ArticlePage from '../../components/ArticlePage'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return mockFactChecks.map((article) => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params
  const article = mockFactChecks.find(article => article.id === resolvedParams.id)
  
  if (!article) {
    return {
      title: 'Article Not Found - تأكد',
    }
  }

  return {
    title: `${article.title} - تأكد`,
    description: article.summary,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: `${article.title} - تأكد`,
      description: article.summary,
      url: `https://verify-sy.com/article/${article.id}`,
      siteName: 'تأكد',
      locale: 'ar_AR',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: article.image,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} - تأكد`,
      description: article.summary,
      images: [article.image],
    },
  }
}

export default async function ArticlePageRoute({ params }: PageProps) {
  const resolvedParams = await params
  const article = mockFactChecks.find(article => article.id === resolvedParams.id)

  if (!article) {
    notFound()
  }

  return <ArticlePage article={article} />
}