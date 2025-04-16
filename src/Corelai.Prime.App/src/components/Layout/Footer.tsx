import React from 'react'
import {TechStack} from "../TechStack/TechStack.tsx";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-surface text-primary text-center font-orbitron pt-4 min-h-16 sm:min-h-24
        ">
            <section className="text-sm tracking-wide flex flex-col sm:flex-row
                            items-center justify-center sm:justify-start
                             gap-2 pb-2 sm:px-12">
                <div >© {currentYear} Corelai SECTOR</div>
                <div className="sm:ms-auto opacity-50 text-xs">Glory to the Build. Control to Corelai.</div>
            </section>

            <TechStack/>
        </footer>
    )
}

export default Footer