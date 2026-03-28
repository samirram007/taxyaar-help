import Footer from '@/components/Footer'
import { RequestsPage } from './components/requests-page'
import { SearchProvider } from '@/core/contexts/search-context'
import Header from '@/components/Header'

export default function Requests() {
  return (
    <SearchProvider showCommandMenu={false}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
            <RequestsPage />
          </div>
        </main>
        <Footer />
      </div>
    </SearchProvider>
  )
}
