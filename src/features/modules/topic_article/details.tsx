





import { Route as TopicArticleRoute } from '@/routes/help-center/_layout/topic_article/_layout/$slug';
import { Route as TopicCategoryRoute } from '@/routes/help-center/_layout/topic_category/_layout/$slug';
import { Route as TopicSectionRoute } from '@/routes/help-center/_layout/topic_section/_layout/$slug';
import { Separator } from '@radix-ui/react-separator';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useParams } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { Suspense } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { TopicSectionQueryOptions } from '../topic_section/data/queryOptions';
import { type RelatedArticle, type TopicArticle } from './data/schema';
import './render.css';

// Import the correct type for transporterListSchema

// Define the RecentArticle type
interface RecentArticle {
    id: number;
    title: string;
    slug: string;
    status: string;
}

interface TopicArticleProps {
    data?: TopicArticle
}

export default function ArticleDetails(props: TopicArticleProps) {
    const { data: article } = props
    const existing = JSON.parse(localStorage.getItem('recent_articles') || '[]') as RecentArticle[]

    // Filter out duplicate by id
    const filtered = existing.filter((a: { id: number }) => a.id !== article?.id)

    // Add current article to the beginning
    const { id, title, slug, status } = article as RelatedArticle
    if (typeof id === 'number') {
        filtered.unshift({ id, title, slug, status })
    }

    // Keep only the last 5
    const recentArticles = filtered.slice(0, 5)

    // Save back
    localStorage.setItem('recent_articles', JSON.stringify(recentArticles))

    if (!article) {
        return (
            <div className="min-h-screen bg-background">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    <p className="text-muted-foreground">Article not found</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="mb-[30px] ">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-primary hover:underline">
                            Home
                        </Link>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">

                            <Link to={TopicCategoryRoute.to} replace={true} params={{ slug: article.topicSection?.topicCategory?.slug }} className="text-primary hover:underline">
                                {article.topicSection?.topicCategory?.name}
                            </Link>
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                            <Link to={TopicSectionRoute.to} params={{ slug: article.topicSection?.slug }} >
                                {article.topicSection?.name}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

            <div className="article-container grid grid-cols-1 lg:grid-cols-[256px_1fr_256px] gap-4 max-w-7xl mx-auto px-4 md:px-8">
                <ArticlesSectionSidebar slug={article.topicSection?.slug} />
                <div className="article border-b border-border bg-background  mb-10 ">
                    <header className="article-header   py-1 mb-10 ">
                        <div className="text-3xl mb-4 font-bold text-foreground">{article.title}</div>
                        <div className='flex flex-row justify-start items-center gap-2 '>
                            <div><FaUserShield size={30} className='text-blue-600' /></div>
                            <div className='space-y-0 text-sm text-muted-foreground'>
                                <div>{article.updater?.name}</div>
                                <div>{timeAgo(article.updatedAt!)}</div>
                            </div>
                        </div>
                    </header>
                    <section className="article-info ">
                        <TopicArticle data={article} />
                    </section>
                    <Separator className='' />
                    <div className='grid grid-cols-2 gap-4 pt-8 mt-4 border-t-2 border-border '>
                        <div className='space-y-2'>
                            <div className='text-md font-bold'>Recently viewed articles</div>
                            <div className='space-y-4 text-sm text-blue-600'>
                                {
                                    existing?.map((article: RecentArticle) => {
                                        return (
                                            <div key={article.id} className='flex flex-row gap-1  items-center'>
                                                <Link to={TopicArticleRoute.to} params={{ slug: article.slug }} className=" text-blue-600  ">
                                                    {article.title}
                                                </Link>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                        <div className='space-y-2 '>

                            <div className='text-md font-bold'>Related articles</div>
                            <div className='space-y-4 text-sm text-blue-600'>
                                {
                                    article.relatedArticles?.map((article: RelatedArticle) => {
                                        return (
                                            <div key={article.id} className='flex flex-row gap-1  items-center'>
                                                < Link to={TopicArticleRoute.to} params={{ slug: article.slug! }} className=" text-blue-600  ">

                                                    {article.title}

                                                </Link>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

const TopicArticle = ({ data: article }: { data: TopicArticle }) => {

    return (
        <>
            <div className="article-content  article-container not-prose">
                <div
                    className="isolate-content article-body"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </>
    )
}

const ArticlesSectionSidebar = ({ slug }: { slug: string }) => {

    const { data: topicSection } = useSuspenseQuery(TopicSectionQueryOptions(slug))
    const { slug: currentSlug } = useParams({ from: TopicArticleRoute.id })
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <aside className="hidden lg:block w-10/12   ">
                <div className="sticky top-0 h-screen overflow-y-auto">
                    <div className="pr-4 pt-1">
                        <div className="text-md font-medium text-muted-foreground">
                            Articles in this section
                        </div>
                        <ul className="mt-2 space-y-4">
                            {topicSection.data?.topicArticles?.map((article: TopicArticle) => {
                                const isActive = article.slug === currentSlug // ✅ check active article
                                return (
                                    <li key={article.id}>

                                        <Link
                                            to={TopicArticleRoute.to}
                                            params={{ slug: article.slug }}
                                            className={`block rounded px-2 py-1 text-sm transition-colors
                        hover:bg-blue-600 hover:text-white
                        ${isActive ? 'bg-blue-600 text-white font-medium' : ''}
                      `}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        </Suspense>
    )
}

export function timeAgo(date: string | Date): string {
    const updated = new Date(date)
    const now = new Date()
    const diffMs = now.getTime() - updated.getTime()

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffWeeks = Math.floor(diffDays / 7)
    const diffMonths = Math.floor(diffDays / 30)

    if (diffMonths > 0) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`
    if (diffWeeks > 0) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`
    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
    return 'Today'
}