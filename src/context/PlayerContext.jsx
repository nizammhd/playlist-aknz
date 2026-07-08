import { createContext, useContext, useEffect, useRef, useState } from "react";
import songs from "../data/songs";
const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playlist] = useState(songs);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const playSong = async (song) => {
    if (!song) return;

    if (currentSong?.id !== song.id) {
      audioRef.current.src = song.audio;
      setCurrentSong(song);
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Playback failed:", err);
    }
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = async () => {
    if (!currentSong) return;

    if (isPlaying) {
      pauseSong();
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error(err);
      }
    }
  };
  const playNext = () => {
  if (!currentSong) return;

  const currentIndex = playlist.findIndex(
    (song) => song.id === currentSong.id
  );

  const nextSong = playlist[currentIndex + 1];

  if (nextSong) {
    playSong(nextSong);
  }
};

const playPrevious = () => {
  if (!currentSong) return;

  const currentIndex = playlist.findIndex(
    (song) => song.id === currentSong.id
  );

  const previousSong = playlist[currentIndex - 1];

  if (previousSong) {
    playSong(previousSong);
  }
};

  return (
   <PlayerContext.Provider
 value={{
  audioRef,
  currentSong,
  isPlaying,
  currentTime,
  duration,
  playSong,
  pauseSong,
  togglePlayPause,
  playNext,
  playPrevious,
}}
>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);