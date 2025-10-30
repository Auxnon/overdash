import { useState } from "react";
import "./App.css";
import { BrickWallFire } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);
  const [side, setSide] = useState(true);

  return (
    <>
      <div className="absolute left-0 top-0 w-screen h-screen overflow-hidden bg-black-500">
        <div className="rounded-md w-full h-full flex z-0">
          <button className="absolute" onClick={() => setSide((s) => !s)}>
            {"" + side}
          </button>

          <div
            className={
              " rounded-md  m-2 w-3xs " + (side ? "hidden" : "flex-initial")
            }
          >
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <div className="bg-white rounded-3xl flex-1 flex m-2 z-0">
            <div className="bg-red-500 rounded-xl flex-1 m-5 gradient-box shadow-xl/20 neo">
              <button className="p-2 bg-red-500 m-5">
                <BrickWallFire className="w-10 h-10" />
              </button>

              <button className="p-2 bg-red-500 m-5">
                <BrickWallFire className="w-10 h-10" />
              </button>



              <button className="p-2 bg-red-500 m-5">
                <BrickWallFire className="w-10 h-10" />
              </button>
              
            </div>
            <div className="rounded-xl flex-1 m-5 neo"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
