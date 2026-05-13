"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const tabs = [
  { id: '', label: 'Home' },
  { id: 'project', label: 'Project' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'whitepapers', label: 'Whitepapers' },
]

const SimpleTabs = () => {
  const [activeTab, setActiveTab] = useState('')
  const router = useRouter()

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    router.push(`/${tabId}`)
  }

  return (
    <nav className="flex items-center gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
            activeTab === tab.id
              ? 'text-blue-400 bg-blue-400/10'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default SimpleTabs
