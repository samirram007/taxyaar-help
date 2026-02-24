"use client"

import Icon from "@/components/icon"
import { Route as TopicCategoryRoute } from "@/routes/help-center/_layout/topic_category/_layout/$slug"
import { Link } from "@tanstack/react-router"
import { FaBook, FaChartLine, FaDatabase, FaQuestionCircle } from "react-icons/fa"
import type { TopicCategoryList } from "../modules/topic_category/data/schema"
import TopicSearch from "./components/topic-search"
const categories01 = [
    {
        id: "tax-made-easy",
        title: "Tax Made Easy",
        description: "Understand tax concepts and filing requirements",
        url: "/categories/tax-made-easy",
        icon: FaChartLine,
    },
    {
        id: "guides",
        title: "How to Guides",
        description: "Step-by-step instructions for common tasks",
        icon: FaBook,
    },
    {
        id: "knowledge",
        title: "Knowledge Base",
        description: "Comprehensive articles and documentation",
        icon: FaDatabase,
    },
    {
        id: "faqs",
        title: "FAQs",
        description: "Frequently asked questions and answers",
        icon: FaQuestionCircle,
    },
]

interface TopicCategoryProps {
    data: TopicCategoryList
}

export default function HelpCenter({ data: categories }: TopicCategoryProps) {

    return (
        <div className="min-h-screen bg-linear-to-br from-background to-muted">
            <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-foreground">Help Center</h1>
                    <p className="mt-2 text-muted-foreground">Find answers and guides to help you succeed</p>
                </div>
            </header>

            <TopicSearch />

            <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => {

                        return (
                            <Link
                                key={category.id}
                                to={TopicCategoryRoute.to}
                                params={{ slug: category.slug! }}
                                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                            >
                                <Icon name={category.icon!} size={36} className="text-4xl mb-3 text-primary group-hover:scale-110 transition-transform" />
                                <h2 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                    {category.name}
                                </h2>
                                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}