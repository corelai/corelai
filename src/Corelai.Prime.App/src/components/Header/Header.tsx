import img from "/corelai-logo.svg";

export default function Header() {
    return (
        <div className="flex bg-secondary-surface justify-center items-center sm:gap-8 pb-6 sm:pb-8 ">
            <div className="text-center  bg-secondary-surface ">
                <div className="flex flex-row">
                    <div className="text-white font-orbitron text-4xl uppercase   whitespace-nowrap">
                        C
                        <div className="w-9 h-9 inline-block pt-0.5">
                            <img src={img} alt="logo"/>
                        </div>
                        relai
                    </div>
                    <div
                        className="text-stone-200 text-1xl font-oxanium font-[400] uppercase  -translate-x-15 translate-y-9">
                        sector
                    </div>
                    {/*<span className="text-gold">prime</span>*/}
                </div>
            </div>
        </div>
    );
}