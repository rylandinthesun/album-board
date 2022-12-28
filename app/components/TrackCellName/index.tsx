import getEmoji from "~/helpers/get-emoji"

export default function TrackRow({ instrument }: { instrument: string }) {
  return (
    <div className="h-20 w-12">
      <div className="h-full">
        <div className="h-full w-full p-1 flex flex-col justify-center items-center">
          <div className="text-xl">{getEmoji(instrument)}</div>
          <div className="text-[11px] capitalize font-bold truncate">
            {instrument}
          </div>
        </div>
      </div>
    </div>
  )
}
