'use client'

import React, { useState, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const imgElement = document.getElementById(`img-${src}`)
    if (imgElement) observer.observe(imgElement)

    return () => observer.disconnect()
  }, [src])

  return (
    <div id={`img-${src}`} className={`${className} ${!loaded ? 'bg-gray-200 animate-pulse' : ''}`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}

export default LazyImage