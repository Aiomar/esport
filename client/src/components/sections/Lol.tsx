import Player from "../Player";
import { SiLeagueoflegends } from "react-icons/si";
export default function Lol() {
  return (
    <section
      id="Lol"
      className="flex flex-col md:flex-row  items-center justify-center w-full h-fit md:h-screen bg-lol p-0"
    >
      <div className="flex flex-col justify-center items-center w-full h-fit md:h-screen">
        <h1 className="text-4xl font-russo mt-10 flex items-center text-white">
          <SiLeagueoflegends className="mr-2" size={30} /> LEAGUE OF LEGENDS
        </h1>
        <div className="flex flex-col  mt-10">
          <div className="flex flex-col md:flex-row">
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
