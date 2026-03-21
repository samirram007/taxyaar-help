
import Icon from "@/components/icon"
import { Route as TopicCategoryRoute } from "@/routes/help-center/_layout/topic_category/_layout/$slug"
import { Link } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"
// import { FaBook, FaChartLine, FaDatabase, FaQuestionCircle } from "react-icons/fa"
import type { TopicCategoryList } from "../modules/topic_category/data/schema"
import TopicSearch from "./components/topic-search"
// const categories01 = [
//     {
//         id: "tax-made-easy",
//         title: "Tax Made Easy",
//         description: "Understand tax concepts and filing requirements",
//         url: "/categories/tax-made-easy",
//         icon: FaChartLine,
//     },
//     {
//         id: "guides",
//         title: "How to Guides",
//         description: "Step-by-step instructions for common tasks",
//         icon: FaBook,
//     },
//     {
//         id: "knowledge",
//         title: "Knowledge Base",
//         description: "Comprehensive articles and documentation",
//         icon: FaDatabase,
//     },
//     {
//         id: "faqs",
//         title: "FAQs",
//         description: "Frequently asked questions and answers",
//         icon: FaQuestionCircle,
//     },
// ]

interface TopicCategoryProps {
    data: TopicCategoryList
}

export default function HelpCenter({ data: categories }: TopicCategoryProps) {
    const topCards = categories.slice(0, 3)
    const faqCard = categories[3]
    const extraCards = categories.slice(4)

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

    const getDefaultIcon = (index: number) => {
        const fallbackIcons = ["FaFileInvoice", "FaBook", "FaDatabase", "FaQuestionCircle"]
        return fallbackIcons[index] ?? "IconChecklist"
    }

    return (
        <div className="hc-help-center min-h-full bg-white">
            <section className="help-ban">
                <div className="mx-auto w-[min(1200px,92%)]">
                    <div className="help-ban-cont">
                        <h2>
                            We Add Value To <span>Your <span className="last">Business</span></span>
                        </h2>
                        <h5>We are at your service for all your IT Return solutions</h5>
                        <div className="help-ban-img">
                            <img src="/images/help-ban-img.webp" alt="Taxyaar" />
                        </div>
                    </div>
                </div>
            </section>

            <TopicSearch />

            <section className="dark-grey-box">
                <div className="mx-auto w-[min(1200px,92%)]">
                    <div className="dark-grey-box-cont">
                        <div className="grid grid-cols-3 gap-6 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
                            {topCards.map((category, index) => (
                                <Link
                                    key={category.id}
                                    to={TopicCategoryRoute.to}
                                    params={{ slug: category.slug! }}
                                    className="single_feature_box"
                                >
                                    <div className="single_feature_box_icon">
                                        <Icon name={category.icon || getDefaultIcon(index)} size={34} />
                                    </div>
                                    <div className="single_feature_box_content">
                                        <h2>{category.name}</h2>
                                    </div>
                                    <div className="single_feature_box_content_text">
                                        <p>{category.description}</p>
                                    </div>
                                </Link>
                            ))}

                            {faqCard && (
                                <Link
                                    key={faqCard.id}
                                    to={TopicCategoryRoute.to}
                                    params={{ slug: faqCard.slug! }}
                                    className="single_feature_box col-span-full"
                                >
                                    <div className="single_feature_box_icon">
                                        <Icon name={faqCard.icon || getDefaultIcon(3)} size={34} />
                                    </div>
                                    <div className="single_feature_box_content">
                                        <h2>{faqCard.name}</h2>
                                    </div>
                                    <div className="single_feature_box_content_text">
                                        <p>{faqCard.description}</p>
                                    </div>
                                </Link>
                            )}

                            {extraCards.map((category) => (
                                <Link
                                    key={category.id}
                                    to={TopicCategoryRoute.to}
                                    params={{ slug: category.slug! }}
                                    className="single_feature_box"
                                >
                                    <div className="single_feature_box_icon">
                                        <Icon name={category.icon!} size={34} />
                                    </div>
                                    <div className="single_feature_box_content">
                                        <h2>{category.name}</h2>
                                    </div>
                                    <div className="single_feature_box_content_text">
                                        <p>{category.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="recomended-article">
                <div className="mx-auto w-[min(1200px,92%)]">
                    <h2 className="text-center pb-5">Recommended Articles</h2>
                    <div className="grid grid-cols-2 gap-6 max-[767px]:grid-cols-1">
                        {[recommendedArticles.slice(0, 6), recommendedArticles.slice(6)].map((column, index) => (
                            <div key={index} className="article-box">
                                <ul>
                                    {column.map((article) => (
                                        <li key={article}>
                                            <a href="#">
                                                <ChevronRight size={16} />
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
        </div>
    )
}