import gsap from "gsap";
import switchText from "./switch-text.js";

export default function revealProject(snap, snapFirst, category, name, section, sections, brackets) {
    gsap.fromTo(snap, {
            clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
        }, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: section,
                start: "top center",
                toggleActions: "play reverse play reverse",
                markers: false,
                scroller: '#container',
                onEnter: () => {
                    switchText(name, snap.dataset.name)
                    switchText(category, snap.dataset.category)
                },
                onEnterBack: () => {
                    switchText(name, snap.dataset.name)
                    switchText(category, snap.dataset.category)
                },
            },
        }
    )
    gsap.fromTo(brackets, {
            width: 0
        }, {
            width: snapFirst.offsetWidth + 25,
            duration: 1,
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: sections[1],
                start: "top center",
                toggleActions: "play none none reverse",
                markers: false,
                scroller: '#container'
            },
        }
    )
}