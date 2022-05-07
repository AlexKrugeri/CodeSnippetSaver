import { Link, Form } from '@remix-run/react';

export default function Header() {
  return (
    <nav className="fixed z-30 w-screen bg-white border-b-2 border-indigo-600">
      <div className="md:px-6 px-2 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button className="mr-4 md:p-2 text-gray-600 rounded cursor-pointer md:hidden ">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <Link to="/" className="flex items-center -textxl font-bold">
              <span className="text-blue-800">SnippetSaver</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="">
              <Form method="get">
                <label className="sr-only">Search</label>
                <div className="relative mt-1 md:w-64 w-28">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    className=" border  text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2"
                    placeholder="Search"
                  />
                </div>
              </Form>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
        </div>
      </div>
    </nav>
  );
}
