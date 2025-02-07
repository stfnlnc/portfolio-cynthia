export default function Content() {

    return (
        <>
            <div className="fixed w-96 h-24 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-12 gap-5 px-5 uppercase select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                    <span>(</span>
                    <div id="brackets-expand"></div>
                    <span>)</span>
                    <div className="absolute right-full whitespace-nowrap mr-24">
                        <div id="name">Cynthia Jego</div>
                    </div>
                    <div className="absolute left-full whitespace-nowrap ml-24">
                        <div id="category">Web Designer</div>
                    </div>
                </div>
            </div>
            <div id="clip-path-expand" className="fixed w-96 h-24 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-150"></div>
            <div id="scroll-path-expand" className="pointer-events-none fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-12 flex flex-row items-center justify-center uppercase">
                Scroll to Explore
            </div>
        </>
    )
}