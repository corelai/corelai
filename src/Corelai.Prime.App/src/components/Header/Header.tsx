import img from "/corelai-logo.svg";

export default function Header() {
    return (
        <div className="flex bg-secondary-surface justify-center items-center sm:gap-8 pb-4 sm:pb-8">
            <div className="w-30 sm:w-16 px-4 sm:px-0">
                <img src={img} alt="logo"/>
            </div>
            <div className="text-center  bg-secondary-surface ">
                <div className="flex flex-col font-orbitron text-4xl uppercase sm:flex-row sm:gap-2">
                    <span className="text-white">Corelai</span>
                    <span className="text-gold">prime</span>
                </div>
            </div>
        </div>
    );
}