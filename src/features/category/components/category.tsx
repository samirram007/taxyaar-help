

import { Link, useParams } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";



const categoryData: Record<
  string,
  { title: string; description: string; articles: Array<{ id: string; title: string; excerpt: string }> }
> = {
  "tax-made-easy": {
    title: "Tax Made Easy",
    description: "Learn the fundamentals of tax filing and planning",
    articles: [
      { id: "tax-basics", title: "Tax Filing Basics", excerpt: "Understand the essentials of filing your taxes" },
      { id: "deductions", title: "Common Deductions", excerpt: "Maximize your deductions and reduce your tax burden" },
      {
        id: "credits",
        title: "Tax Credits Explained",
        excerpt: "Learn about available tax credits you may qualify for",
      },
    ],
  },
  guides: {
    title: "How to Guides",
    description: "Step-by-step instructions for common tasks",
    articles: [
      {
        id: "crypto-income-reporting",
        title: "How can cryptocurrency income be reported?",
        excerpt: "Report your crypto gains and losses correctly",
      },
      {
        id: "crypto-taxation",
        title: "Cryptocurrency Taxation",
        excerpt: "Understand how crypto transactions are taxed",
      },
      {
        id: "document-upload",
        title: "Uploading Documents",
        excerpt: "Learn how to securely upload your tax documents",
      },
    ],
  },
  knowledge: {
    title: "Knowledge Base",
    description: "Comprehensive articles and documentation",
    articles: [
      {
        id: "tax-forms",
        title: "Understanding Tax Forms",
        excerpt: "Deep dive into various tax forms and their purposes",
      },
      { id: "irs-updates", title: "Latest IRS Updates", excerpt: "Stay informed about recent tax law changes" },
      { id: "tax-planning", title: "Tax Planning Strategies", excerpt: "Strategies to optimize your tax situation" },
    ],
  },
  faqs: {
    title: "FAQs",
    description: "Frequently asked questions and answers",
    articles: [
      {
        id: "account-setup",
        title: "How do I set up my account?",
        excerpt: "Get started with your account in minutes",
      },
      { id: "password-reset", title: "How do I reset my password?", excerpt: "Regain access to your account" },
      { id: "support-contact", title: "How do I contact support?", excerpt: "Get help from our support team" },
    ],
  },
}

export default function CategoryPage() {
  const params = useParams({ strict: false })
  const categoryId = params.categoryId as string
  const category = categoryData[categoryId]

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
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{category.title}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">{category.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
        </div>
      </div>


      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {category.articles.map((article) => (
            <Link
              key={article.id}
              to="/categories/$categoryId/$articleId"
              params={{ categoryId, articleId: article.id }}
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md hover:shadow-primary/10"
            >
              <h2 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{article.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
