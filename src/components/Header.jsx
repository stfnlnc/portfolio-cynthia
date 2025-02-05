// Components
import WorldIcon from "./WorldIcon.jsx";
import SquareIcon from "./SquareIcon.jsx";
// React
import {useEffect, useState} from "react";

export default function Header () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", hour12: true,});
    };

    return (
        <>
            <div className="fixed top-0 left-0 grid grid-cols-12 w-full gap-5 px-5 py-4">
                <div className="flex flex-row items-start justify-start gap-1 px-1 col-span-2 select-none">
                    <WorldIcon />
                    <div className="uppercase flex flex-row gap-2"><div className="swipe-hover">PARIS</div> {formatTime(time)}</div>
                </div>
                <div className="uppercase flex flex-col gap-0 col-span-5 px-1 select-none">
                    <div className="swipe-hover">independent digital designer.</div>
                    <div className="swipe-hover">based in france. working worldwide.</div>
                </div>
                <div className="uppercase col-span-3 flex flex-row items-start justify-start gap-1 px-1 select-none">
                    <SquareIcon />
                    <div className="swipe-hover">available for freelance projects</div>
                </div>
                <div className="uppercase col-span-2 px-1 select-none">
                    <a className="swipe-hover" href="">hello@cynthiajego.com</a> <br/>
                    <a className="swipe-hover" href="">linkedin</a>
                </div>
            </div>
        </>
    )
}