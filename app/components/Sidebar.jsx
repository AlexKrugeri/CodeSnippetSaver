import { Link, NavLink } from "@remix-run/react";

export default function Sidebar() {
    const activeClassName = 'flex items-center px-2 py-2 text-gray-700 bg-gray-100 rounded-md';
    const inactiveClassName = 'flex items-center px-2 py-2 text-gray-600 rounded-md hover:bg-gray-200';
  return (
    <div className="md:visible flex flex-col w-full px-4 py-8 overflow-y-auto border-b md:border-r md:h-screen md:w-64 items-center md:items-start">
      <div className="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li className="flex items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
                to="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <span className="mx-4 font-medium">Dashboard</span>
              </NavLink>
            </li>

            <li className="flex items-center mt-5">
              <NavLink className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                } to="/snippets/new">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <span className="mx-4 font-medium whitespace-nowrap">
                  Add Snippet
                </span>
              </NavLink>
            </li>
            <hr className="invisible md:my-4 md:visible"></hr>
            <li className="flex items-center mt-5">
              <NavLink className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                } to="/settings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-4 font-medium">Settings</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
