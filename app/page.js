import {getDB} from "../lib/db"

export default async function Home(){

const db=await getDB()
const bg=await db.get("SELECT homepage_background FROM settings LIMIT 1")

return(

<div
className="h-screen flex items-center justify-center text-center"
style={{
backgroundImage:`url(${bg?.homepage_background || ""})`,
backgroundSize:"cover"
}}
>

<div>
<h1 className="text-5xl text-saffron">
Saffron Ember Kitchen
</h1>
<p>Future of Fine Dining</p>
</div>

</div>

)
}
