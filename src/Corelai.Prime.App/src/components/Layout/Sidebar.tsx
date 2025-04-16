import React from 'react';
import {CorelaiSymbol} from "./CorelaiSymbol.tsx";

const Sidebar: React.FC = () => {
    return (
        <div className="flex justify-center h-full bg-secondary-surface text-white p-4 border-e-1 border-primary">
            <div className="flex h-full max-w-3/4">
                <CorelaiSymbol/>
            </div>
        </div>
    );
};

export default Sidebar;
