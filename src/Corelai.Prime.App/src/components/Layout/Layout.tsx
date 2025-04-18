import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../styles/layout.css';
import History from "../History/History.tsx";


const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <div className="py-4"></div>
            <div className="w-full h-full flex-col justify-center items-center
            sm:p-8 md:p-16 lg:p-32
            ">
                <div className="overflow-y-auto min-h-[75%] max-h-[75%] scrollbar-thin scrollbar-thumb-surface-400 scrollbar-track-transparent">
                <History/>
                    </div>

            </div>
            {/*<div className="grid grid-areas-layout grid-cols-4 grid-rows-[auto_auto_1fr_auto] min-h-dvh ">*/}
            {/*    <nav className="grid-in-nav col-span-4">*/}
            {/*        <Navbar/>*/}
            {/*    </nav>*/}
            {/*    <header className="grid-in-header col-span-4">*/}
            {/*        <Header/>*/}
            {/*    </header>*/}
            {/*    /!*<aside className="grid-in-side hidden sm:hidden">*!/*/}
            {/*    /!*    <Sidebar />*!/*/}
            {/*    /!*</aside>*!/*/}
            {/*    <main className="grid-in-main col-span-4 sm:col-span-4">*/}
            {/*        <MainContent/>*/}
            {/*    </main>*/}
            {/*    <footer className="grid-in-footer col-span-4">*/}
            {/*        <Footer/>*/}
            {/*    </footer>*/}
            {/*</div>*/}
        </>
    );
};

export default Layout;
