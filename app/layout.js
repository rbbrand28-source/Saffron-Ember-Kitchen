import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata={
title:"Saffron Ember Kitchen"
}

export default function RootLayout({children}){
return(
<html>
<body>

<Navbar/>

{children}

<Footer/>

</body>
</html>
)
}
