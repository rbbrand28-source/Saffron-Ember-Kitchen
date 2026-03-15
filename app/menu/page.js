import {getDB} from "../../lib/db"
import DishCard from "../../components/DishCard"

export default async function Menu(){

const db=await getDB()
const dishes=await db.all("SELECT * FROM dishes")

return(

<div className="p-10 grid md:grid-cols-3 gap-6">

{dishes.map(d=>(

<DishCard key={d.id} dish={d}/>

))}

</div>

)
}
