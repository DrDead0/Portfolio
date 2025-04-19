"use client";
import Image from "next/image";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
    </>
  );
}
