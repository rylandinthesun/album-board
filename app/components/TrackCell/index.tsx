import { Circle, CircleCheck } from "tabler-icons-react"
import getEmoji from "~/helpers/get-emoji"

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
    <div className="w-full flex items-center justify-between">
      <div className="w-24 space-x-2 flex items-center justify-between pr-2">
        <div className="text-bas capitalize font-semibold">{instrument}</div>
        <div className="text-lg">{getEmoji(instrument)}:</div>
      </div>
      {status === "in progress" ? (
        <button
          className="h-full btn btn-square btn-sm btn-warning shadow-md hover:brightness-90"
          onClick={handleProgressClick}
        >
          <Circle className="animate-pulse" fill="red" size={20} />
        </button>
      ) : status === "done" ? (
        <button className="h-full btn btn-square btn-sm btn-success shadow-md hover:brightness-90">
          <CircleCheck size={20} />
        </button>
      ) : (
        <button className="h-full btn btn-square btn-sm btn-outline shadow-md">
          <Circle size={20} />
        </button>
      )}
    </div>
  )
}
