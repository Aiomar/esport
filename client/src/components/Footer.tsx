import { FaRegCopyright,  } from "react-icons/fa6";
export default function Footer() {
  return (
  <footer className="bg-white  shadow-sm dark:bg-gray-950 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <FaRegCopyright className="mr-1" />
          {Date().toString().substring(10,Date().toString().length-29)}
          <a href="https://aidiomar.vercel.app/" className="hover:underline ml-1 mr-1">Developed By Omar Aidi</a>  
          .All Rights Reserved
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ml-1">
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
              <a href="#" className="hover:underline">Contact</a>
          </li>
      </ul>
      </div>
  </footer>
  );
}
