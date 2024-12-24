"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Tab = {
    id: string
    label: string
}

type TabProps = {
    label: string
    isActive: boolean
    onClick: () => void
}

const Tab = ({ label, isActive, onClick }: TabProps) => {
    return (
        <div
            className={`
        ${isActive
                    ? 'border-b-[3px] border-red-500 pb-2 font-semibold '
                    : 'cursor-pointer hover:bg-transparent'
                }
        text-decoration-none mx-2 justify-start rounded-t-md px-2 py-2 text-sm font-medium 
      `}
            onClick={onClick}
        >
            {label}
        </div>
    )
}

type TabsProps = {
    tabs: Tab[]
    activeTab: string
    onTabClick: (tabId: string) =>void
    center?: boolean
}

 const TabsHeader = ({ tabs, activeTab, onTabClick, center }: TabsProps) => {
    return (
        <div className="mb-4 flex w-full">
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    label={tab.label}
                    isActive={activeTab === tab.id}
                    onClick={() => onTabClick(tab.id)}
                />
            ))}
        </div>
    )
}

const SimpleTabs = () => {
    const [activeTab, setActiveTab] = useState('ansub')

       const router  = useRouter()

    const tabs = [
        { id: '', label: 'Home' },
        { id: 'project', label: 'Project' },
        { id: 'profiles', label: 'Profiles' },
       
    ]

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId)
        router.push(`/${tabId}`)
        
    }

    return (
        <div>
            <TabsHeader  tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
    )
}

export default SimpleTabs