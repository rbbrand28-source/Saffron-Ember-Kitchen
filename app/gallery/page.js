import {getDB} from "../../lib/db"

export default async function Gallery(){

const db=await getDB()
const dishes=await db.all("SELECT * FROM dishes")

return(

<div className="columns-3 p-10">

{dishes.map(d=>(

<img
key={d.id}
src={d.image}
className="mb-4 rounded"
/>

))}

</div>

)
}
