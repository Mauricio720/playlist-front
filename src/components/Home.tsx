import { Main } from "components/Main";
import Playlist from "./Playlist";
import SongItem from "./SongItem";

export default function Home() {
  return (
    <Main>
      <div className="">
        <div className="input__default max-w-lg">
          <input
            className="p-2 border-none bg-transparent outline-none w-full h-full"
            type="text"
            name="search"
            placeholder="O que você procura?"
          />
        </div>

        <div className="mt-8">
          <h2 className="">Playlists mais curtidas</h2>
          <Playlist />
        </div>

        <div className="mt-8">
          <h2 className="">Músicas mais curtidas</h2>
          <SongItem />
        </div>

        <div className="mt-8">
          <h2 className="">Categorias Favoritas</h2>
          <SongItem />
        </div>
      </div>
    </Main>
  );
}
