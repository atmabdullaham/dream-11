import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
const fetchPlayers = async () => {
  const res = await fetch("/players.json");

  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [avaliableTaka, setAvabilableTaka] = useState(600000000);

  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Navbar */}
        <Navbar avaliableTaka={avaliableTaka}></Navbar>
        <div className="flex justify-between items-center py-4">
          {toggle ? (
            <h1 className="text-2xl font-bold">Available Players</h1>
          ) : (
            <h1 className="text-2xl font-bold">
              Selected Players <span>(0/6)</span>
            </h1>
          )}

          <div>
            <button
              onClick={() => setToggle(true)}
              className={`btn ${
                toggle ? "bg-[#E7FE29]" : "bg-white"
              } rounded-xl rounded-r-none border-r-0 border-2`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`btn ${
                toggle ? "bg-white" : "bg-[#E7FE29]"
              } rounded-xl rounded-l-none border-l-0 border-2`}
            >
              Selected(0)
            </button>
          </div>
        </div>
        {toggle === true ? (
          <Suspense fallback={<div>Loading...</div>}>
            <AvailablePlayers
              setAvabilableTaka={setAvabilableTaka}
              avaliableTaka={avaliableTaka}
              playersPromise={playersPromise}
            />
          </Suspense>
        ) : (
          <SelectedPlayers />
        )}
        {/* Main Section */}
      </div>
    </>
  );
}

export default App;
