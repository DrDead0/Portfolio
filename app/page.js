"use client";
import Image from "next/image";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
