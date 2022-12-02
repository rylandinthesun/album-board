export default function Sidebar() {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <div className="p-4 w-80 bg-base-100 text-base-content flex flex-col justify-between">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Add instrument
              </span>
            </label>
            <div className="input-group">
              <select className="select select-bordered w-20 max-w-xs bg-neutral text-neutral-content">
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
              <input
                className="input input-bordered"
                placeholder="Name for instrument..."
              />
            </div>
            <label className="label">
              <span className="label-text-alt">Maximum of 6 characters</span>
            </label>

            <button className="btn btn-primary">Add</button>
          </div>

          <button className="btn btn-secondary btn-outline">Log out</button>
        </div>
      </div>
    </>
  )
}
