'use client'

import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ReportModal from './ReportModal'

interface ClientLayoutProps {
  children: React.ReactNode
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setIsSubmissionModalOpen={setIsSubmissionModalOpen} />
      <main>{children}</main>
      <Footer />
      <ReportModal 
        isOpen={isSubmissionModalOpen} 
        onClose={() => setIsSubmissionModalOpen(false)} 
      />
    </div>
  )
}

export default ClientLayout