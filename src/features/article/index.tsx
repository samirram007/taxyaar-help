"use client"



import { Link, useParams } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";


const articleContent: Record<string, { title: string; content: string; updated: string }> = {
  "crypto-income-reporting": {
    title: "How can cryptocurrency income be reported?",
    updated: "October 15, 2024",
    content: `
      <h2>Understanding Cryptocurrency Income</h2>
      <p>Cryptocurrency income includes any gains from trading, mining, staking, or receiving crypto as payment. The IRS treats cryptocurrency as property, not currency.</p>
      
      <h2>Types of Crypto Income</h2>
      <ul>
        <li><strong>Capital Gains:</strong> Profit from selling crypto at a higher price than purchase</li>
        <li><strong>Mining Income:</strong> Rewards from mining cryptocurrency</li>
        <li><strong>Staking Rewards:</strong> Income from staking crypto</li>
        <li><strong>Airdrops:</strong> Free crypto received from projects</li>
      </ul>
      
      <h2>Reporting Requirements</h2>
      <p>You must report all cryptocurrency transactions on your tax return. Use Form 8949 to report capital gains and losses, and Schedule D for summary information.</p>
      
      <h2>Record Keeping</h2>
      <p>Maintain detailed records of all transactions including:</p>
      <ul>
        <li>Date of transaction</li>
        <li>Type of transaction (buy, sell, trade)</li>
        <li>Amount of crypto</li>
        <li>Price per unit</li>
        <li>Total value in USD</li>
      </ul>
    `,
  },
  "crypto-taxation": {
    title: "Cryptocurrency Taxation",
    updated: "October 10, 2024",
    content: `
      <h2>How Crypto is Taxed</h2>
      <p>The IRS treats cryptocurrency as property for tax purposes. This means each transaction may trigger a taxable event.</p>
      
      <h2>Short-term vs Long-term Capital Gains</h2>
      <p>If you hold crypto for less than one year, gains are taxed as short-term capital gains at your ordinary income tax rate. If held for more than one year, they qualify for long-term capital gains rates, which are typically lower.</p>
      
      <h2>Tax Rates</h2>
      <p>Long-term capital gains rates are 0%, 15%, or 20% depending on your income level. Short-term gains are taxed at your regular income tax rate.</p>
    `,
  },
  "document-upload": {
    title: "Uploading Documents",
    updated: "October 18, 2024",
    content: `
      <h2>How to Upload Your Tax Documents</h2>
      <p>Securely upload your tax documents to complete your return filing process.</p>
      
      <h2>Supported File Types</h2>
      <p>You can upload PDFs, images (JPG, PNG), and common document formats.</p>
      
      <h2>Security</h2>
      <p>All documents are encrypted and stored securely in compliance with IRS regulations.</p>
    `,
  },
  "tax-basics": {
    title: "Tax Filing Basics",
    updated: "October 12, 2024",
    content: `
      <h2>Getting Started with Tax Filing</h2>
      <p>Filing your taxes doesn't have to be complicated. Here are the essential steps to get started.</p>
      
      <h2>Gather Your Documents</h2>
      <p>Before you start, collect all necessary documents including W-2s, 1099s, receipts for deductions, and records of charitable contributions.</p>
      
      <h2>Choose Your Filing Method</h2>
      <p>You can file electronically using tax software, hire a tax professional, or file by mail. Electronic filing is faster and more accurate.</p>
    `,
  },
  deductions: {
    title: "Common Deductions",
    updated: "October 8, 2024",
    content: `
      <h2>Maximize Your Deductions</h2>
      <p>Deductions reduce your taxable income, which can lower your tax bill significantly.</p>
      
      <h2>Standard vs Itemized Deductions</h2>
      <p>You can either take the standard deduction or itemize your deductions. Choose whichever gives you the larger deduction.</p>
      
      <h2>Common Itemized Deductions</h2>
      <ul>
        <li>Mortgage interest</li>
        <li>State and local taxes</li>
        <li>Charitable contributions</li>
        <li>Medical expenses</li>
      </ul>
    `,
  },
  credits: {
    title: "Tax Credits Explained",
    updated: "October 5, 2024",
    content: `
      <h2>Understanding Tax Credits</h2>
      <p>Tax credits directly reduce the amount of tax you owe, dollar for dollar.</p>
      
      <h2>Common Tax Credits</h2>
      <ul>
        <li><strong>Earned Income Tax Credit:</strong> For low to moderate income workers</li>
        <li><strong>Child Tax Credit:</strong> For families with qualifying children</li>
        <li><strong>Education Credits:</strong> For college tuition and expenses</li>
      </ul>
    `,
  },
  "tax-forms": {
    title: "Understanding Tax Forms",
    updated: "October 20, 2024",
    content: `
      <h2>Common Tax Forms Explained</h2>
      <p>Learn about the different tax forms you may need to file your return.</p>
      
      <h2>Form W-2</h2>
      <p>Reports wages and taxes withheld from your employer.</p>
      
      <h2>Form 1099</h2>
      <p>Reports various types of income other than wages, such as freelance income or investment earnings.</p>
    `,
  },
  "irs-updates": {
    title: "Latest IRS Updates",
    updated: "October 25, 2024",
    content: `
      <h2>Recent Tax Law Changes</h2>
      <p>Stay informed about the latest updates from the IRS and how they may affect your tax filing.</p>
      
      <h2>2024 Tax Year Changes</h2>
      <p>New standard deduction amounts, updated tax brackets, and changes to retirement contribution limits.</p>
    `,
  },
  "tax-planning": {
    title: "Tax Planning Strategies",
    updated: "October 22, 2024",
    content: `
      <h2>Optimize Your Tax Situation</h2>
      <p>Strategic tax planning can help you minimize your tax liability and maximize refunds.</p>
      
      <h2>Year-Round Planning</h2>
      <p>Don't wait until tax season. Plan throughout the year for better results.</p>
    `,
  },
  "account-setup": {
    title: "How do I set up my account?",
    updated: "October 28, 2024",
    content: `
      <h2>Creating Your Account</h2>
      <p>Get started with taxyaar-help in just a few simple steps.</p>
      
      <h2>Step 1: Register</h2>
      <p>Provide your email address and create a secure password.</p>
      
      <h2>Step 2: Verify</h2>
      <p>Check your email and click the verification link.</p>
    `,
  },
  "password-reset": {
    title: "How do I reset my password?",
    updated: "October 27, 2024",
    content: `
      <h2>Password Recovery</h2>
      <p>Regain access to your account quickly and securely.</p>
      
      <h2>Reset Process</h2>
      <p>Click "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox.</p>
    `,
  },
  "support-contact": {
    title: "How do I contact support?",
    updated: "October 26, 2024",
    content: `
      <h2>Get Help from Our Team</h2>
      <p>Our support team is here to assist you with any questions or issues.</p>
      
      <h2>Contact Methods</h2>
      <ul>
        <li>Email: support@taxyaar-help.com</li>
        <li>Phone: 1-800-TAX-HELP</li>
        <li>Live Chat: Available 9am-5pm EST</li>
      </ul>
    `,
  },
}


