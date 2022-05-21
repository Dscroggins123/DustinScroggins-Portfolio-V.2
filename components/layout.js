import { useEffect } from "react";
import Loader from "./loader";
import Navbar from "./navbar";

export default function Layout({ children }) {
  useEffect(() => {}, []);
  return (
    <main className="layout">
      <Loader />
      <Navbar />
      {children}
    </main>
  );
}
