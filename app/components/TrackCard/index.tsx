import { useState } from "react"

import TrackCell from "~/components/TrackCell"
import TrackProgressModal from "../TrackProgressModal"
import TrackInstrumentModal from "../TrackInstrumentModal"

import { Dots, AdjustmentsHorizontal, Plus } from "tabler-icons-react"

export default function TrackCard({
  songName,
  instruments,
  songStatus,
  notes,
}: {
  songName: string
  instruments: any
  songStatus: string
  notes: string[]
}) {
  const [showAddTrack, setShowAddTrack] = useState(false)

  return (
    <>
      <div
        className={`card w-72 shadow-lg border-2 ${
          songStatus === "in progress"
            ? "border-warning"
            : songStatus === "done"
            ? "border-success"
            : ""
        }`}
      >
        <div className="card-body w-full flex flex-col pt-5 px-5 pb-2">
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

          {instruments.map((track: any, idx: any) => (
            <TrackCell
              key={idx}
              instrument={track.instrument}
              status={track.status}
              name={track.name}
              songName={songName}
            />
          ))}
        </div>
        <div className="px-5 pb-5 w-auto flex items-center justify-between">
          <label
            htmlFor={`${songName}-progress-modal`}
            className="btn btn-sm btn-outline w-[48%]"
          >
            <AdjustmentsHorizontal size={20} />
          </label>
          <label
            htmlFor={`${songName}-instrument-modal`}
            className="btn btn-sm btn-primary w-[48%] ml-1"
          >
            <Plus size={20} />
          </label>
        </div>
      </div>
      <TrackProgressModal
        instruments={instruments}
        status={songStatus}
        songName={songName}
      />
      <TrackInstrumentModal
        instruments={instruments}
        songName={songName}
      />
    </>
  )
}
