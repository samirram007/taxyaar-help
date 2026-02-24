





import { Route as TopicArticleRoute } from '@/routes/help-center/_layout/topic_article/_layout/$slug'
import { Route as TopicSectionRoute } from '@/routes/help-center/_layout/topic_section/_layout/$slug'
import { Link } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"
import { FaStar } from 'react-icons/fa'
import type { TopicArticle, TopicArticleList } from "../topic_article/data/schema"
import type { TopicSection, TopicSectionList } from "../topic_section/data/schema"
import { type TopicCategory } from './data/schema'

// Import the correct type for transporterListSchema



interface TopicCategoryProps {
    data?: TopicCategory
}

export default function CategoryDetails(props: TopicCategoryProps) {
    const { data: category } = props

    if (!category) {
        return (
            <div className="min-h-screen bg-background">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <p className="text-muted-foreground">Category not found</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="border-b border-border bg-muted/50">
                <div className="mx-auto max-w-6xl  py-4 ">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-primary hover:underline">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{category.name}</span>
                    </div>
                </div>
            </div>
            <div className="">

                <div className="border-b border-border bg-background">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold text-foreground">{category.name}</h1>
                        <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
                    </div>
                </div>


                <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="space-y-4 grid grid-cols-2 justify-center gap-4">
                        <TopicSections data={category.topicSections} />
                    </div>
                </main>
            </div>
        </div>
    )
}
const TopicSections = ({ data: topicSections }: { data: TopicSectionList }) => {
    return (
        <>
            {topicSections?.map((section: TopicSection) => (
                <div key={section.id}>
                    <Link
                        to={TopicSectionRoute.to}
                        params={{ slug: section.slug }}
                        className='flex flex-row gap-6'
                    >
                        <div className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            <div>{section.name}</div>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">
                            <div>
                                {section.topicArticles?.length > 0 ?
                                    `${section.topicArticles?.length} article(s) `
                                    : ''
                                }
                            </div>
                        </div>

                    </Link>
                    {
                        section.topicArticles?.length > 0 &&

                        <TopicArticles data={section.topicArticles} />
                    }
                </div >
            ))}
        </>
    )
}


const TopicArticles = ({ data: topicArticles }: { data: TopicArticleList }) => {
    return (
        <div className="space-y-2 grid grid-cols-1 gap-4 mt-4">
            {
                topicArticles.map((article: TopicArticle) => (
                    <div key={article.id} className='flex flex-row gap-1  items-center'>
                        {article.isMarked && <FaStar className='text-blue-500 text-shadow' />}
                        < Link to={TopicArticleRoute.to} params={{ slug: article.slug! }} className="  ">

                            {article.title}

                        </Link>
                    </div>
                ))
            }
        </div >
    )

}






