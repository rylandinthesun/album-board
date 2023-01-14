import getEmoji from "~/helpers/get-emoji"

export default function TrackInstrumentModal({
  songName,
  instruments,
}: {
  songName: string
  instruments: any
}) {
  return (
    <>
      <input
        type="checkbox"
        id={`${songName}-instrument-modal`}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box sm:!max-w-md">
          <div className="flex w-full items-center">
            <h1 className="font-bold text-2xl text-accent truncate">
              {songName}
            </h1>
          </div>
          <label
            htmlFor={`${songName}-instrument-modal`}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="pt-4">
            <div className="overflow-auto max-h-52 space-y-2">
              {instruments.map((track: any) => (
                <div
                  key={track.name}
                  className={`w-full flex items-center justify-between p-2 rounded ${
                    track.status === "in progress"
                      ? "bg-warning text-warning-content"
                      : track.status === "done"
                      ? "bg-success text-success-content"
                      : "bg-base-200 text-base-content"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="font-bold">{track.name}</div>
                    <div className="italic font-light ml-2">
                      {track.instrument}
                    </div>
                    <div className="ml-2">{getEmoji(track.instrument)}</div>
                  </div>
                  <button className="btn btn-xs btn-circle btn-ghost">✕</button>
                </div>
              ))}
            </div>
            <div className="form-control w-full mt-4 space-y-3">
              <div className="input-group">
                <span>Instrument</span>
                <input
                  className="input input-bordered w-full"
                  placeholder="Guitar, drums, etc.."
                />
                <select className="select w-20 bg-base-300">
                  <option>🎸</option>
                  <option>🥁</option>
                  <option>🎹</option>
                  <option>🎤</option>
                  <option>🎙️</option>
                  <option>🎺</option>
                  <option>🎷</option>
                  <option>🎻</option>
                  <option>🪕</option>
                  <option>🪘</option>
                  <option>🔈</option>
                  <option>🎛️</option>
                </select>
              </div>
              <div className="input-group">
                <span>Name</span>
                <input
                  className="input input-bordered w-full"
                  placeholder="Member / Arist name"
                />
              </div>
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
