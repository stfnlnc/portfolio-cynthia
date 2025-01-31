import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Content() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const snapImages = document.querySelectorAll('.snap-image')
        const sections = document.querySelectorAll(".section");
        const clipPath = document.getElementById('clip-path-expand')
        const bracketsExpand = document.querySelector('#brackets-expand')

        snapImages.forEach((image, key) => {
            gsap.from(image, {
                clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
            })
            gsap.to(image, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                scrollTrigger: {
                    trigger: image,
                    start: sections[key + 1].offsetTop - clipPath.offsetHeight + ' 50%',
                    end: sections[key + 1].offsetTop - clipPath.offsetHeight + (sections[key + 1].offsetHeight / 2) + ' 50%',
                    scrub: 1
                }
            })
            gsap.fromTo(image, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }, {
                clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
                scrollTrigger: {
                    trigger: image,
                    start: sections[key + 1].offsetTop - clipPath.offsetHeight + (sections[key + 1].offsetHeight / 2) + ' 50%',
                    end: sections[key + 1].offsetTop - clipPath.offsetHeight + sections[key + 1].offsetHeight + ' 50%',
                    scrub: 1
                }
            })
            gsap.from(bracketsExpand, {
                width: 0
            })
            gsap.to(bracketsExpand, {
                width: image.offsetWidth + 25,
                scrollTrigger: {
                    trigger: image,
                    start: sections[key + 1].offsetTop - clipPath.offsetHeight + ' 50%',
                    end: sections[key + 1].offsetTop - clipPath.offsetHeight + (sections[key + 1].offsetHeight / 2) + ' 50%',
                    scrub: 1
                }
            })
            gsap.fromTo(bracketsExpand, {
                width: image.offsetWidth + 25
            }, {
                width: 0,
                scrollTrigger: {
                    trigger: image,
                    start: sections[key + 1].offsetTop - clipPath.offsetHeight + (sections[key + 1].offsetHeight / 2) + ' 50%',
                    end: sections[key + 1].offsetTop - clipPath.offsetHeight + sections[key + 1].offsetHeight + ' 50%',
                    scrub: 1
                }
            })
        })
    })

    return (
        <>
            <div id="clip-path-expand" className="fixed top-1/2 -translate-y-1/2 left-0 grid grid-cols-12 w-full gap-5 px-5 py-24 select-none uppercase">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                    <span>(</span>
                    <div id="brackets-expand" className="w-0"></div>
                    <span>)</span>
                    <div id="name" className="swipe-hover absolute right-full whitespace-nowrap mr-24">CYNTHIA JEGO</div>
                    <div id="category" className="swipe-hover absolute left-full whitespace-nowrap ml-24">DIGITAL DESIGNER</div>
                </div>
            </div>
            <img data-name="Loretta" className="snap-image fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb38134367.webp" alt=""/>
            <img data-name="Gretta" className="snap-image fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb3bcc9f77.webp" alt=""/>
        </>
    )
}

// https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb38134367.webp
// https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb3bcc9f77.webp