
const MediaRuler = ({show}:{show:boolean}) => {
    return (
        show &&
        <div className={`absolute left-0`}>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] block sm:hidden w-[30rem]`}>Mobile 30rem</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden sm:block md:hidden bg-red-400 w-[48rem]`}>SM 30-48rem 480px-768px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden md:block lg:hidden bg-amber-400 w-[64rem]`}>MD 48-64rem 768px-1024px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden lg:block xl:hidden bg-green-400 w-[80rem]`}>LG 64-80rem 1024px-1280px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden xl:block 2xl:hidden bg-sky-400 w-[96rem]`}>XL 80-96rem 1280px-1536px</div>
            <div className={`uppercase font-[600] h-4 text-[0.8rem] hidden 2xl:block n bg-purple-400 w-screen`}>2XL &gt;96rem &gt;1536px</div>
        </div>
    )
}

export default MediaRuler;