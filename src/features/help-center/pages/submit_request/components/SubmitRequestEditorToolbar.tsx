import { Bold, Code2, Italic, Link2, List, ListOrdered, Quote, Underline } from 'lucide-react'

const editorActions = [
  { label: 'Bold', icon: Bold },
  { label: 'Italic', icon: Italic },
  { label: 'Underline', icon: Underline },
  { label: 'List', icon: List },
  { label: 'Numbered List', icon: ListOrdered },
  { label: 'Code', icon: Code2 },
  { label: 'Link', icon: Link2 },
  { label: 'Quote', icon: Quote },
]

function SubmitRequestEditorToolbar() {
  return (
    <div className="flex h-8 flex-wrap items-center gap-1 border-b border-zinc-200 bg-white px-2">
      {editorActions.map(({ label, icon: Icon }) => (
        <button
          key={label}
          type="button"
          title={label}
          className="inline-flex h-6 w-6 items-center justify-center rounded text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
          aria-label={label}
        >
          <Icon className="h-3 w-3" />
        </button>
      ))}
    </div>
  )
}

export default SubmitRequestEditorToolbar
