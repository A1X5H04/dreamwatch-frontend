import "./Navbar.css";
import DMLogo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import DropNavbar from "./DropNavbar.jsx";
import user from "@/public/149071.png";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <DropNavbar>
      {/* <div className="navbar"> */}
      <div className="logo">
        <Link href="/">
          <Image
            width={45}
            height={45}
            className=""
            src={DMLogo}
            alt="DW-Logo"
          />
        </Link>
        {/* <span>DREAM <br /> WATCH</span> */}
      </div>
      <div className="nav-menu">
        <Link href="/search" className="ml-5">
          Anime
        </Link>
        <Link href="/social">Movies</Link>
        <button className="btn btn-square btn-sm">
          <FaSearch />
        </button>
      </div>

      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="m-1 flex">
          <Image src={user} alt="user-image" width={40} height={40} />
          <span className="capitalize mb-1 text-black font-semibold">
            User 1
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <span className="flex justify-between">
              <p className="text-base">Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="6" r="4" />
                  <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
                </g>
              </svg>
            </span>
          </li>
          <li>
            <span className="flex justify-between">
              <p className="text-base">Watch List</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16.028c0 1.22-1.38 1.93-2.372 1.221L12 18.229l-5.628 4.02c-.993.71-2.372 0-2.372-1.22z"
                  />
                </g>
              </svg>
            </span>
          </li>
        </ul>
      </div>

      {/* </div> */}
    </DropNavbar>
  );
}
