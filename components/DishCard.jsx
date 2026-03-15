export default function DishCard({dish}){

return(
<div className="bg-zinc-900 rounded-xl overflow-hidden">

<img
src={dish.image}
className="w-full h-56 object-cover"
/>

<div className="p-4">
<h3 className="text-xl text-saffron">{dish.name}</h3>
<p className="text-gray-400">{dish.description}</p>
</div>

</div>
)
}
