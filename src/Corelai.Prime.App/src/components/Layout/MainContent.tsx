import React from 'react';

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
const MainContent: React.FC = () => {
    return (
        <div className="text-center" >
            <h1 className="font-[700]
            pt-1 pb-2
            sm:py-4
            text-sm
            sm:text-base
            md:text-lg
            relative overflow-hidden">
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

            font-text
            text-normal
            whitespace-pre-line
            m-auto
            md:max-w-[75%]
            lg:max-w-[50%]
            ">
                {welcomeMessage}

            </p>
            <p className="py-4 sm:py-8 font-orbitron
            text-center
            text-sm
            sm:text-base
            md:text-lg
            ">
                {CORELAI_SLOGAN}
            </p>


            {/*<h3 className="font-[600]">*/}
            {/*    h3 text*/}
            {/*</h3>*/}

            {/*<h6 className="font-[400]">*/}
            {/*    h6 text*/}
            {/*</h6>*/}

            {/*<p className="*/}
            {/*    text-secondary*/}
            {/*    bg-secondary-surface*/}
            {/*    font-text font-[400]">*/}
            {/*    Secondary text 400*/}
            {/*</p>*/}

            {/*<p className="*/}
            {/*    text-secondary*/}
            {/*    bg-secondary-surface*/}
            {/*    font-text font-[200]">*/}
            {/*    Secondary text 200*/}
            {/*</p>*/}

            {/*<p className="*/}
            {/*    text-secondary*/}
            {/*    bg-secondary-surface*/}
            {/*    font-text font-[600]">*/}
            {/*    Secondary text 600*/}
            {/*</p>*/}

            {/*<p>*/}
            {/*    P without nothing applied*/}
            {/*</p>*/}
        </div>
    );
};

export default MainContent;
