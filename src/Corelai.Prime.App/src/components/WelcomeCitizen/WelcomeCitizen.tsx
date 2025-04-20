import React from "react";


const welcomeMessage = `
Welcome, Citizen.

▸ You have reached CORELAI PRIME
the official entrypoint to Corelai SECTOR operations.

▸ This platform provides controlled access to our active divisions, projects, and planetary initiatives.

▸ Your presence is acknowledged. 
▸ Your actions are monitored. 
▸ Your progress is yours to shape.

▸ Proceed with purpose.
`
const CORELAI_SLOGAN = `
✦ Control to Corelai ✦ 
`

export const WelcomeCitizen : React.FC = () => {
    return (
        <div className="text-center" >
            <h1 className="font-[700]
            pt-1 pb-2
            sm:py-4
            text-sm
            sm:text-base
            md:text-lg
            relative overflow-hidden
            dark:text-writing-200
            ">
                {/*<div className="*/}
                {/*rotate-30*/}
                {/*size-20 -translate-y-9 -translate-x-16*/}
                {/*sm:size-28 sm:-translate-y-19 sm:-translate-x-19*/}
                {/*bg-gradient-to-br from-[var(--color-primary-surface)] to-[var(--color-division-surface)]*/}
                {/*absolute inset-0 "></div>*/}
                Welcome to Corelai Prime
            </h1>
            <p className="
            text-start
            px-8
            text-xs
            sm:text-sm
            md:text-base

            whitespace-pre-line
            m-auto
            md:max-w-[75%]
            lg:max-w-[50%]
            dark:text-writing-400
            ">
                {welcomeMessage}

            </p>
            <p className="py-4 sm:py-8 font-orbitron
            text-center
            text-sm
            sm:text-base
            md:text-lg
            dark:text-writing-200
            ">
                {CORELAI_SLOGAN}
            </p>

        </div>
    );
};