import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import '../../styles/layout.css';
import Timeline from "../Timeline/Timeline.tsx";
import {WelcomeCitizen} from "../WelcomeCitizen/WelcomeCitizen.tsx";


const Layout: React.FC = () => {
    return (
        <>
            <div className="grid grid-areas-layout grid-cols-4 grid-rows-[auto_auto_1fr_auto] min-h-dvh ">
                <nav className="grid-in-nav col-span-4">
                    <Navbar/>
                </nav>
                <header className="grid-in-header col-span-4">
                    <Header/>
                </header>
                <main className="grid-in-main col-span-4 sm:col-span-4">
                    <div className="py-4"></div>
                    <WelcomeCitizen/>
                    <div className="
                            py-16
                            sm:p-16
                            md:p-24
                            lg:p-32
                            ">
                        <div
                            className="overflow-y-auto min-h-[75%] max-h-[75%] scrollbar-thin scrollbar-thumb-surface-400 scrollbar-track-transparent">
                            <Timeline/>
                        </div>
                    </div>
                </main>
                <footer className="grid-in-footer col-span-4">
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default Layout;
