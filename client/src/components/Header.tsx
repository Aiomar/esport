import Nav from "./Nav";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Dark from "../utils/Dark";

interface headerProps {
  updateState: () => void;
  open: boolean;
}

export default function Header({ updateState, open }: headerProps) {
  return (
    <header
      className="flex flex-row md:justify-center md:items-center fixed z-50 w-full h-20 p-4 md:h-20 
    bg-white dark:bg-gray-950"
    >
      <div className="flex items-center md:hidden">
        <button
          onClick={() => {
            updateState();
          }}
        >
          {open ? (
            <IoMdClose className="text-gray-950 dark:text-white" size={35} />
          ) : (
            <BsList className="text-gray-950 dark:text-white" size={35} />
          )}
        </button>
      </div>
      <a href="" className="flex flex-start items-center ml-5 md:ml-0 md:mr-5">
        <img src="logo.svg" className="md:mr-3 h-10 md:h-9" alt="" title="PINK DRAGONS"/>
      </a>
      <div className="hidden md:flex border-gray-200 px-4 lg:px-6 py-2.5">
        <Nav updateState={() => {}} />
      </div>
      <div className="ml-auto md:ml-0 mt-auto mb-auto">
        <Dark />
      </div>
    </header>
  );
}
