import { useNavigate } from "react-router-dom";
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { usePlayer } from "../context/PlayerContext";

function SongRow({ song, index }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const {
    playSong,
    currentSong,
    isPlaying,
  } = usePlayer();

  const isCurrentSong = currentSong?.id === song.id;

  return (
    <div
      onClick={() => {
        playSong(song);
        navigate("/player");
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-[40px_1fr_50px] items-center rounded-md px-2 py-3 transition hover:bg-white/10 cursor-pointer"
    >
      {/* Number / Icon */}
      <div className="flex items-center justify-center text-neutral-400">
        {isCurrentSong && isPlaying ? (
          <Volume2 size={16} className="text-[#1DB954]" />
        ) : hover ? (
          <Play size={16} fill="white" />
        ) : (
          index + 1
        )}
      </div>

      {/* Song Info */}
      <div className="flex items-center gap-3">
        <img
          src={song.cover}
          alt={song.title}
          className="h-12 w-12 rounded object-cover"
        />

        <div>
          <h3
            className={`font-medium ${
              isCurrentSong ? "text-[#1DB954]" : "text-white"
            }`}
          >
            {song.title}
          </h3>

          <p className="text-sm text-neutral-400">
            {song.artist}
          </p>
        </div>
      </div>

      {/* Duration */}
      <div className="text-right text-sm text-neutral-400">
        {song.duration}
      </div>
    </div>
  );
}

export default SongRow;