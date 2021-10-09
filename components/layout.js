import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
      <main className="layout">
        <Navbar/>
        {children}
        </main>

  )
}