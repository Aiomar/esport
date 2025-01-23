import Player from "../Player";
import { SiValorant } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
interface props {
  close: () => void;
}
export default function Valo({ close }: props) {
  return (
    <section
      id="Valo"
      className="flex flex-col fixed z-40 backdrop-blur-xl  w-full 
      h-fit md:h-screen p-0 top-0 left-0"
    >
      <button
        className=""
        type="button"
        onClick={() => {
          close();
        }}
      >
        <IoMdClose
          title="close"
          size={30}
          className="rounded-3xl text-red-500 mt-32 ml-10"
        />
      </button>
      <div className=" flex flex-col justify-center items-center w-full h-fit md:h-screen m-0">
        <h1 className="text-4xl font-russo flex items-center text-white">
          <SiValorant className="mr-2" size={30} /> VALORANT
        </h1>
        <div className="flex flex-col  mt-10">
          <div className="flex flex-col md:flex-row mb-5">
            <Player name={"player"} facebook={""} instagram={""} twitch={""} />
            <Player name={"player"} facebook={""} instagram={""} twitch={""} />
            <Player name={"player"} facebook={""} instagram={""} twitch={""} />
            <Player name={"player"} facebook={""} instagram={""} twitch={""} />
            <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          </div>
        </div>
      </div>
    </section>
  );
}
