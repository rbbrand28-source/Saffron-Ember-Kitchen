"use client"
import {useState} from "react"
import {useRouter} from "next/navigation"

export default function Admin(){

const[username,setUsername]=useState("")
const[password,setPassword]=useState("")
const router=useRouter()

function login(){

if(username==="admin" && password==="admin123"){
router.push("/admin/dashboard")
}

}

return(

<div className="p-10 max-w-sm mx-auto space-y-3">

<input
placeholder="username"
onChange={e=>setUsername(e.target.value)}
className="p-2 w-full bg-black"
/>

<input
placeholder="password"
type="password"
onChange={e=>setPassword(e.target.value)}
className="p-2 w-full bg-black"
/>

<button
onClick={login}
className="bg-saffron text-black px-4 py-2"
>
Login
</button>

</div>

)
}
