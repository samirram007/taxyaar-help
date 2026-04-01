import Footer from '@/components/Footer'
import { SearchProvider } from '@/core/contexts/search-context'
import ActivityHeader from './components/ActivityHeader'

export default function Activities({ children }: { children: any }) {
  return (
    <SearchProvider showCommandMenu={false}>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <ActivityHeader />
        <main className="flex-1">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-6 2xl:px-10">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </SearchProvider>
  )
}
