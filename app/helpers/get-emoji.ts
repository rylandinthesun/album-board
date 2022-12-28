export default function getEmoji(instrument: string) {
  if (instrument === "guitar" || instrument === "bass") return "🎸"
  if (instrument === "drums") return "🥁"
  if (instrument === "piano" || instrument === "keys") return "🎹"
  if (instrument === "vocals") return "🎤"
  if (instrument === "perc") return "🪘"
  return "🎵"
}
