

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Link, useNavigate } from "@tanstack/react-router"
import { ChevronRight, Search } from "lucide-react"
import { useState } from "react"
import { FaBook, FaCircleQuestion, FaFileExcel, FaPersonChalkboard } from "react-icons/fa6"

const categories = [
  {
    id: "tax-made-easy",
    title: "Tax Made Easy",
    description: "Visit for updates on budget 2025",
    icon: FaFileExcel,
  },
  {
    id: "guides",
    title: "How to Guides?",
    description: "Detailed explanation on how to enter data on Taxyaar",
    icon: FaPersonChalkboard,
  },
  {
    id: "knowledge",
    title: "Knowledge Base",
    description: "Our Knowledge Base on Income-tax filing",
    icon: FaBook,
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "Common Questions and Answers",
    icon: FaCircleQuestion,
  },
]

const searchableArticles = [
  { id: "crypto-income-reporting", title: "How can cryptocurrency income be reported?", categoryId: "guides", keywords: ["crypto", "cryptocurrency", "income", "reporting", "bitcoin"] },
  { id: "crypto-taxation", title: "Cryptocurrency Taxation", categoryId: "guides", keywords: ["crypto", "tax", "taxation", "capital gains"] },
  { id: "document-upload", title: "Uploading Documents", categoryId: "guides", keywords: ["upload", "documents", "files", "pdf"] },
  { id: "tax-basics", title: "Tax Filing Basics", categoryId: "tax-made-easy", keywords: ["basics", "filing", "beginner", "started"] },
  { id: "deductions", title: "Common Deductions", categoryId: "tax-made-easy", keywords: ["deductions", "deduct", "itemized", "standard"] },
  { id: "credits", title: "Tax Credits Explained", categoryId: "tax-made-easy", keywords: ["credits", "tax credit", "child", "earned income"] },
  { id: "tax-forms", title: "Understanding Tax Forms", categoryId: "knowledge", keywords: ["forms", "w2", "1099", "schedule"] },
  { id: "irs-updates", title: "Latest IRS Updates", categoryId: "knowledge", keywords: ["irs", "updates", "changes", "new"] },
  { id: "tax-planning", title: "Tax Planning Strategies", categoryId: "knowledge", keywords: ["planning", "strategies", "optimize"] },
  { id: "account-setup", title: "How do I set up my account?", categoryId: "faqs", keywords: ["account", "setup", "register", "create"] },
  { id: "password-reset", title: "How do I reset my password?", categoryId: "faqs", keywords: ["password", "reset", "forgot", "login"] },
  { id: "support-contact", title: "How do I contact support?", categoryId: "faqs", keywords: ["support", "contact", "help", "email", "phone"] },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchableArticles>([])
  const [showResults, setShowResults] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (query.trim().length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const lowerQuery = query.toLowerCase()
    const results = searchableArticles.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
    )

    setSearchResults(results)
    setShowResults(true)
  }

  const handleArticleClick = (categoryId: string, articleId: string) => {
    navigate({
      to: "/categories/$categoryId/$articleId",
      params: { categoryId, articleId }
    })
    setShowResults(false)
    setSearchQuery("")
  }

  const recommendedArticles = [
    "Upload Form 16 through Taxyaar and file your tax return in minutes",
    "How to pay an Outstanding Demand?",
    "How to read and understand Form 16?",
    "How to pay advance-tax online?",
    "What our last 100 customers think about our support?",
    "Stepwise guide for you to file without Form-16",
    "Got Income-tax notice? We will help.",
    "All about House Property",
    "How to e-Verify Your Income Tax Return?",
    "Guide to Calculate Taxable Income on Rental Property",
    "Anticipatory Income-tax Statement/Return",
    "How can I identify and transition to a regime that truly benefits me?",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-[#eef2ff]">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="text-4xl font-black uppercase leading-tight text-[#132e67] sm:text-5xl lg:text-7xl">
              We Add Value To <span className="block text-[#2e67d1]">Your Business</span>
            </h1>
            <p className="mt-6 text-lg text-[#243a6b] sm:text-2xl">We are at your service for all your IT Return solutions</p>
            <img
              src="/images/help-ban-img.webp"
              className="mt-8 w-full max-w-3xl"
              alt="Taxyaar support illustration"
            />
          </div>
        </div>
        <div className="h-12 w-full bg-linear-to-r from-[#2e67d1] via-[#5f8ae0] to-[#2e67d1]" />
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto w-full max-w-4xl">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="w-full rounded-xl border border-zinc-300 bg-[#f7f9fc] py-4 pl-14 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:border-[#2e67d1] focus:outline-none focus:ring-2 focus:ring-[#2e67d1]/20"
            />

            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-xl border border-zinc-200 bg-white shadow-lg">
                <div className="p-2">
                  <p className="px-3 py-2 text-xs text-zinc-500">Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</p>
                  {searchResults.map((result) => (
                    <button
                      key={`${result.categoryId}-${result.id}`}
                      onClick={() => handleArticleClick(result.categoryId, result.id)}
                      className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-zinc-100"
                    >
                      <div className="font-medium text-zinc-900">{result.title}</div>
                      <div className="text-xs capitalize text-zinc-500">{result.categoryId.replace("-", " ")}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg">
                <p className="text-sm text-zinc-500">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                to="/categories/$categoryId"
                params={{ categoryId: category.id }}
                className="group relative rounded-2xl bg-white p-7 text-center shadow-[0_10px_30px_rgba(46,103,209,0.16)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(46,103,209,0.2)]"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[40%_60%_70%_30%/49%_62%_38%_51%] bg-[#e8eeff] text-[#2e67d1] transition group-hover:bg-[#2e67d1] group-hover:text-white">
                  <Icon className="text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 transition group-hover:text-[#2e67d1]">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm text-zinc-600">{category.description}</p>
                <span className="pointer-events-none absolute inset-0 rounded-2xl border border-[#e4e7ee]" />
              </Link>
            )
          })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="pb-8 text-center text-3xl font-extrabold text-zinc-900 sm:text-4xl">Recommended Articles</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {[recommendedArticles.slice(0, 6), recommendedArticles.slice(6)].map((column, index) => (
              <div key={index} className="rounded-2xl border border-zinc-200 p-3 sm:p-5">
                <ul>
                  {column.map((article) => (
                    <li key={article} className="border-b border-dashed border-zinc-300 last:border-b-0">
                      <a href="#" className="flex items-start gap-2 py-3 text-zinc-800 transition hover:pl-1 hover:text-[#2e67d1]">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                        <span>{article}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}