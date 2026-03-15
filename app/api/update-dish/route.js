import {getDB} from "../../../lib/db"

export async function POST(req){

const {id,name,description}=await req.json()

const db=await getDB()

await db.run(
"UPDATE dishes SET name=?,description=? WHERE id=?",
name,
description,
id
)

return Response.json({success:true})
}
