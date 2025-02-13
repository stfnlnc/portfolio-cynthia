export default function Content() {

    return (
        <>
            <div className="fixed w-96 h-24 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-12 gap-5 px-5 uppercase select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                    <span>(</span>
                    <div id="brackets-expand"></div>
                    <span>)</span>
                    <div className="absolute bottom-full right-1/2 translate-x-1/2 -translate-y-32 md:bottom-0 md:translate-x-0 md:translate-y-0 md:right-full whitespace-nowrap md:mr-8 lg:mr-16 xl:mr-24">
                        <div id="name">Cynthia Jego</div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-34 md:top-0 md:translate-x-0 md:translate-y-0 md:left-full whitespace-nowrap md:ml-8 lg:ml-16 xl:ml-24">
                        <div id="category">Web Designer</div>
                    </div>
                </div>
            </div>
            <div id="clip-path-expand" className="fixed w-96 h-24 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-150"></div>
            <div id="scroll-path-expand" className="w-fit pointer-events-none fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-12 flex flex-row items-center justify-center uppercase text-center">
                Scroll to Explore
            </div>
        </>
    )
}