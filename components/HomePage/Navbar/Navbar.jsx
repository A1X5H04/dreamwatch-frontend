import './Navbar.css';
import DMLogo from '@/public/Logo.png'
import Image from 'next/image';
import Link from 'next/link';
import DropNavbar from './DropNavbar.jsx';
import user from '@/public/149071.png'
import DropDown from './DropDown';



export default function Navbar() {
    return (
        <DropNavbar>
            {/* <div className="navbar"> */}
            <div className="logo">
                <Link href='/'><Image width={45} height={45} className='' src={DMLogo} alt="DW-Logo" /></Link>
                {/* <span>DREAM <br /> WATCH</span> */}
            </div>
            <div className='btn'>
                <Link href="/search" className='ml-5' >Search</Link>
                <Link href="/social" >Social</Link>
                <span className='py-2 px-3 rounded-full bg-slate-800 m-1 hover:cursor-pointer'>
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="white"><path d="m11.271 11.978l3.872 3.873a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0s-2.728 7.17 0 9.9a6.96 6.96 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738" /></svg>
                </span>
            </div>
            <div className='flex '>
                {/* apply src for user image */}
                <Image src={user} alt="user-image" width={40} height={40} />
                <span className='capitalize mb-1 text-black font-semibold'>User 1</span>
                <DropDown />
            </div>
            {/* </div> */}
        </DropNavbar>
    );
};
