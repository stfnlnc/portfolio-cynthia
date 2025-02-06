export default function Content() {

    return (
        <>
            <div id="clip-path-expand" className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-12 gap-5 px-5  uppercase">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                    <span>(</span>
                    <div id="brackets-expand" className="w-[1000px]"></div>
                    <span>)</span>
                    <div className="absolute right-full whitespace-nowrap mr-24">
                        <div id="name" className="overflow-hidden">CYNTHIA JEGO</div>
                    </div>
                    <div className="absolute left-full whitespace-nowrap ml-24">
                        <div id="category" className="overflow-hidden">DIGITAL DESIGNER</div>
                    </div>
                </div>
            </div>
        </>
    )
}