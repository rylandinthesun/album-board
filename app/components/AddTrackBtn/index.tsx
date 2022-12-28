import { CirclePlus } from "tabler-icons-react"

export default function AddTrackBtn() {
  return (
    <>
      {/* <div className="divider m-0"></div> */}
      <label
        htmlFor="add-song-modal"
        className="btn btn-primary w-full shadow-md flex items-center"
      >
        <CirclePlus className="mr-1" />
        Add Track
      </label>
      <input type="checkbox" id="add-song-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="font-bold text-lg">Song name</h1>
          <label
            htmlFor="add-song-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-4">
            <input
              className="input input-bordered w-full"
              placeholder="Your next #1 hit single..."
            />
          </div>
          <div className="modal-action">
            <label htmlFor="add-song-modal" className="btn btn-ghost">
              Cancel
            </label>
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </>
  )
}
