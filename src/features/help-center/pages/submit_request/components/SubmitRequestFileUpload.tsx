import type { ChangeEvent } from 'react'

type SubmitRequestFileUploadProps = {
  inputId: string
  fileName: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function SubmitRequestFileUpload({ inputId, fileName, onChange }: SubmitRequestFileUploadProps) {
  return (
    <div className="rounded-[2px] border border-zinc-300 bg-white px-3 py-2.5 text-center">
      <input
        id={inputId}
        type="file"
        className="sr-only"
        onChange={onChange}
      />
      <label htmlFor={inputId} className="block cursor-pointer text-xs leading-4">
        <span className="font-medium text-blue-600">Add file</span>
        <span className="pl-1 text-zinc-500">or drop files here</span>
      </label>
      {fileName ? (
        <p className="mt-1 text-[11px] text-zinc-500">Selected: {fileName}</p>
      ) : null}
    </div>
  )
}

export default SubmitRequestFileUpload
