'use client'

import { useFormContext } from 'react-hook-form'
import type { ChangeEvent } from 'react'

type Props = {
  name: string
  inputId: string
}

function SubmitRequestFileUpload({ name, inputId }: Props) {
  const { setValue, watch } = useFormContext()

  const file: File | undefined = watch(name)
  const fileName = file?.name || ''

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    setValue(name, selectedFile, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const handleRemove = () => {
    setValue(name, undefined, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  return (
    <div className="rounded-[2px] border border-zinc-300 bg-white px-3! py-2.5! text-center">
      <input
        id={inputId}
        type="file"
        className="sr-only"
        onChange={handleChange}
      />

      <label
        htmlFor={inputId}
        className="block cursor-pointer text-[12px]! leading-5"
      >
        <span className="font-medium text-blue-600">Add file</span>
        <span className="pl-1! text-zinc-500">or drop files here</span>
      </label>

      {fileName && (
        <div className="mt-1! flex items-center justify-center gap-2 text-[11px]! text-zinc-500">
          <span>Selected: {fileName}</span>

          <button
            type="button"
            onClick={handleRemove}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}

export default SubmitRequestFileUpload
