import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlist from "./pages/Playlist";
import PlayerPage from "./pages/PlayerPage";
import MiniPlayer from "./components/MiniPlayer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Playlist />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>

      <MiniPlayer />
    </BrowserRouter>
  );
}
export default App;