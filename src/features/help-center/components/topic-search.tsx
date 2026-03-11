
import { useNavigate } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { useState, useMemo } from 'react';
import { useQuery } from "@tanstack/react-query"
import { SearchArticleQueryOptions } from "../data/queryOptions"
import type { TopicArticle } from "@/features/modules/topic_article/data/schema"



const TopicSearch = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [showResults, setShowResults] = useState(false)
    const navigate = useNavigate()

    const queryResult = useQuery({
        ...SearchArticleQueryOptions(searchQuery),
        enabled: searchQuery.trim().length >= 2, // 🔥 important
    })

    const searchResults = useMemo(() => {

        return queryResult.data?.data ?? []
    }, [queryResult.data])

    const handleSearch = (query: string) => {

        setSearchQuery(query)

        if (query.trim().length < 2) {
            setShowResults(false)
            return
        }

        setShowResults(true)
    }

    const handleArticleClick = (slug: string) => {
        navigate({
            to: "/help-center/topic_article/$slug",
            params: { slug },
        })

        setSearchQuery("")
        setShowResults(false)
    }
    console.log(showResults, searchResults)
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
                                {searchResults.map((result: TopicArticle) => (
                                    <button
                                        key={result.slug}
                                        onClick={() => handleArticleClick(result.slug)}
                                        className="w-full text-left px-3 py-2 rounded hover:bg-muted transition-colors"
                                    >
                                        <div className="font-medium text-foreground">{result.title}</div>
                                        <div className="text-xs text-muted-foreground capitalize">{result.slug}</div>
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
            {/* <pre>{JSON.stringify(queryResult.data, null, 2)}</pre> */}
        </div>
    )
}

export default TopicSearch