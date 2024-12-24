import Search from '@/components/HomePage/Navbar/SearchBtn';
import './Navbar.css';
import DMLogo from '@/public/Logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <Link href='/'><Image width={50} height={50} className='' src={DMLogo} alt="DW-Logo" /></Link>
            </div>
            <Link href="/search"><Search /></Link>
            <Link href="/social">Social</Link>
            <Link href="/forum">Forum</Link>
            <div className="auth-buttons">
                <Link href='/login'><button>Login</button></Link>
                <Link href='/SignUp'><button className="signup-button">Sign Up</button></Link>
            </div>
        </div>
    );
};
