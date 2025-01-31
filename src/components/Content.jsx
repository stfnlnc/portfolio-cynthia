export default function Content () {
    return (
        <>
            <div id="clip-path-expand" className="fixed top-1/2 -translate-y-1/2 left-0 grid grid-cols-12 w-full gap-5 px-5 py-24 select-none uppercase">
                <div className="w-[15px] brackets-expand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                    <span>(</span><span>)</span>
                    <div className="swipe-hover absolute right-full whitespace-nowrap mr-24">CYNTHIA JEGO</div>
                    <div className="swipe-hover absolute left-full whitespace-nowrap ml-24">DIGITAL DESIGNER</div>
                </div>
                <div className="swipe-hover absolute clip-path-horizontal-center top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 whitespace-nowrap">Scroll to explore</div>
            </div>
        </>
    )
}