const categoryArticles: Record<string, Array<{ id: string; title: string }>> = {
  guides: [
    { id: "crypto-income-reporting", title: "How can cryptocurrency income be reported?" },
    { id: "crypto-taxation", title: "Cryptocurrency Taxation" },
    { id: "document-upload", title: "Uploading Documents" },
  ],
  "tax-made-easy": [
    { id: "tax-basics", title: "Tax Filing Basics" },
    { id: "deductions", title: "Common Deductions" },
    { id: "credits", title: "Tax Credits Explained" },
  ],
  knowledge: [
    { id: "tax-forms", title: "Understanding Tax Forms" },
    { id: "irs-updates", title: "Latest IRS Updates" },
    { id: "tax-planning", title: "Tax Planning Strategies" },
  ],
  faqs: [
    { id: "account-setup", title: "How do I set up my account?" },
    { id: "password-reset", title: "How do I reset my password?" },
    { id: "support-contact", title: "How do I contact support?" },
  ],
}

export default function ArticlePage() {
  const params = useParams({ strict: false })
  const categoryId = params.categoryId as string
  const articleId = params.articleId as string
  const article = articleContent[articleId as keyof typeof articleContent]
  const articles = categoryArticles[categoryId] || []

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

      <div className="border-b border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/categories/$categoryId" params={{ categoryId }} className="text-primary hover:underline capitalize">
              {categoryId.replace("-", " ")}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-card-foreground mb-4">In this category</h3>
              <nav className="space-y-2">
                {articles.map((item) => (
                  <Link
                    key={item.id}
                    to="/categories/$categoryId/$articleId"
                    params={{ categoryId, articleId: item.id }}
                    className={`block text-sm p-2 rounded transition-colors ${item.id === articleId
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <article className="rounded-lg border border-border bg-card p-8">
              <h1 className="text-4xl font-bold text-card-foreground mb-2">{article.title}</h1>
              <p className="text-sm text-muted-foreground mb-8">Updated {article.updated}</p>

              <div className="prose prose-sm max-w-none text-card-foreground">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
