import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { usePlayer } from "../context/PlayerContext";


function PlayerPage() {
  const navigate = useNavigate();

  const {
    audioRef,
    currentSong,
    isPlaying,
    currentTime,
    duration,
    togglePlayPause,
    playNext,
    playPrevious,
  } = usePlayer();

  if (!currentSong) {
    navigate("/");
    return null;
  }

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSeek = (e) => {
    if (!duration || currentSong.comingSoon) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    audioRef.current.currentTime = percent * duration;
  };

  return (
    
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#3b1d6b] to-[#121212] px-6 text-white">
        <div className="mx-auto w-full max-w-sm">

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-8 flex items-center gap-2 text-neutral-300 hover:text-white"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          {/* Album Cover */}
          <div className="aspect-square w-full rounded-2xl bg-black p-2 shadow-2xl">
            <img
              src={currentSong.cover}
              alt={currentSong.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Song Info */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold">
              {currentSong.title}
            </h1>

            <p className="mt-2 text-neutral-400">
              {currentSong.artist}
            </p>
          </div>

          {/* Progress */}
          {!currentSong.comingSoon && (
            <div className="mt-8">
              <div
                onClick={handleSeek}
                className="h-1 w-full cursor-pointer rounded-full bg-neutral-700"
              >
                <div
                  className="h-1 rounded-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-2 flex justify-between text-xs text-neutral-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          )}

          {/* Controls / Coming Soon */}
          {currentSong.comingSoon ? (
            <div className="mt-10 rounded-2xl bg-white/5 p-6 text-center">
              <h2 className="text-2xl font-bold">
                🎵 Coming Soon
              </h2>

              <p className="mt-3 text-neutral-400">
                I'm still preparing this song just for you. ❤️
              </p>
            </div>
          ) : (
            <div className="mt-8 flex items-center justify-center gap-8">

              <button
                onClick={playPrevious}
                className="transition hover:scale-110"
              >
                <SkipBack size={28} />
              </button>

              <button
                onClick={togglePlayPause}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition active:scale-95"
              >
                {isPlaying ? (
                  <Pause size={28} fill="black" />
                ) : (
                  <Play size={28} fill="black" />
                )}
              </button>

              <button
                onClick={playNext}
                className="transition hover:scale-110"
              >
                <SkipForward size={28} />
              </button>

            </div>
          )}

        </div>
      </main>
    
  );
}

export default PlayerPage;