import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Sidebar from './Sidebar';
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
            <aside className="grid-in-side sm:col-span-2 hidden sm:block">
                <Sidebar />
            </aside>
            <main className="grid-in-main col-span-4 sm:col-span-2">
                <MainContent />
            </main>
            <footer className="grid-in-footer col-span-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
