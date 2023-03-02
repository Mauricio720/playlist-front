import ArtistItem from "components/ArtistItem";
import { Main } from "components/Main";

export default function Artists() {
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

      <div className="flex flex-wrap">
        <ArtistItem />
      </div>
    </Main>
  );
}
