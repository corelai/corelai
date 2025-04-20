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
                <header className="py-20
                sm:py-24
                 md:py-40
                 lg:py-44
                 xl:py-48
                 grid-in-header col-span-4 relative overflow-hidden
                 bg-surface-900

                 ">
                    {/*header darkening mask*/}

                    <div className={`
                    absolute inset-0
                    bg-[url(/images/corelai-background.png)] bg-no-repeat bg-bottom
                    
                    sm:bg-[length:1536px_auto]
                    md:bg-[length:1536px_auto]
                    lg:bg-[length:1536px_auto]
                    xl:bg-[length:1536px_auto]
                    2xl:bg-cover
                    
                    opacity-100
                    dark:opacity-100
                    blur-[0.1rem]
                    `}>
                    </div>
                    <div className={` absolute inset-0 bg-linear-to-b 
                    from-surface-900/30 
                    from-10%
                    via-surface-900/90
                    to-90%
                    to-surface-900/30`}>
                    </div>
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
