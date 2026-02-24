import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'

export default function ResetInfo(){
  return(
    <AuthLayout title="E-Mail prüfen">
      <p>
        Falls ein Fehler aufgetreten ist oder keine E-Mail angekommen ist,
        können Sie den Vorgang erneut starten.
      </p>

      <Link to="/passwort-vergessen">
        <button>Erneut versuchen</button>
      </Link>
    </AuthLayout>
  )
}
