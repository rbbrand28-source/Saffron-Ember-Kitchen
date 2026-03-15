"use client"
import Link from "next/link"

export default function Navbar(){
return(
<nav className="flex justify-between p-6 bg-black">
<h1 className="text-saffron text-xl">Saffron Ember Kitchen</h1>

<div className="flex gap-6">
<Link href="/">Home</Link>
<Link href="/menu">Menu</Link>
<Link href="/gallery">Gallery</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
</div>
</nav>
)
}
