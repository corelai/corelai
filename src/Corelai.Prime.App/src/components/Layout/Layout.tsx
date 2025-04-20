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
                <header className="py-12
                sm:py-24
                 md:py-36
                 lg:py-48
                 grid-in-header col-span-4 relative overflow-hidden">
                    <Header/>
                </header>
                <main className="grid-in-main col-span-4 sm:col-span-4">
                    <div className="py-4"></div>
                    <WelcomeCitizen/>
                    <div className={`col-span-1`}></div>
                    <div className="w-full flex justify-center">
                        <div className="
                                    w-full lg:w-7/12
                                    py-16 sm:py-24
                        ">
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
