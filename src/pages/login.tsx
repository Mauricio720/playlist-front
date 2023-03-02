export default function Login() {
  return (
    <main className="flex min-h-screen">
      <div className="bg-red-600 flex-1">...</div>
      <div className="w-96 flex flex-col justify-center p-4">
        <form className="w-full h-60">
          <div className="grid">
            <label htmlFor="email">Email</label>
            <input
              className="input__default"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="grid mt-4">
            <label htmlFor="email">Senha</label>
            <input
              className="input__default"
              type="password"
              name="email"
              id="email"
            />
          </div>

          <button className="w-full h-8 mt-8 bg-black text-white">
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
