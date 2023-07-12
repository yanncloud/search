import React, { useState } from "react";
import { ReactElement } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import JsonData from "./data.json";

import {
  faArrowCircleRight,
  faCoffee,
  faEnvelope,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function JsonDataDisplayTeam(): ReactElement {
  //Map data from json
  const [search, setSearch] = useState("");
  console.log(search);

  const DisplayData = JsonData.content
    .filter((data) => {
      return search.toLowerCase() === ""
        ? data
        : data.name.includes(search) ||
        data.tag.includes(search)

    })
    .map(({ id, name, date, link, tag, type, bett }) => {
      return (
        <tr className="border-b dark:border-neutral-500" key={id} id={name}>
          <td className="whitespace-nowrap px-6 py-4 text-lg">
   

                  <iframe src={bett} width="440" height="280" allow="autoplay"></iframe>

          
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-lg">
            <a
              href={link}
              className="no-underline hover:underline ..."
            >
              {name}
            </a>
          </td>

          <td className="whitespace-nowrap px-6 py-4 text-lg">
            <a
             
            >
              {tag}
            </a>
          </td>

        </tr>
      );
    });

  //return data in react table-striped
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Suche
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Suche nach Fotos, Videos oder Vektorgrafiken"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                ></button>
              </div>
            </form>
            <br />
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xl">
                    Asset
                  </th>
                  <th scope="col" className="px-6 py-4 text-xl">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-xl">
                    Tags
                  </th>

                </tr>
              </thead>
              <tbody>{DisplayData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JsonDataDisplayTeam;
