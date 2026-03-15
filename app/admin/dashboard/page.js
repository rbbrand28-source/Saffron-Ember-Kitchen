"use client"

import {useEffect,useState} from "react"
import AdminDishForm from "../../../components/AdminDishForm"

export default function Dashboard(){

const[dishes,setDishes]=useState([])

async function load(){
const res=await fetch("/api/dishes")
setDishes(await res.json())
}

useEffect(()=>{load()},[])

async function remove(id){
await fetch("/api/delete-dish",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({id})
})
load()
}

return(

<div className="p-10">

<h1 className="text-3xl text-saffron mb-6">
Admin Dashboard
</h1>

<AdminDishForm refresh={load}/>

<div className="mt-10 grid md:grid-cols-3 gap-6">

{dishes.map(d=>(
<div key={d.id}>

<img src={d.image}/>

<p>{d.name}</p>

<button
onClick={()=>remove(d.id)}
className="text-red-500"
>
Delete
</button>

</div>
))}

</div>

</div>

)
}
