import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      {/* Hero Card */}
      <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
        <h1>Elegante Fahrten auf der Donau</h1>
        <p>Moderne Buchung für klassische Dampfschiff-Erlebnisse.</p>

        <img
          src="https://assets.tourdata.at/x550/214919/3A694C1AD06309AFBE44587A6737998D4B1FA4D03A7A4D18BA5F6848E111750F/donauschifffahrt.jpg"
          style={{ width: '100%', borderRadius: '12px' }}
        />

        {/* Overlay-Card in der Mitte */}
        {/*<div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(220, 220, 220, 1)',
            color: 'rgba(109,31,43,0.9)',
            padding: '20px 30px',
            borderRadius: '16px',
            fontWeight: '700',
            fontSize: '1rem',
            textAlign: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
          }}
        >
          50.000 zufriedene Kunden
        </div>*/}

        {/* Jetzt buchen Button Wrapper */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translateX(-50%)', // nur Wrapper zentriert
            textAlign: 'center'
          }}
        >
          <Link to="/buchen/fahrt">
            <button
              style={{
                width: '240px',
                padding: '16px 0',
                borderRadius: '12px',
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'rgba(220,220,220,1)',
                background: 'rgba(109,31,43,0.9)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                opacity: 1,
                transition: 'transform 0.2s ease, background 0.3s ease'
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Jetzt buchen
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="card" style={{ marginTop: '30px', fontSize: '0.9rem' }}>
        <h3>Adresse & Kontakt</h3>
        <p>
          Schönbrunn Dampfschifffahrt GmbH<br/>
          Donauufer 12, 1010 Wien<br/>
          Tel: +43 1 234 5678<br/>
          E-Mail: info@schoenbrunn-dampfschifffahrt.at
        </p>

        <h3>Öffnungszeiten</h3>
        <p>
          Montag – Freitag: 09:00 – 18:00<br/>
          Samstag – Sonntag: 10:00 – 19:00
        </p>

        <h3>Impressum</h3>
        <p>
          Geschäftsführer: Max Mustermann<br/>
          UID-Nr.: ATU12345678<br/>
          Firmenbuchgericht: Handelsgericht Wien
        </p>
      </div>
    </div>
  )
}
