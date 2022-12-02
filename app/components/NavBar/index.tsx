import { Menu2 } from "tabler-icons-react"
import { Moon, Sun, Edit } from "tabler-icons-react"

export default function NavBar({
  albumName,
  toggleTheme,
}: {
  albumName: string
  toggleTheme: () => void
}) {
  return (
    <nav className="navbar border-b bg-base-100 fixed px-3">
      <div className="flex-1">
        <label className="btn btn-square btn-sm btn-outline" htmlFor="sidebar">
          <Menu2 size={20} />
        </label>

        <h1 className="text-3xl font-bold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-sky-600">
          A<span className="hidden md:inline-block">lbum</span>B
          <span className="hidden md:inline-block">oard</span>
        </h1>
      </div>
      <div>
        <div className="flex items-center">
          <div className="text-xl font-semibold">{albumName}</div>
          <button className="btn btn-sm btn-square btn-outline ml-2">
            <Edit size={20} />
          </button>
        </div>
        <label className="btn btn-sm btn-circle btn-outline swap swap-rotate ml-2">
          <input type="checkbox" onChange={toggleTheme} />
          <Moon className="swap-off" size={20} />
          <Sun className="swap-on" size={20} />
        </label>
      </div>
    </nav>
  )
}
