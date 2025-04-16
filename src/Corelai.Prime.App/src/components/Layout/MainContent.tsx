import React from 'react';
import {WelcomeCitizen} from "../WelcomeCitizen/WelcomeCitizen.tsx";


const MainContent: React.FC = () => {
    return (
        <>
            <hr className="golden-border" />
            <WelcomeCitizen/>
            <hr className="golden-border" />
            <div className="text-center">
                <h1 className="font-[700]
            pt-1 pb-2
            sm:py-4
            text-sm
            sm:text-base
            md:text-lg
            relative overflow-hidden">
                    History of Corelai
                </h1>
            </div>
        </>
    );
};

export default MainContent;
