export default function Content () {
    return (
        <>
            <div id="clip-path-expand" className="fixed top-1/2 -translate-y-1/2 left-0 grid grid-cols-12 w-full gap-5 px-5 py-24 select-none">
                <div className="col-span-4"></div>
                <div className="relative col-span-4 flex flex-row items-center justify-between uppercase">
                    <div className="absolute top-0 left-0 px-1">CYNTHIA JEGO</div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 brackets-expand flex flex-row justify-between">
                        <span>(</span><span>)</span>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 clip-path-horizontal-center">
                        scroll to explore
                    </div>
                    <div className="absolute top-0 right-0 px-1">digital designer</div>
                </div>
                <div className="col-span-4"></div>
            </div>
        </>
    )
}


