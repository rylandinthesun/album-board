import { useEffect, useState } from "react"
import { supabase } from "~/utils/db.server"

import AddTrackBtn from "~/components/AddTrackBtn"
import NavBar from "~/components/NavBar"
import Sidebar from "~/components/Sidebar"
import TrackCard from "~/components/TrackCard"
import TrackRowTop from "~/components/TrackRowTop"
import { LoaderFunction, redirect, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

let songsData = {
  album_name: "Untitled Album",
  instruments: ["guitar", "bass", "drums", "piano", "vocals", "misc"],
  songs: [
    {
      name: "This is a long ass song name",
      song_status: "in progress",
      notes: [
        "Make sure this shit slaps",
        "Big snare sounds",
        "Add reverb to piano",
      ],
      tracks: [
        {
          instrument: "guitar",
          status: "in progress",
          name: "Ry",
        },
        {
          instrument: "bass",
          status: "open",
          name: "Eric",
        },
        { instrument: "drums", status: "done", name: "Jake" },
        { instrument: "piano", status: "open", name: "Mat" },
        { instrument: "vocals", status: "open", name: "Mat" },
        {
          instrument: "misc",
          status: "open",
          name: "Jake",
        },
      ],
    },
    {
      name: "Song 2",
      song_status: "in progress",
      notes: ["Soft guitar playing", "Towel drums"],
      tracks: [
        {
          instrument: "guitar",
          status: "done",
          name: "Ry",
        },
        {
          instrument: "bass",
          status: "done",
          name: "Eric",
        },
        { instrument: "drums", status: "open", name: "Jake" },
        { instrument: "piano", status: "done", name: "Mat" },
        { instrument: "vocals", status: "done", name: "Mat" },
        {
          instrument: "misc",
          status: "open",
          name: "Jake",
        },
      ],
    },
  ],
}

// export const loader: LoaderFunction = async () => {
//   const user = supabase.auth.user()
//   // if (!user) return redirect("/login")
//   return user
// }

export default function Home() {
  const [data, setData] = useState(songsData)
  // const [user, setUser] = useState({})
  const [theme, setTheme] = useState("light")

  // useEffect(() => {
  //   const user = supabase.auth.user()

  //   if (user) {
  //     setUser(user)
  //   }
  // }, [user])

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className="drawer" data-theme={theme}>
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavBar albumName={data.album_name} toggleTheme={toggleTheme} />
        <div className="w-full h-[88vh] pt-20">
          <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-2 gap-y-4">
            {data.songs.map((song: any, idx: any) => (
              <TrackCard
                key={idx}
                songName={song.name}
                songStatus={song.song_status}
                notes={song.notes}
                instruments={song.instruments}
                tracks={song.tracks}
              />
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
