import {
  Circle,
  RotateClockwise,
  CircleCheck,
  LoaderQuarter,
} from "tabler-icons-react"

export default function TrackCell({
  status,
  instrument,
  name,
  songName,
}: {
  status: string
  instrument: string
  name: string
  songName: string
}) {
  const handleProgressClick = () => {
    status === "done"
  }

  return (
    <div className="w-12 h-12">
      {status === "in progress" ? (
        <button
          className="h-full btn btn-square btn-warning shadow-md hover:brightness-90"
          onClick={handleProgressClick}
        >
          <Circle className="w-6 h-6 animate-pulse" fill="red" />
        </button>
      ) : status === "done" ? (
        <button className="h-full btn btn-square btn-success shadow-md hover:brightness-90">
          <CircleCheck className="w-6 h-6" />
        </button>
      ) : (
        <button className="h-full btn btn-square btn-outline shadow-md">
          <Circle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
