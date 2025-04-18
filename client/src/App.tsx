import About from "./components/sections/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import Market from "./components/sections/Market";
import Teams from "./components/sections/Teams";
import Nav from "./components/Nav";
import { useState } from "react";

export default function App() {
  // mobile navigation 
  const [open, setOpen] = useState(false);
  const updateState = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col justfiy-center items-center w-full h-auto md:h-screen overflow-x-hidden md:overflow-x-visible">
      <Header updateState={updateState} open={open} />
      {open && (
        <aside
          className="flex fixed overflow-hidden z-40 items-center justify-center w-full h-screen right-0 left-0 bg-white
         dark:bg-gray-950"
        >
          <Nav updateState={updateState} />
        </aside>
      )}
      <Home />
      <About />
      <Teams />
      <Market />
      <Footer />
    </div>
  );
}
