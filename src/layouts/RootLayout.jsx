import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      <main style={{position:'relative', top: '10vh'}}>
          <Outlet/>
      </main>
    </div>
  )
}