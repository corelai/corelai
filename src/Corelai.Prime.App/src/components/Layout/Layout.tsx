import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../styles/layout.css';

const Layout: React.FC = () => {
    return (
        <div className="grid grid-areas-layout grid-cols-4 grid-rows-[auto_auto_1fr_auto] min-h-dvh ">
            <nav className="grid-in-nav col-span-4">
                <Navbar />
            </nav>
            <header className="grid-in-header col-span-4">
                <Header />
            </header>
            {/*<aside className="grid-in-side hidden sm:hidden">*/}
            {/*    <Sidebar />*/}
            {/*</aside>*/}
            <main className="grid-in-main col-span-4 sm:col-span-3">
                <MainContent />
            </main>
            <footer className="grid-in-footer col-span-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
