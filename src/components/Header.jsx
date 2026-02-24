import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="nav-left">
          <Link to="/" className="nav-link">Startseite</Link>
          <Link to="/buchen/fahrt" className="nav-link">Buchen</Link>
        </div>

        <div className="nav-right">
          <Link to="/login" className="nav-link nav-login">Login</Link>
        </div>
      </div>
    </header>
  )
}
