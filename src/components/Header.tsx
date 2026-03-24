import { Link } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickToTaxYaar = () =>{
    window.location.href=import.meta.env.VITE_TAXYAAR_SITE
  }

  return (
    <header className="c-header-w">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="grid grid-cols-[220px_1fr] items-center gap-6 max-[991px]:grid-cols-1 max-[991px]:gap-2">
          <div className="c-logo-w">
            <Link to="/help-center">
              <img src="/images/logo.png" alt="Taxyaar" />
            </Link>
          </div>

          <div className="c-nav-w">
            <div className="c-nav-bottom">
              <button
                type="button"
                className="c-menu-btn"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />} menu
              </button>

              <div className={`c-nav-bottom-list ${menuOpen ? 'active' : ''}`}>
                <ul>
                  <li><div className="text-white cursor-pointer text-sm font-bold" onClick={onClickToTaxYaar}>File Your Tax Return</div></li>
                  <li>
                    <Link
                      to="/help-center/submit_request"
                      className="text-sm" onClick={() => setMenuOpen(false)}
                    >
                      Submit a request
                    </Link>
                  </li>
                  <li>
                    <Link to="/sign-in" className="c-btn-1" onClick={() => setMenuOpen(false)}>
                      <span>Login</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
