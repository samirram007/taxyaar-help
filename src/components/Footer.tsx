import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const footerGroups = [
  {
    title: "TAXYAAR",
    links: [
      "TAXYAAR Home",
      "Support",
      "Track Refund",
      "About Us",
      "Privacy Policy",
      "Terms of Use",
      "Pricing",
      "Team",
      "Branding",
      "Refer & earn",
      "Share with friends",
    ],
  },
  {
    title: "Important Tools",
    links: [
      "Capital Gain Calculator",
      "Shares & Securities Calculator",
      "Land & Building Calculator",
      "Crypto Tax Calculator",
      "Advance Tax Estimator",
      "Tax Calculator 2025-26",
      "Generate Form 12BB",
      "Generate Rent Receipt",
      "Check Refund Status",
      "Find IFSC Code",
      "HRA Calculator",
      "EMI Calculator",
      "BMI Calculator",
    ],
  },
  {
    title: "Corporate",
    links: [
      "Form-16 Software",
      "Digital Signature",
      "TDS Software",
      "TDS Outsourcing",
      "STACOS",
      "Lexlegis",
      "Teamnest",
      "Partner with myITreturn",
    ],
  },
  {
    title: "Other Links",
    links: [
      "Assisted Service",
      "Notice Assistance",
      "Notice Section 139(9)",
      "Notice Section 143(1)",
      "Notice Section 133(6)",
      "Notice Section 245",
      "Last date to file Income tax return",
      "Tax Planning",
    ],
  },
]

export default function Footer() {
  return (
    <footer className="c-footer-w">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="grid grid-cols-[260px_1fr] gap-6 max-[767px]:grid-cols-1">
          <div className="c-footer-left mb-3">
            <div className="c-footer-logo">
              <a href="#">
                <img src="/images/logo.png" alt="Taxyaar" />
              </a>
            </div>
            <ul>
              <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
              <li><a href="#" aria-label="Twitter"><FaTwitter /></a></li>
              <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
            </ul>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[767px]:grid-cols-1">
            {footerGroups.map((group) => (
              <div key={group.title} className="c-footer-nav mb-3">
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="c-footer-bottom">
          <p>2025-26 Copyright Taxyaar Pvt. Ltd. <span>All Rights Reserved</span></p>
        </div>

        <p className="disclaimer">
          Disclaimer: File your Income Tax Return online with Taxyaar. E-filing through myitreturn is quick, safe, and hassle-free.
          Simply upload your Form-16 and complete your filing in just 15 minutes. <a href="#">taxyaar.com</a> supports salary income,
          interest from banks and other sources, capital gains, income from house property, as well as business and professional income.
          With the Taxyaar website, you can file your return right from your smartphone. Begin filing for free and get the assurance of maximum
          refund, guaranteed. We are the smartest and most reliable platform for individuals to e-file their returns.
        </p>
      </div>
    </footer>
  )
}