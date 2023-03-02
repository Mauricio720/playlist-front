import { Main } from "components/Main";
import SongItem from "components/SongItem";

export default function Songs() {
  return (
    <Main>
      <div className="input__default max-w-lg">
        <input
          className="p-2 border-none bg-transparent outline-none w-full h-full"
          type="text"
          name="search"
          placeholder="O que você procura?"
        />
      </div>
      <div className="flex">
        <SongItem />
      </div>
    </Main>
  );
}
