export default function Playlist() {
  return (
    <div className="flex flex-wrap cursor-pointer">
      <div className="w-48 bg-red-700 m-2">
        <div className="w-full h-32 grid grid-cols-2 gap-1">
          <div className="bg-yellow-400">...</div>
          <div className="bg-yellow-400">...</div>
          <div className="bg-yellow-400">...</div>
          <div className="bg-yellow-400">...</div>
        </div>
        <span className="w-full text-white text-center">Titulo</span>
        <div className=""></div>
      </div>
    </div>
  );
}
