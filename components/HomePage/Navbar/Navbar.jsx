import './Navbar.css'
import DMLogo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import DropNavbar from "./DropNavbar.jsx";
import SearchBtn from './SearchBtn';

export default function Navbar() {
  return (
    <DropNavbar>
        <div className="mr-20">
          <Link href="/">
            <Image width={45} height={45} className="" src={DMLogo} alt="DW-Logo" />
          </Link>
        </div>
        <div>
          <SearchBtn />
        </div>
        <div className="hover:bg-lime-200 btn px-6">
          <span className="text-slate-500 text-base">Login</span>
        </div>
    </DropNavbar>
  );
}
