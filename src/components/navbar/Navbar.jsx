import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const link = (
    <>
      <li className='mr-3'>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ' '
          }
        >
          Home
        </NavLink>
      </li>
      <li>
      <NavLink
        to="/applied"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Applied Jobs
      </NavLink>
      </li>

    </>
  )
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* link area */}
            {link}
          </ul>
        </div>
        <a className="normal-case text-2xl font-extrabold">Career Hub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* link area */}
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn normal-case">Star Applying</a>
      </div>
    </div>
  )
}

export default Navbar
