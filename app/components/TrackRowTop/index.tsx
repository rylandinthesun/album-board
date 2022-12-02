import TrackCellName from "~/components/TrackCellName"

export default function TrackRowTop({
  instruments,
}: {
  instruments: string[]
}) {
  return (
    <div className="w-full space-x-2 flex justify-between items-center">
      <div className="h-12 w-40 flex justify-center items-center space-x-2">
        <div className="text-2xl font-semibold text-accent">Songs</div>
      </div>
      {instruments.map((instrument: any, idx: any) => (
        <TrackCellName key={idx} instrument={instrument} />
      ))}
    </div>
  )
}
