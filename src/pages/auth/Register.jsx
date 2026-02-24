import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function Register(){
  const navigate = useNavigate()

  const handleRegister = () => {
    
    navigate('/profil')
  }

  return(
    <AuthLayout title="Konto erstellen">
      <label>Vor- und Nachname
        <input />
      </label>

      <label>E-Mail-Adresse
        <input type="email" />
      </label>

      <label>Passwort
        <input type="password" />
      </label>

      <label>Passwort bestätigen
        <input type="password" />
      </label>

      <button onClick={handleRegister}>
        Konto anlegen
      </button>

      <div className="auth-links">
        <Link to="/login">Zurück zum Login</Link>
      </div>
    </AuthLayout>
  )
}