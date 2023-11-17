import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://us-central1-gcpospasial.cloudfunctions.net/geozay";
export let urlPostGCF = "https://us-central1-gcpospasial.cloudfunctions.net/PostGCF";
export let UrlLogin = "https://us-central1-backendserbaevents.cloudfunctions.net/LoginFunction"
export let UrlRegister = "https://us-central1-backendserbaevents.cloudfunctions.net/RegisterPost"
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "fahadwell"
export let cookie = getCookie("Login")
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`