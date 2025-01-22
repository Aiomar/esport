import { GiTunisia } from "react-icons/gi";
import { FaRegCopyright, FaYoutube } from "react-icons/fa6";
import { SiMaildotru } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaTwitch,
  FaDiscord,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      id="Contact"
      className="flex sm:flex-col md:flex-row items-center w-full h-80 md:h-auto bg-gray-100 dark:bg-gray-950 md:pt-1 p-10 md:p-0"
    >
      <div className="flex flex-col md:flex-row md:float-start mt-2 md:ml-10 w-60 h-64">
        <div className="flex flex-col">
          <img src="logo.svg" className=" w-20 mr-10  " alt="" />
          <span className="dark:text-gray-300 mt-2 flex flex-row items-center">
            <IoLocationOutline size={20} />
            Address : Kairouan - Tunisia <GiTunisia />
          </span>
          <span className="dark:text-gray-300 mt-2 flex flex-row items-center">
            <SiMaildotru className="mr-2" />
            Email : team@email.com
          </span>
          <span className="dark:text-gray-300 mt-2 flex flex-row items-center">
            <FaWhatsapp className="mr-2" /> Whats App : +216 23 456 878
          </span>
          <span className="dark:text-gray-300 mt-2 flex flex-row items-center w-96 font-mono text-sm ">
            <FaRegCopyright className="mr-1" /> <p className="mr-2">2025 </p>
            PINK DRAGONS , All rights reserved
          </span>
        </div>
        <div className="flex flex-row  mt-10 justify-center items-center space-x-6 ml-16 md:ml-56">
          <a href="">
            <FaFacebook size={30} className="text-gray-950 dark:text-white" />
          </a>
          <a href="" className="ml-2">
            <FaInstagram size={30} className="text-gray-950 dark:text-white" />
          </a>
          <a href="" className="ml-2">
            <FaYoutube size={30} className="text-gray-950 dark:text-white" />
          </a>
          <a href="" className="ml-2">
            <FaTwitch size={30} className="text-gray-950 dark:text-white" />
          </a>
          <a href="" className="ml-2">
            <FaDiscord size={30} className="text-gray-950 dark:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
