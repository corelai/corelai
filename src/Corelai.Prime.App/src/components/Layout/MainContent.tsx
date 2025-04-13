import React from 'react';

const MainContent: React.FC = () => {
    return (
        <div className="text-center" >
            <h1 className="font-[700]">
                Primary text
            </h1>
            <p className="text-normal
                 font-text">
                Normal text

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim minima perspiciatis
                quasi sequi velit. Aliquid aperiam enim esse eveniet hic id in, ipsam laudantium molestiae officiis
                provident sint sit ullam unde, veniam! A iste molestias qui repellat veniam.
            </p>
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
