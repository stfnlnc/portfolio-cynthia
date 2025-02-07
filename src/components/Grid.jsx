export default function Grid () {
    return (
        <>
            <div className="fixed top-0 left-0 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 w-full h-full gap-5 px-5 pointer-events-none">
                <div className="w-full h-full border-x border-light border-dashed"></div>
                <div className="w-full h-full border-x border-light border-dashed"></div>
                <div className="w-full h-full border-x border-light border-dashed"></div>
                <div className="w-full h-full border-x border-light border-dashed"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden sm:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden sm:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden md:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden md:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden lg:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden lg:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden xl:block"></div>
                <div className="w-full h-full border-x border-light border-dashed hidden xl:block"></div>
            </div>
        </>
    )
}