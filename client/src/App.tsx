import About from "./components/sections/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/sections/Home";
import Lol from "./components/sections/Lol";
import Market from "./components/sections/Market";
import Valo from "./components/sections/Valo";
import Cs from "./components/sections/Cs";
import Teams from "./components/sections/Teams";
import Nav from "./components/Nav";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const updateState = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col justifiy-center items-center w-full h-auto md:h-screen overflow-x-hidden">
      <Header updateState={updateState} open={open} />
      {open && (
        <aside
          className="flex fixed overflow-hidden z-40 items-center justify-center w-full h-screen right-0 left-0 bg-white
         dark:bg-gray-950"
        >
          <Nav updateState={updateState}/>
        </aside>
      )}
      <Home />
      <About />
      <Teams />
      <Lol />
      <Valo />
      <Cs />
      <Market />
      <Footer />
    </div>
  );
}
