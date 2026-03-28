import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { statusStyles } from '../utils/status-badge'

interface Request {
  id: string
  title: string
  status: 'pending' | 'in-progress' | 'completed' | 'rejected'
  createdAt: string
  updatedAt: string
  category?: string
}

interface RequestsTableProps {
  filteredRequests: Request[]
  emptyMessage: string
}

export function RequestsTable({
  filteredRequests,
  emptyMessage,
}: RequestsTableProps) {
  const getStatusBadge = (status: string) => {
    const config = statusStyles[status] || statusStyles.pending
    return (
      <span
        style={{
          display: 'inline-block',
          padding: '0.375rem 0.75rem',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          backgroundColor: config.bg,
          color: config.text,
        }}
      >
        {config.label}
      </span>
    )
  }

  if (filteredRequests.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          border: '1px dashed #ccc',
          borderRadius: '0.5rem',
        }}
      >
        <p style={{ color: '#666' }}>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div
      style={{
        overflowX: 'auto',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
      }}
    >
      <Table>
        <TableHeader>
          <TableRow
            style={{
              backgroundColor: '#e0f2fe',
              borderBottom: '2px solid #1e40af',
            }}
          >
            <TableHead
              style={{
                padding: '1rem !important',
                color: '#1e40af',
                fontWeight: '600',
              }}
            >
              Request Title
            </TableHead>
            <TableHead
              style={{
                padding: '1rem !important',
                color: '#1e40af',
                fontWeight: '600',
              }}
            >
              Status
            </TableHead>
            <TableHead
              style={{
                padding: '1rem !important',
                color: '#1e40af',
                fontWeight: '600',
              }}
            >
              Created Date
            </TableHead>
            <TableHead
              style={{
                padding: '1rem !important',
                color: '#1e40af',
                fontWeight: '600',
              }}
            >
              Last Updated
            </TableHead>
            <TableHead
              style={{
                padding: '1rem !important',
                color: '#1e40af',
                fontWeight: '600',
              }}
            >
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.map((request) => (
            <TableRow key={request.id}>
              <TableCell
                style={{
                  padding: '1rem !important',
                  fontWeight: '500',
                }}
              >
                {request.title}
              </TableCell>
              <TableCell style={{ padding: '1rem !important' }}>
                {getStatusBadge(request.status)}
              </TableCell>
              <TableCell
                style={{
                  padding: '1rem !important',
                  color: '#666',
                  fontSize: '0.875rem',
                }}
              >
                {new Date(request.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell
                style={{
                  padding: '1rem !important',
                  color: '#666',
                  fontSize: '0.875rem',
                }}
              >
                {new Date(request.updatedAt).toLocaleDateString()}
              </TableCell>
              <TableCell style={{ padding: '1rem !important' }}>
                <button
                  className="text-blue-600 hover:underline"
                  style={{ fontSize: '0.875rem' }}
                >
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
