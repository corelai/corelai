import React from 'react'
import {FaGithub} from 'react-icons/fa' // usa react-icons per semplicità
import tailwindLogo from '/images/tailwindcss-mark.svg'
import reactLogo from '/images/react.svg'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary-surface text-primary text-center font-orbitron pt-4 min-h-16 sm:min-h-24
        ">
            <section className="text-sm tracking-wide flex flex-col items-center justify-center gap-2">
                <div>© {currentYear} Corelai SECTOR</div>
                <div>Glory to the Build. Control to Corelai.</div>
                <div className="text-xs opacity-60">Terraforming Authorization: Level 1</div>
            </section>

            <section className="text-xs text-slate-600 flex items-center justify-end gap-2 align-middle p-4 pt-8 bg-slate-950">
                <a href="https://github.com/corelai" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4 sm:w-6 sm:h-6 hover:text-secondary transition-colors"/>
                </a>
                <div>Powered by</div>
                <div className="h-4 w-4 sm:w-6 sm:h-6">
                    <img src={reactLogo} alt="React"/>
                </div>
                <div>&</div>
                <div className="h-4 w-4 sm:w-6 sm:h-6 pt-1">
                    <img src={tailwindLogo} alt="Tailwind" className="h-4"/>
                </div>
            </section>
        </footer>
    )
}

export default Footer