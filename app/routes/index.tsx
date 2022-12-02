import { useEffect, useState } from "react"
import { supabase } from "~/utils/db.server"

import AddTrackBtn from "~/components/AddTrackBtn"
import NavBar from "~/components/NavBar"
import Sidebar from "~/components/Sidebar"
import TrackRow from "~/components/TrackRow"
import TrackRowTop from "~/components/TrackRowTop"
import { LoaderFunction, redirect, useLoaderData } from "remix"
import { json } from "@remix-run/node"

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
        <div className="w-full h-auto overflow-x-auto mt-20 flex justify-start md:justify-center">
          <div className="grid space-x-4">
            <div
              className={`border-2 ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
              } p-3 inline-block rounded-md`}
            >
              <TrackRowTop instruments={data.instruments} />
              {data.songs.map((song: any, idx: any) => (
                <TrackRow
                  key={idx}
                  songName={song.name}
                  song_status={song.song_status}
                  notes={song.notes}
                  instruments={song.instruments}
                  tracks={song.tracks}
                />
              ))}
              <AddTrackBtn />
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  )
}
