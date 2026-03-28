import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface RequestsFilterTabsProps {
  activeTab: 'my-requests' | 'cc-requests'
  onTabChange: (tab: 'my-requests' | 'cc-requests') => void
  searchQuery: string
  onSearchChange: (query: string) => void
  statusFilter: string
  onStatusChange: (status: string) => void
}

export function RequestsFilterTabs({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
}: RequestsFilterTabsProps) {
  return (
    <div>
      <div
        className="border-b border-gray-200"
        style={{ marginBottom: '1.5rem' }}
      >
        <div className="flex gap-8" style={{ paddingBottom: '1rem' }}>
          <button
            onClick={() => onTabChange('my-requests')}
            className={`pb-2 text-sm font-medium transition-all ${
              activeTab === 'my-requests'
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={{
              borderBottom:
                activeTab === 'my-requests' ? '3px solid #1e40af' : 'none',
              paddingBottom: '0.5rem !important',
              color: activeTab === 'my-requests' ? '#1e40af' : '#4b5563',
            }}
          >
            My requests
          </button>
          <button
            onClick={() => onTabChange('cc-requests')}
            className={`pb-2 text-sm font-medium transition-all ${
              activeTab === 'cc-requests'
                ? 'text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            style={{
              borderBottom:
                activeTab === 'cc-requests' ? '3px solid #1e40af' : 'none',
              paddingBottom: '0.5rem !important',
              color: activeTab === 'cc-requests' ? '#1e40af' : '#4b5563',
            }}
          >
            Requests I'm CC'd on
          </button>
        </div>
      </div>

      {/* searcing and filtering */}
      <div
        style={{
          marginBottom: '1.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: 1, minWidth: '300px' }}>
          <Input
            placeholder="Search requests"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full"
            style={{
              padding: '0.75rem !important',
              borderColor: '#1e40af',
              borderWidth: '1px',
            }}
          />
        </div>
        <div style={{ minWidth: '200px' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#1f2937',
            }}
          >
            Status:
          </label>
          <Select value={statusFilter} onValueChange={onStatusChange}>
            <SelectTrigger
              style={{
                padding: '0.75rem !important',
                borderColor: '#1e40af',
                borderWidth: '1px',
                width: '100%',
              }}
            >
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="pending">Open</SelectItem>
              <SelectItem value="in-progress">Awaiting your reply</SelectItem>
              <SelectItem value="completed">Solved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
