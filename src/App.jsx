import { Suspense } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
const fetchPlayers = async () => {
  const res = await fetch("/players.json");

  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Main Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
        <SelectedPlayers />
      </div>
    </>
  );
}

export default App;
