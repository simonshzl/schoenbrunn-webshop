import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function ForgotPassword(){
  return(
    <AuthLayout title="Passwort zurücksetzen">
      <label>E-Mail-Adresse
        <input type="email" />
      </label>

      <button>Link senden</button>

      <div className="auth-links">
        <Link to="/login">Zurück zum Login</Link>
      </div>
    </AuthLayout>
  )
}
