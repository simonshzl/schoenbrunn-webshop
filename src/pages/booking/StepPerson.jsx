import {Link} from 'react-router-dom'
export default function(){
return(
<div className="container card">
<h2>Persönliche Daten</h2>
<label>Name<input/></label><br/><br/>
<label>Adresse<input/></label><br/><br/>
<label>Telefon<input/></label><br/><br/>
<Link to="/buchen/summary"><button>Zur Übersicht</button></Link>
</div>
)}
