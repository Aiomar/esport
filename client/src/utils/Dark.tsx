import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

export default function Dark() {
  const [dark, setDark] = useState(true);

  const updateMode = () => {
    setDark(!dark);
  };

  // Update the class on the <html> element when 'dark' changes
  useEffect(() => {
    const html = document.documentElement;
    html.className = dark ? "dark scroll-smooth" : "scroll-smooth";
  }, [dark]);

  return (
    <button
      className="flex items-center justify-center w-8 h-8 p-1"
      onClick={() => {
        updateMode();
      }}
    > 
      {dark ? (
        <IoSunnyOutline size={25} color="white" />
      ) : (
        <IoMoonOutline size={25} color="black" />
      )}
    </button>
  );
}
