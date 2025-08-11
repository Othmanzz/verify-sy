import React from 'react'

interface VerdictBadgeProps {
  verdict: string
  size?: 'sm' | 'md' | 'lg'
}

const VerdictBadge: React.FC<VerdictBadgeProps> = ({ verdict, size = 'md' }) => {
  const config = {
    'true': { bg: 'bg-success-100', text: 'text-success-700', icon: '✓', label: 'صحيح' },
    'false': { bg: 'bg-danger-100', text: 'text-danger-700', icon: '✗', label: 'احتيال' },
    'misleading': { bg: 'bg-warning-100', text: 'text-warning-700', icon: '⚠', label: 'عبث' },
    'unproven': { bg: 'bg-gray-100', text: 'text-gray-700', icon: '?', label: 'إرباك' },
    'confirmed': { bg: 'bg-info-100', text: 'text-info-700', icon: '✓', label: 'مؤكد' }
  }[verdict] || { bg: 'bg-gray-100', text: 'text-gray-700', icon: '?', label: 'غير محدد' }

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium font-arabic ${config.bg} ${config.text} ${sizes[size]}`}>
      <span className="font-bold">{config.icon}</span>
      {config.label}
    </span>
  )
}

export default VerdictBadge