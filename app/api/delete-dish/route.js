import {getDB} from "../../../lib/db"

export async function POST(req){

const {id}=await req.json()
const db=await getDB()

await db.run("DELETE FROM dishes WHERE id=?",id)

return Response.json({success:true})
}
