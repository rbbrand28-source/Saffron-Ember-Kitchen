"use client"
import {useState} from "react"

export default function AdminDishForm({refresh}){

const[name,setName]=useState("")
const[description,setDescription]=useState("")
const[file,setFile]=useState()

async function submit(e){
e.preventDefault()

const data=new FormData()
data.append("file",file)

const upload=await fetch("/api/upload",{method:"POST",body:data})
const img=await upload.json()

await fetch("/api/dishes",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name,
description,
image:img.path
})
})

setName("")
setDescription("")
refresh()
}

return(
<form onSubmit={submit} className="space-y-3">

<input
value={name}
onChange={e=>setName(e.target.value)}
placeholder="Dish name"
className="p-2 w-full bg-black"
/>

<textarea
value={description}
onChange={e=>setDescription(e.target.value)}
placeholder="Description"
className="p-2 w-full bg-black"
/>

<input
type="file"
onChange={e=>setFile(e.target.files[0])}
/>

<button className="bg-saffron text-black px-4 py-2">
Add Dish
</button>

</form>
)
}
