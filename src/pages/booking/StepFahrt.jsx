import {Link} from 'react-router-dom'
export default function(){
return(
<div className="container">
<h2>Fahrt wählen</h2>
<div className="grid grid-3">
<div className="card"><h3>Tagesfahrt</h3><p>Ohne Sitzplatz</p><Link to="/buchen/details"><button>Wählen</button></Link></div>
<div className="card"><h3>Tagesfahrt</h3><p>Mit Sitzplatz</p><Link to="/buchen/details"><button>Wählen</button></Link></div>
<div className="card"><h3>Eventfahrt</h3><p>Mit Tischplan</p><Link to="/buchen/details"><button>Wählen</button></Link></div>
</div>
</div>
)}
