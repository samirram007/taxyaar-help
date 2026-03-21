
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
    return (
        <section className="search">
            <div className="mx-auto w-[min(1200px,92%)]">
                <div className="form-group has-search">
                    <span className="form-control-feedback">
                        <Search size={16} />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                        onBlur={() => setTimeout(() => setShowResults(false), 200)}
                    />

                    {/* Search Results Dropdown */}
                    {showResults && searchResults.length > 0 && (
                        <div className="search-dropdown">
                            <div className="p-2">
                                <p className="px-3 py-2 text-xs text-zinc-500">Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</p>
                                {searchResults.map((result: TopicArticle) => (
                                    <button
                                        key={result.slug}
                                        onClick={() => handleArticleClick(result.slug)}
                                        className="search-item"
                                    >
                                        <div className="font-medium text-zinc-900">{result.title}</div>
                                        <div className="text-xs capitalize text-zinc-500">{result.slug}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results */}
                    {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
                        <div className="search-dropdown p-4">
                            <p className="text-sm text-zinc-500">No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
            {/* <pre>{JSON.stringify(queryResult.data, null, 2)}</pre> */}
        </section>
    )
}

export default TopicSearch