import {getDB} from "../../../lib/db"

export async function POST(req){

const {image}=await req.json()

const db=await getDB()

await db.run("DELETE FROM settings")

await db.run(
"INSERT INTO settings(homepage_background) VALUES(?)",
image
)

return Response.json({success:true})
}
