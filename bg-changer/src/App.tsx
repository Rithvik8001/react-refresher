import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#e0f2fe");

  return (
    <div
      className="h-screen w-full relative"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center px-2 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("#fca5a5");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:bg-red-300 "
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("#86efac");
            }}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:bg-green-300"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("#a5f3fc");
            }}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg hover:bg-cyan-200"
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}
