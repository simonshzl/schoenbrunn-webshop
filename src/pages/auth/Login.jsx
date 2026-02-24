import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // Dummy-Login (kein Backend)
    localStorage.setItem('user', 'eingeloggt')

    navigate('/profil')
  }

  return (
    <AuthLayout title="Anmelden">
      <form onSubmit={handleLogin}>
        <label>E-Mail-Adresse
          <input type="email" required />
        </label>

        <label>Passwort
          <input type="password" required />
        </label>

        <button type="submit">Anmelden</button>
      </form>

      <div className="auth-links">
        <Link to="/registrieren">Neues Konto erstellen</Link>
        <Link to="/passwort-vergessen">Passwort vergessen?</Link>
      </div>
    </AuthLayout>
  )
}