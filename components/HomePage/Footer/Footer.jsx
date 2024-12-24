'use client'
import { useContext } from 'react';
import './Footer.css';
import DisplayContext from '../../State/Context';
import { useTheme } from 'next-themes';

export default function Footer() {
    const { setTheme } = useTheme()
    const display = useContext(DisplayContext)

    function backgroungLight() {
        display.colorLight()    
    }

    function backgroundDark() {
        display.colorDark()
    }

    return (
        <footer className="footer">
            <div className="footer-section">
                <p>Site Theme</p>
                <div className="theme-options">
                    <button className='bg-slate-200 rounded' 
                    onClick={() => setTheme("light") }>A</button>
                    <button className='bg-slate-800 rounded'
                    onClick={() => setTheme("dark")}>A</button>
                </div>
            </div>
            <div className="footer-section">
                <a href="#">Donate</a>
                <a href="#">AniList.co</a>
                <a href="#">AniChart.net</a>
                <a href="#">Apps</a>
            </div>
            <div className="footer-section">
                <a href="#">Site Stats</a>
                <a href="#">Recommendations</a>
                <a href="#">API</a>
            </div>
            <div className="footer-section">
                <a href="#">Discord</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">GitHub</a>
            </div>
            <div className="footer-section">
                <a href="#">Add Data</a>
                <a href="#">Moderators</a>
                <a href="#">Contact</a>
                <a href="#">Terms & Privacy</a>
                <a href="#">Site Map</a>
            </div>
        </footer>
    );
};

