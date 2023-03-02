import { ReactNode, useState } from "react";

export interface ParentElement {
  children: ReactNode;
}

export default function Player() {
  const [resize, setResize] = useState(false);

  return (
    <div
      className={`w-full ${
        resize ? "h-screen" : ""
      } flex flex-col justify-end bg-black absolute bottom-0 transition-all ease-in-out duration-1000`}
    >
      <div className="p-4 flex items-center w-full bg-rose-700">
        <div className="flex flex-1 items-center ">
          <div className="w-20 h-20 bg-yellow-400"></div>
          <div className="h-full ml-3 flex flex-col  bg-slate-50">
            <span className="font-bold text-lg">Numb</span>
            <span>Meteora</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center bg-slate-600">
          <div className="flex">
            <div className="w-10 h-10 bg-black ml-4 mr-4"></div>
            <div className="w-10 h-10 bg-black ml-4 mr-4"></div>
            <div className="w-10 h-10 bg-black ml-4 mr-4"></div>
          </div>
          <div className="mt-2 w-full h-2 bg-red-600"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div
            onClick={() => setResize(!resize)}
            className="w-8 h-8 cursor-pointer bg-yellow-300"
          ></div>
        </div>
      </div>
    </div>
  );
}
