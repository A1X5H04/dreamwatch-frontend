import './Navbar.css';
import DMLogo from '@/public/Logo.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="logo">
                <Image width={50}
                    height={50}
                    className='h-8'
                    src={DMLogo} alt="DW-Logo" /></div>
            <a href="#search">Search</a>
            <a href="#social">Social</a>
            <a href="#forum">Forum</a>
            <div className="auth-buttons">
                <button><Link href='/login'>Login</Link></button>
                <button className="signup-button"><Link href='/SignUp'>Sign Up</Link></button>
            </div>
        </div>
    );
};
