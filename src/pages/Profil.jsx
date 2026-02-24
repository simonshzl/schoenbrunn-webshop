export default function Profil() {
  return (
    <div className="container">
      <div className="card">
        <h2>Mein Profil</h2>
        <p>Willkommen zurück!</p>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Meine Tickets</h3>

        <ul>
          <li>
            Tagesfahrt mit Sitzplatz <br/>
            Datum: 20.06.2026 <br/>
            Route: Donau Panorama
          </li>

          <br/>

          <li>
            Eventfahrt mit Tischplan <br/>
            Datum: 15.07.2026 <br/>
            Route: Abendliche Donau Gala
          </li>
        </ul>
      </div>
    </div>
  )
}