import React from 'react'
import {TechStack} from "../TechStack/TechStack.tsx";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-surface text-primary/80 text-center font-orbitron
        ">
            <section className="text-sm tracking-wide flex flex-col sm:flex-row
                            justify-center
                             py-6 sm:px-12">
                <div >© {currentYear} Corelai</div>
            </section>

            <TechStack/>
        </footer>
    )
}

export default Footer