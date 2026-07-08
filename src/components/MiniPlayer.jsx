import { useLocation, useNavigate } from "react-router-dom";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { usePlayer } from "../context/PlayerContext";

function MiniPlayer() {
  const navigate = useNavigate();
    const location = useLocation();

if (location.pathname === "/player") return null;
  const {
    currentSong,
    isPlaying,
    togglePlayPause,
    playNext,
    playPrevious,
  } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#181818] px-4 py-3">
      <div className="mx-auto flex max-w-sm items-center justify-between">

        {/* Song Info */}
        <div
          onClick={() => navigate("/player")}
          className="flex flex-1 cursor-pointer items-center gap-3"
        >
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="h-12 w-12 rounded object-cover"
          />

          <div>
            <h3 className="text-sm font-semibold text-white">
              {currentSong.title}
            </h3>

            <p className="text-xs text-neutral-400">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">

          <button onClick={playPrevious}>
            <SkipBack size={20} />
          </button>

          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <Pause size={22} fill="white" />
            ) : (
              <Play size={22} fill="white" />
            )}
          </button>

          <button onClick={playNext}>
            <SkipForward size={20} />
          </button>

        </div>

      </div>
    </div>
  );
}

export default MiniPlayer;