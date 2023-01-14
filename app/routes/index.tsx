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
  songs: [
    {
      name: "This is a long ass song name",
      song_status: "in progress",
      notes: [
        "Make sure this shit slaps",
        "Big snare sounds",
        "Add reverb to piano",
      ],
      instruments: [
        {
          instrument: "guitar",
          status: "in progress",
          name: "James",
        },
        { instrument: "guitar", status: "open", name: "Kirk" },
        {
          instrument: "bass",
          status: "open",
          name: "Robert",
        },
        { instrument: "drums", status: "done", name: "Lars" },
        { instrument: "vocals", status: "open", name: "James" },
        {
          instrument: "misc",
          status: "open",
          name: "Lars",
        },
      ],
    },
    {
      name: "Song 2",
      song_status: "in progress",
      notes: ["Soft guitar playing", "Towel drums"],
      instruments: [
        {
          instrument: "guitar",
          status: "done",
          name: "James",
        },
        { instrument: "guitar", status: "done", name: "Kirk" },
        {
          instrument: "bass",
          status: "done",
          name: "Robert",
        },
        { instrument: "drums", status: "open", name: "Lars" },
        { instrument: "vocals", status: "done", name: "James" },
        {
          instrument: "misc",
          status: "open",
          name: "Lars",
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
          <div className="px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-2 gap-y-4 auto-rows-auto">
            {data.songs.map((song: any, idx: any) => (
              <TrackCard
                key={idx}
                songName={song.name}
                songStatus={song.song_status}
                notes={song.notes}
                instruments={song.instruments}
              />
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
