import gsap from "gsap";
import switchText from "./switch-text.js";


export default function revealProject(snap, snapFirst, category, name, section) {


    gsap.to(snap, {
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "bottom center",
                markers: false,
                scroller: '#container',
                onEnter: () => {
                    switchText(name, snap.dataset.name)
                    switchText(category, snap.dataset.category)
                    gsap.fromTo(snap, {
                        clipPath: 'inset(0% 50% 0% 50%)'
                    }, {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1.2,
                        delay: 1,
                        ease: 'power4.inOut',
                    })
                },
                onEnterBack: () => {
                    switchText(name, snap.dataset.name)
                    switchText(category, snap.dataset.category)
                    gsap.fromTo(snap, {
                        clipPath: 'inset(0% 50% 0% 50%)'
                    }, {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1.2,
                        delay: 1,
                        ease: 'power4.inOut',
                    })
                },
                onLeave: () => {
                    gsap.fromTo(snap, {
                        clipPath: 'inset(0% 0% 0% 0%)',
                    }, {
                        clipPath: 'inset(0% 50% 0% 50%)',
                        duration: 1.2,
                        ease: 'power4.inOut',
                    })
                },
                onLeaveBack: () => {
                    gsap.fromTo(snap, {
                        clipPath: 'inset(0% 0% 0% 0%)',
                    }, {
                        clipPath: 'inset(0% 50% 0% 50%)',
                        duration: 1.2,
                        ease: 'power4.inOut',
                    })
                },
            },
        }
    )
}