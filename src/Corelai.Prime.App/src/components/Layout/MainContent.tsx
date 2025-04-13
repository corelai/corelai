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
            <h1 className="font-[700] py-2 sm:py-4">
                Welcome to Corelai Prime
            </h1>
            <p className="text-start px-8 text-xs font-text whitespace-pre-line">
                {welcomeMessage}

            </p>
            <p className="py-4 sm:py-8 font-orbitron text-sm text-center">{CORELAI_SLOGAN}</p>
            <h3 className="font-[600]">
                h3 text
            </h3>

            <h6 className="font-[400]">
                h6 text
            </h6>

            <p className="
                text-secondary
                bg-secondary-surface
                font-text font-[400]">
                Secondary text 400
            </p>

            <p className="
                text-secondary
                bg-secondary-surface
                font-text font-[200]">
                Secondary text 200
            </p>

            <p className="
                text-secondary
                bg-secondary-surface
                font-text font-[600]">
                Secondary text 600
            </p>

            <p>
                P without nothing applied
            </p>
        </div>
    );
};

export default MainContent;
