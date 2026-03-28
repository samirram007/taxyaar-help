import { useState } from 'react'
import { RequestsHeader } from './requests-header'
import { RequestsFilterTabs } from './requests-filter-tabs'
import { RequestsTable } from './requests-table'

interface Request {
  id: string
  title: string
  status: 'pending' | 'in-progress' | 'completed' | 'rejected'
  createdAt: string
  updatedAt: string
  category?: string
}

const mockRequests: Request[] = [
  {
    id: '1',
    title: 'Tax Return Filing Request',
    status: 'pending',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    category: 'tax-return',
  },
  {
    id: '2',
    title: 'Document Verification',
    status: 'in-progress',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18',
    category: 'verification',
  },
  {
    id: '3',
    title: 'Tax Consultation',
    status: 'completed',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-12',
    category: 'consultation',
  },
]

const mockCCRequests: Request[] = [
  {
    id: '4',
    title: 'Corporate Tax Planning',
    status: 'in-progress',
    createdAt: '2024-01-14',
    updatedAt: '2024-01-17',
    category: 'planning',
  },
]

export function RequestsPage() {
  const [activeTab, setActiveTab] = useState<'my-requests' | 'cc-requests'>(
    'my-requests',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('any')

  const currentRequests =
    activeTab === 'my-requests' ? mockRequests : mockCCRequests

  const filteredRequests = currentRequests.filter((request) => {
    const matchesSearch = request.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesStatus =
      statusFilter === 'any' || request.status === statusFilter
    return matchesSearch && matchesStatus
  })
  return (
    <div style={{ padding: '2rem 0' }}>
      <RequestsHeader />

      <RequestsFilterTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <RequestsTable
        filteredRequests={filteredRequests}
        emptyMessage={
          activeTab === 'my-requests'
            ? 'No requests found.'
            : "You are not CC'd on any requests."
        }
      />
    </div>
  )
}
