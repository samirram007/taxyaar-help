import { Image, Link2, List, ListOrdered, Quote } from 'lucide-react'

const editorActions = [
  { label: 'Text', type: 'text', content: 'T' },
  { label: 'Bold', type: 'text', content: 'B' },
  { label: 'Italic', type: 'text', content: '/' },
  { label: 'Bullet list', type: 'icon', icon: List },
  { label: 'Numbered list', type: 'icon', icon: ListOrdered },
  { label: 'Image', type: 'icon', icon: Image },
  { label: 'Link', type: 'icon', icon: Link2 },
  { label: 'Quote', type: 'icon', icon: Quote },
] as const

function SubmitRequestEditorToolbar() {
  return (
    <div className="flex h-8 flex-wrap items-center gap-1 border-b border-zinc-200 bg-[#fafafa] px-2!">
      {editorActions.map((action) => (
        <button
          key={action.label}
          type="button"
          title={action.label}
          className="inline-flex h-6 min-w-6 items-center justify-center rounded px-1! text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
          aria-label={action.label}
        >
          {action.type === 'text' ? (
            <span className="text-[11px]! font-semibold leading-none">
              {action.content}
            </span>
          ) : (
            <action.icon className="h-3 w-3" />
          )}
        </button>
      ))}
    </div>
  )
}

export default SubmitRequestEditorToolbar
