export default function SongItem() {
  return (
    <div className="flex flex-col flex-wrap cursor-pointer mt-4">
      <div className="w-48 h-32 flex flex-col bg-red-700 m-2 rounded-lg overflow-hidden">
        <div className="flex-1 bg-yellow-400"></div>
        <span className="w-full text-white text-center h-6">Titulo</span>
      </div>
    </div>
  );
}
