import { useNavigate } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { useState } from "react"


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
const TopicSearch = () => {
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

        setSearchQuery("")
    }

    return (
        <div className="border-b border-border bg-background">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for help..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                        onBlur={() => setTimeout(() => setShowResults(false), 200)}
                        className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />

                    {/* Search Results Dropdown */}
                    {showResults && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                            <div className="p-2">
                                <p className="text-xs text-muted-foreground px-3 py-2">Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</p>
                                {searchResults.map((result) => (
                                    <button
                                        key={`${result.categoryId}-${result.id}`}
                                        onClick={() => handleArticleClick(result.categoryId, result.id)}
                                        className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors"
                                    >
                                        <div className="font-medium text-foreground">{result.title}</div>
                                        <div className="text-xs text-muted-foreground capitalize">{result.categoryId.replace("-", " ")}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results */}
                    {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 z-50">
                            <p className="text-sm text-muted-foreground">No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopicSearch