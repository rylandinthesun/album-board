import { Dots } from "tabler-icons-react"

import TrackCell from "~/components/TrackCell"
import TrackModal from "../TrackModal"

export default function TrackCard({
  songName,
  tracks,
  songStatus,
  notes,
}: {
  songName: string
  tracks: any
  instruments: string[]
  songStatus: string
  notes: string[]
}) {
  return (
    <>
      <div
        className={`card w-64 shadow-lg border-2 ${
          songStatus === "in progress"
            ? "border-warning"
            : songStatus === "done"
            ? "border-success"
            : ""
        }`}
      >
        <div className="card-body w-full flex flex-col p-5">
          <div className="w-full flex items-center justify-between space-x-2 pb-2 mb-1 border-b">
            <div className="overflow-hidden">
              <h2 className="w-full h-full normal-case text-lg font-bold text-left truncate overflow-hidden">
                {songName}
              </h2>
            </div>
            <label
              htmlFor={`${songName}-modal`}
              className="btn btn-sm btn-outline btn-square"
            >
              <Dots size={20} />
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
      </div>
      <TrackModal
        tracks={tracks}
        status={songStatus}
        notes={notes}
        songName={songName}
      />
    </>
  )
}
