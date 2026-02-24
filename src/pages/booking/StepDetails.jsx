import {Link} from 'react-router-dom'
export default function(){
return(
<div className="container card">
<h2>Details</h2>
<label>Datum<input type="date"/></label><br/><br/>
<label>Personen<input type="number" value="2"/></label><br/><br/>
<label>Route
<select>
<option>Donau Panorama – 2h – 5 Stationen</option>
<option>Abendfahrt Wien – 3h – 7 Stationen</option>
</select>
</label><br/><br/>
<Link to="/buchen/person"><button>Weiter</button></Link>
</div>
)}
