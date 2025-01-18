import { FaFacebook, FaTwitch, FaInstagram } from "react-icons/fa";

interface playerProps {
  name: string;
  facebook: string;
  instagram: string;
  twitch: string;
}
export default function Player({
  name,
  facebook,
  instagram,
  twitch,
}: playerProps) {
  return (
    <div
      className="flex flex-col items-center w-60 h-60 p-5 hover:border rounded-lg 
      backdrop-blur-sm hover:backdrop-blur-md shadow-md shadow-white hover:shadow-md hover:shadow-pink-600
      ml-5 hover:scale-105 hover:border-pink-500 mb-5 md:mb-0"
    >
      <img src="play.jpg" alt="" className="w-24 rounded-full mt-2" />
      <p className="text-white text-xl font-russo">{name}</p>
      <div className="flex flex-row mt-3">
        <a href={facebook}>
          <FaFacebook size={30} color="white" />
        </a>
        <a href={instagram} className="ml-2">
          <FaInstagram size={30} color="white" />
        </a>
        <a href={twitch} className="ml-2">
          <FaTwitch size={30} color="white" />
        </a>
      </div>
    </div>
  );
}
