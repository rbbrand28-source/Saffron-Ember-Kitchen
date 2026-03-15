import {getDB} from "../../../lib/db"

export async function GET(){

const db=await getDB()
const dishes=await db.all("SELECT * FROM dishes")

return Response.json(dishes)
}

export async function POST(req){

const body=await req.json()
const db=await getDB()

await db.run(
"INSERT INTO dishes(name,description,image) VALUES(?,?,?)",
body.name,
body.description,
body.image
)

return Response.json({success:true})
}
