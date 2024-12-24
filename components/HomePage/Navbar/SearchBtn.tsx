import React from "react";

const Search: React.FC = () => {
  return (
    <div className="relative group">
      {/* Parent Link */}
      <button className="text-gray-300 hover:text-blue-400">
        Search
      </button>

      {/* Dropdown Menu */}
      <div className="absolute top-full left-0 w-[180px] h-[150px] bg-white text-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
        <div className="p-4">
          <h3 className="font-bold text-gray-00 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.55 2.275M15 10v4.55M19.55 14.275L15 10m-6 4.55v-4.55m0 0l-4.55 2.275M9 10l-4.55 2.275"
              />
            </svg>
            Anime
          </h3>
          <ul className="mt-1 text-sm text-gray-500 ml-5">
            <li className="hover:text-gray-800 cursor-pointer">Top 100</li>
            <li className="hover:text-gray-800 cursor-pointer">Trending</li>
            <li className="hover:text-gray-800 cursor-pointer">Top Movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
