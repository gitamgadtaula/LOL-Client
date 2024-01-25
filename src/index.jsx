import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";
import App from "./App";
import logo from "./img/logo.png";
const Homepage = () => {
  const searchPlayer = () => {
    // Add your searchPlayer logic here
  };

  return (
    <>
      {/* Section 1 */}
      <section className="w-full px-8 text-white bg-slate-900">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium bg-white lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <img src={logo} alt="" className="w-16 h-12" />
              &nbsp;
              {/* <span className="mx-auto text-xl font-black leading-none text-white select-none">
                Siriusnet<span className="text-indigo-600">.</span>
              </span> */}
            </a>
            {/* <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
              >
                Home
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
              >
                Features
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
              >
                Pricing
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-400"
              >
                Blog
              </a>
            </nav> */}
          </div>

          {/* <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search player"
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-slate-700 border-2"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
                onClick={searchPlayer}
              >
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="px-2 py-32 bg-slate-800 md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Analyze LOL accounts</span>
                  <br hidden="md:block" />
                  <span className="block text-indigo-600 xl:inline">
                    &nbsp; stats and history.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-400 sm:max-w-md lg:text-xl md:max-w-3xl">
                  A serverless web app where users can access and analyze League
                  of Legends accounts stats and history.
                </p>

                <div className="relative flex flex-col sm:flex-row">
                  <div
                    onClick={event =>  window.location.href='/search'}
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Try now !
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  {/* <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img
                  src="https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full px-2 py-8 bg-slate-900">
        <div className="px-2 md:px-40 flex flex-col md:flex-row gap-24 items-center">
          <div className="">
            {/* <h2 className="text-xl md:text-4xl font-bold text-indigo-500">
              League of Legends <br />
            </h2>
            <h3 className="text-xl md:text-4xl font-semibold text-white">
              Watch in Action
            </h3> */}

            <h2 className="text-xl md:text-4xl font-bold mb-2  text-indigo-500 text-left">
              Features :
            </h2>
            <ul className="space-y-2 list-disc list-inside text-base capitalize text-gray-400 text-left">
              <li>Account search on all available regions and servers.</li>
              <li>
                General information displayed about the account : name, region,
                icon, level, rank (Solo/Duo and Flex).
              </li>
              <li>Automated MMR check on WhatIsMyMMR.</li>
              <li>
                Main champions played on the account displayed in order
                including their Mastery, Mastery Points and Last time played.
              </li>
              <li>
                Statistics visualized in different charts including Win/Loss
                ratio on main game modes as well as played lanes from the last
                20 recent games played.
              </li>
              <li>
                History of the last 20 recent games played with some very
                specific details including the Game Mode, Date, Duration,
                Result, Champion , Items , Runes, Score, Achievements, Players
                and more.
              </li>
              <li>
                Multiple accounts can be added to the account list for quick
                access.
              </li>
            </ul>
          </div>
          {/* <div className="relative">
            <img
              className="h-48 md:h-96 rounded-lg w-full"
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt033f5b26677f4e44/63eac734c0addb5053ec415f/02162023_LeagueChampPricingHeaderWEB_Banner.jpg"
              alt=""
            />
            <svg
              className="hidden md:block absolute top-2/4 left-2/4 pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              height="72"
              width="72"
            >
              <circle
                className="fill-white"
                cx="36"
                cy="36"
                r="36"
                fillOpacity=".8"
              />
              <path
                className="fill-indigo-500 drop-shadow-2xl"
                d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
              />
            </svg>
          </div> */}
        </div>
      </section>
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Homepage />);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/search",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
