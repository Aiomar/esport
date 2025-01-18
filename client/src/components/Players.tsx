import Player from "./Player";
import { SiLeagueoflegends, SiValorant, SiCounterstrike } from "react-icons/si";
export default function Players() {
  return (
    <section
      id="Players"
      className="flex flex-col  items-center w-full h-auto bg-pink-100"
    >
      <h1 className="text-4xl font-russo mt-36">OUR PLAYERS</h1>
      <div className="flex flex-col  mt-10">
        <h1 className="mb-5 font-russo flex items-center">
          <SiLeagueoflegends className="mr-2" size={30} /> League of Legends
        </h1>
        <div className="flex flex-row">
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
        </div>
      </div>
      <div className="flex flex-col  mt-10">
        <h1 className="mb-5 font-russo flex items-center">
          <SiValorant className="mr-2" size={30} /> Valorant
        </h1>
        <div className="flex flex-row">
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
          <Player name={"player"} facebook={""} instagram={""} twitch={""} />
        </div>
      </div>
      <div className="flex flex-col  mt-10 mb-10">
        <h1 className="mb-5 font-russo flex items-center">
          <SiCounterstrike className="mr-2" size={30} /> CS2
        </h1>
        <div className="flex flex-row">
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
