import { Trash } from "tabler-icons-react"

export default function TrackModal({
  status,
  songName,
  tracks,
}: {
  status: string
  notes: string[]
  songName: string
  tracks: any
}) {
  let amountOfSongsDone = tracks.filter(
    (track: any) => track.status === "done"
  ).length

  let progressBarValue = Math.floor((amountOfSongsDone / tracks.length) * 100)

  return (
    <>
      <input
        type="checkbox"
        id={`${songName}-modal`}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:!w-[96%] sm:!max-w-2xl">
          <div className="flex w-full items-center">
            <h1 className="font-bold text-2xl text-accent truncate">
              {songName}
            </h1>
          </div>
          <label
            htmlFor={`${songName}-modal`}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-4">
            <div className="stats stats-vertical sm:stats-horizontal border shadow w-full">
              <div className="stat place-items-center">
                <div className="stat-title">Song status</div>
                <div className="stat-value text-warning capitalize">
                  {status}
                </div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Song progress</div>
                <div className="stat-value text-warning">
                  {progressBarValue}%
                </div>
                <div className="stat-desc">
                  <span className="font-bold">{100 - progressBarValue}% </span>
                  left until finished
                </div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Instruments</div>
                <div className="stat-value text-warning">
                  {amountOfSongsDone}
                </div>
                <div className="stat-desc">
                  of <span className="font-bold">{tracks.length}</span> tracked
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor={`${songName}-modal`} className="btn btn-ghost">
              Cancel
            </label>
            <button className="btn btn-error gap-2">
              <Trash /> Delete song
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
