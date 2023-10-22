import Marquee from "react-fast-marquee";

function MarqueText() {
    return (
        <div className='w-full h-full flex flex-col gap-4 justify-center overflow-hidden '>

            <Marquee pauseOnHover={true} className='overflow-hidden text-[100px] uppercase font-bold p-2'>
                fullstack
            </Marquee>
            <Marquee pauseOnHover={true} className='overflow-hidden text-[100px] uppercase font-bold p-2'>
                Web
            </Marquee>
            <Marquee pauseOnHover={true} className='overflow-hidden text-[100px] uppercase font-bold p-2'>
                Developer
            </Marquee>
        </div>
    )
}

export default MarqueText