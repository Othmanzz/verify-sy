'use client'

import React from 'react'
import { User, Eye, Clock, Star } from 'lucide-react'
import { FactCheck } from '../types'
import LazyImage from './LazyImage'

interface CompactCardProps {
  factCheck: FactCheck
  onClick: () => void
  featured?: boolean
}

const CompactCard: React.FC<CompactCardProps> = ({ factCheck, onClick, featured = false }) => {
  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case 'true':
        return { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500', label: 'صحيح' }
      case 'false':
        return { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500', label: 'احتيال' }
      case 'misleading':
        return { bg: 'bg-orange-100', text: 'text-orange-800', dot: 'bg-orange-500', label: 'عبث' }
      case 'unproven':
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'إرباك' }
      case 'confirmed':
        return { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500', label: 'مؤكد' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'غير محدد' }
    }
  }

  const verdictConfig = getVerdictConfig(factCheck.verdict)

  return (
    <article 
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer relative"
      onClick={onClick}
    >
      {/* Image Section - Absolutely Positioned Right */}
      <div className="absolute top-6 right-6 w-24 h-24 flex-shrink-0">
        <LazyImage 
          src={factCheck.image} 
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        {featured && (
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-1 rounded-full text-xs font-bold shadow-lg">
            <Star className="w-3 h-3 fill-current" />
          </div>
        )}
      </div>
      
      {/* Content Section - Full Width with Right Margin */}
      <div className="pr-28">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${verdictConfig.bg}`}>
              <div className={`w-2 h-2 rounded-full ${verdictConfig.dot}`}></div>
              <span className={`text-sm font-medium font-arabic ${verdictConfig.text}`}>
                {verdictConfig.label}
              </span>
            </div>
            <span className="text-xs text-gray-500 font-arabic">
              {factCheck.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-arabic-heading line-clamp-2">
            {factCheck.title}
          </h3>
          
          {/* Summary */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-arabic">
            {factCheck.summary}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="font-arabic">{factCheck.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="font-arabic">{factCheck.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{factCheck.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
    </article>
  )
}

export default CompactCard