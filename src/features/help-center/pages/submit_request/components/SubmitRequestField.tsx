import type { PropsWithChildren, ReactNode } from 'react'
import { Label } from '@/components/ui/label'

type SubmitRequestFieldProps = PropsWithChildren<{
  label: string
  htmlFor?: string
  hint?: ReactNode
  className?: string
}>

function SubmitRequestField({
  label,
  htmlFor,
  hint,
  className,
  children,
}: SubmitRequestFieldProps) {
  return (
    <div className={className ?? '!mb-6'}>
      <Label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[12px] font-medium text-zinc-700"
      >
        {label}
      </Label>
      {children}
      {hint ? <p className="mt-1 text-[11px] text-zinc-500">{hint}</p> : null}
    </div>
  )
}

export default SubmitRequestField
