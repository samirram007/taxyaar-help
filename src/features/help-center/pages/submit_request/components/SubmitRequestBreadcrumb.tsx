import { Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function SubmitRequestBreadcrumb() {
  return (
    <Breadcrumb className="mb-2! sm:mb-0!">
      <BreadcrumbList className="text-[11px]! text-zinc-500">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to="/help-center"
              className="font-medium text-sky-700 hover:text-sky-800"
            >
              TAXYAAR Help Center
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-zinc-400" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[11px]! text-zinc-500">
            Submit a request
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default SubmitRequestBreadcrumb
