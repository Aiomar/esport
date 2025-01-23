import Player from "../Player";
import { SiCounterstrike } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
interface props {
  close: () => void;
}
export default function Cs({ close }: props) {
  return (
    <section
      id="Cs2"
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
      <div className="flex flex-col justify-center items-center m-0">
        <h1 className="text-4xl font-russo  flex items-center text-white mb-10">
          <SiCounterstrike className="mr-2" size={30} /> CS2
        </h1>
        <div className="flex flex-col md:flex-row">
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
        </div>
      </div>
    </section>
  );
}
