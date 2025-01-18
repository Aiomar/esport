import Player from "../Player";
import { SiCounterstrike } from "react-icons/si";
export default function Lol() {
  return (
    <section
      id="Cs2"
      className="flex flex-col  items-center w-full bg-cs h-fit"
    >
      <div className=" flex flex-col justify-center items-center  w-full h-fit md:h-screen m-0">
        <h1 className="text-4xl font-russo mt-36 flex items-center text-white mb-10">
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
