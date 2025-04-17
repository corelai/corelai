import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../styles/layout.css';

const Layout: React.FC = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">

                <div className="bg-surface-50 p-8
                shadow-sm shadow-surface-400
                dark:shadow-none
                ">
                    <h1 className="uppercase tracking-wide font-[400]">h1 400 test for the win</h1>
                    <h1 className="uppercase tracking-wide font-[600]">h1 600 test for the win</h1>
                    <h1 className="uppercase tracking-wide font-[700]">h1 700 test for the win</h1>
                    <div className="py-4"></div>
                    <div className="hyphens-auto indent-4 font-[400] text-base"> Font 200.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium adipisci architecto blanditiis, corporis dolor eos labore laudantium maiores nisi non odit perspiciatis, quae
                        quaerat repellat sed soluta veritatis vitae voluptatem?

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam cumque est iure
                        maxime minima molestias non perferendis saepe, velit!
                    </div>
                </div>


            </div>
            <div className="grid grid-areas-layout grid-cols-4 grid-rows-[auto_auto_1fr_auto] min-h-dvh ">
                <nav className="grid-in-nav col-span-4">
                    <Navbar/>
                </nav>
                <header className="grid-in-header col-span-4">
                    <Header/>
                </header>
                {/*<aside className="grid-in-side hidden sm:hidden">*/}
                {/*    <Sidebar />*/}
                {/*</aside>*/}
                <main className="grid-in-main col-span-4 sm:col-span-4">
                    <MainContent/>
                </main>
                <footer className="grid-in-footer col-span-4">
                    <Footer/>
                </footer>
            </div>
        </>
    );
};

export default Layout;
