import { useNavigate } from 'react-router-dom'

export default function Summary() {
  const navigate = useNavigate()

  const handleCompleteBooking = () => {
    alert('Buchung abgeschlossen!'); 
    navigate('/')
  }

  return (
    <div className="container card">
      <h2>Zusammenfassung</h2>
      <ul>
        <li>Fahrt: Tagesfahrt mit Sitzplatz</li>
        <li>Datum: 20.06.2026</li>
        <li>Route: Donau Panorama</li>
        <li>Personen: 2</li>
      </ul>
      <button onClick={handleCompleteBooking}>Buchung abschließen</button>
    </div>
  )
}
