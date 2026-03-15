import {writeFile} from "fs/promises"
import path from "path"

export async function POST(req){

const data=await req.formData()
const file=data.get("file")

const bytes=await file.arrayBuffer()
const buffer=Buffer.from(bytes)

const filename=Date.now()+"-"+file.name

const filepath=path.join(process.cwd(),"public/uploads",filename)

await writeFile(filepath,buffer)

return Response.json({
path:"/uploads/"+filename
})
}
