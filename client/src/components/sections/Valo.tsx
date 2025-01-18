import Player from "../Player";
import { SiValorant } from "react-icons/si";
export default function Lol() {
  return (
    <section
      id="Valo"
      className="flex flex-row justify-center h-fit  items-center w-full  bg-valo p-0"
    >
      <div className=" flex flex-col justify-center items-center w-full h-fit md:h-screen m-0">
        <h1 className="text-4xl font-russo mt-36 flex items-center text-white">
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
