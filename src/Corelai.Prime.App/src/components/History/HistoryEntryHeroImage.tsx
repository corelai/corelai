import React from "react";

interface HistoryEntryHeroImageProps {
    imagePath: string;
    children: React.ReactNode;
}
export const HistoryEntryHeroImage: React.FC<HistoryEntryHeroImageProps> = ({imagePath, children}) => (
    <div
        className="h-48 bg-center bg-cover bg-no-repeat relative grid grid-cols-2"
        style={{backgroundImage: `url(${imagePath})`}}
    >
        {children}
    </div>
);