import { Main } from "components/Main";

export default function Profile() {
  return (
    <Main>
      <div className="flex justify-center">
        <form className="w-full max-w-lg">
          <div className="grid">
            <label htmlFor="name">Nome</label>
            <input className="input__default" type="text" name="name" />
          </div>

          <div className="grid">
            <label htmlFor="email">Email</label>
            <input className="input__default" type="email" name="email" />
          </div>

          <div className="grid">
            <label htmlFor="password">Senha</label>
            <input className="input__default" type="password" name="password" />
          </div>

          <div className="grid">
            <span>Categorias Favoritas</span>
            <div className="w-full min-h-10 border border-solid border-gray-300">
              ...
            </div>
          </div>

          <div className="grid">
            <span>Artistas Favoritas</span>
            <div className="w-full border border-solid border-gray-300">
              ...
            </div>
          </div>
          <button className="default__button">Salvar</button>
        </form>
      </div>
    </Main>
  );
}
