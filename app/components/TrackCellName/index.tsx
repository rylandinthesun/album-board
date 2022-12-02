export default function TrackRow({ instrument }: { instrument: string }) {
  const getEmoji = (instrument: string) => {
    if (instrument === "guitar" || instrument === "bass") return "🎸"
    if (instrument === "drums") return "🥁"
    if (instrument === "piano" || instrument === "keys") return "🎹"
    if (instrument === "vocals") return "🎤"
    if (instrument === "perc") return "🪘"
    return "🎵"
  }

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
