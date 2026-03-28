export const statusStyles: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  pending: { bg: '#dbeafe', text: '#1e40af', label: 'Open' },
  'in-progress': {
    bg: '#1e40af',
    text: '#ffffff',
    label: 'Awaiting your reply',
  },
  completed: { bg: '#e0f2fe', text: '#0c4a6e', label: 'Solved' },
  rejected: { bg: '#fee2e2', text: '#991b1b', label: 'Rejected' },
}

export function getStatusBadge(status: string) {
  const config = statusStyles[status] || statusStyles.pending
  return {
    display: 'inline-block',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    backgroundColor: config.bg,
    color: config.text,
  }
}
