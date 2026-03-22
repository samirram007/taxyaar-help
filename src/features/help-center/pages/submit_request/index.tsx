import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

import SubmitRequestBreadcrumb from './components/SubmitRequestBreadcrumb'
import SubmitRequestForm from './components/SubmitRequestForm'

function SubmitRequestPage() {
  return (
    <section className="hc-help-center mx-auto w-full max-w-[1160px] px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 border-b border-zinc-200 pb-4 sm:flex-row sm:items-start">
        <SubmitRequestBreadcrumb />

        <div className="relative w-full sm:max-w-[260px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            type="search"
            placeholder="Search"
            className="!h-9 !rounded-full !border !border-zinc-300 !bg-white pl-9 text-sm !shadow-none"
          />
        </div>
      </div>

      <div className="max-w-[620px] !pt-3 pb-6 sm:!pt-4">
        <h1 className="!mb-6 text-[34px] leading-[1.12] font-semibold tracking-[-0.02em] text-zinc-800 sm:!mb-12 sm:text-[36px]">
          Submit a request
        </h1>
        <SubmitRequestForm />
      </div>
    </section>
  )
}

export default SubmitRequestPage