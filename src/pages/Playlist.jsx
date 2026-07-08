import songs from "../data/songs";
import SongRow from "../components/SongRow";
import playlistCover from "../assets/covers/playlist-cover.jpg";
import { Clock3, Play } from "lucide-react";

function Playlist() {
  return (
    
    <main className="min-h-screen bg-[#121212] text-white pb-28">

      {/* Header */}
      <section className="bg-gradient-to-b from-[#5b21b6] via-[#3b1d6b] to-[#121212]">

        <div className="px-5 pt-12 pb-8">

          <div className="flex flex-col items-center">

            <img
              src={playlistCover}
              alt="Playlist Cover"
              className="h-44 w-44 rounded-lg object-cover shadow-2xl"
            />

            <p className="mt-6 text-xs uppercase tracking-widest text-neutral-300">
              Playlist
            </p>

            <h1 className="mt-2 text-center text-4xl font-black">
              For Akansha ❤️
            </h1>

            <p className="mt-3 text-center text-sm text-neutral-300">
              Songs I recorded specially for you.
            </p>

            <p className="mt-2 text-xs text-neutral-400">
              Nishamudheen • 5 Songs • 22 min
            </p>

            <button
              className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#1DB954]"
            >
              <Play fill="black" color="black" size={22} />
            </button>

          </div>

        </div>

      </section>

      {/* Song Table */}
      <section className="px-4 py-5">

        <div className="grid grid-cols-[40px_1fr_40px] border-b border-white/10 pb-3 text-xs uppercase tracking-widest text-neutral-400">

          <span>#</span>

          <span>Title</span>

          <div className="flex justify-end">
            <Clock3 size={14} />
          </div>

        </div>

        <div className="mt-2">
          {songs.map((song, index) => (
            <SongRow
              key={song.id}
              song={song}
              index={index}
            />
          ))}
        </div>

      </section>

    </main>
    
  );
}

export default Playlist;