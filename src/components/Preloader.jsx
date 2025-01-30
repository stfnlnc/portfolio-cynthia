export default function Preloader () {
    return (
        <>
            <section className="fixed top-0 left-0 w-full h-[100lvh] bg-dark">
                <div id="clip-path-expand" className="absolute top-1/2 -translate-y-1/2 left-0 bg-dark text-light grid grid-cols-12 w-full gap-5 px-5 py-24 select-none">
                    <div className="col-span-4"></div>
                    <div className="relative col-span-4 flex flex-row items-center justify-between uppercase">
                        <div className="absolute top-0 left-0 px-1">CYNTHIA JEGO</div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex w-[15px] flex-row justify-between animate-expand-brackets preloader-expand brackets-delay">
                                <span>(</span>
                                <span>)</span>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] bg-light animate-expand preloader-expand gif-delay">

                                </div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-light animate-gif-expand preloader-expand gif-delay" style={{background: "url(https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif)", backgroundSize: "cover"}}>

                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 px-1">digital designer</div>
                    </div>
                    <div className="col-span-4"></div>
                </div>
            </section>
        </>
    )
}