import { useState } from "react"

import TrackCell from "~/components/TrackCell"
import TrackModal from "../TrackModal"

export default function TrackRow({
  songName,
  tracks,
  song_status,
  notes,
}: {
  songName: string
  tracks: any
  instruments: string[]
  song_status: string
  notes: string[]
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="divider m-0"></div>
      <div className="w-full space-x-2 flex items-center">
        <div className="h-12 w-40 tooltip" data-tip={songName}>
          <label
            htmlFor={`${songName}-modal`}
            className="btn btn-outline no-animation shadow-md w-full h-full normal-case"
          >
            <span className="text-[14px] h-full font-semibold w-full text-left truncate pt-4">
              {songName}
            </span>
          </label>
        </div>

        {tracks.map((track: any, idx: any) => (
          <TrackCell
            key={idx}
            instrument={track.instrument}
            status={track.status}
            name={track.name}
            songName={songName}
          />
        ))}
      </div>
      <TrackModal
        tracks={tracks}
        status={song_status}
        notes={notes}
        songName={songName}
        isModalOpen={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
