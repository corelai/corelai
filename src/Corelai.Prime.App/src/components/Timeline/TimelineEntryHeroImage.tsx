import React from "react";

interface TimelineEntryImageProps {
    imagePath: string;
    children: React.ReactNode;
}
const TimelineEntryHeroImage: React.FC<TimelineEntryImageProps> = ({imagePath, children}) => (
    <div
        className="h-72 bg-center bg-cover bg-no-repeat relative grid grid-cols-2"
        style={{backgroundImage: `url(${imagePath})`}}
    >
        {/*darkening*/}
        <div className="
                     bg-linear-to-b from-surface-900/95 to-50% to-surface-50/0
                     absolute inset-0
                    "></div>
        {children}
    </div>
);

export default TimelineEntryHeroImage;