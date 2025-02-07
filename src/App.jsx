import './App.css'
// Components
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Preloader from "./components/Preloader.jsx";
import Section from "./components/Section.jsx";
// GSAP
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
// React
import {useRef} from "react";
// Utils
import swipeText from "./js/swipe-text.js";
import revealProject from "./js/reveal-project.js";

function App() {

    const initialTexts = useRef([])

    useGSAP(() => {
        gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger)

        const swipes = document.querySelectorAll('.swipe-hover')

        swipes.forEach((swipe, key) => {
            swipeText(initialTexts.current, swipe, key)
        })

        const sections = document.querySelectorAll('.section')
        const snapImages = document.querySelectorAll('.snap-image')
        const bracketsExpand = document.getElementById('brackets-expand')
        const name = document.getElementById('name')
        const category = document.getElementById('category')
        const clipPathExpand = document.getElementById('clip-path-expand')
        const scrollPathExpand = document.getElementById('scroll-path-expand')

        sections.forEach((section, key) => {
            revealProject(snapImages[key], snapImages[1], category, name, section, sections, bracketsExpand)
            gsap.to(sections[0], {
                scrollTrigger: {
                    trigger: sections[0],
                    markers: false,
                    scroller: '#container',
                    onLeave: () => {
                        clipPathExpand.classList.add('pointer-events-none')
                    },
                    onEnterBack: () => {
                        clipPathExpand.classList.remove('pointer-events-none')
                    }
                }
            })
            gsap.to(sections[sections.length - 1], {
                scrollTrigger: {
                    trigger: sections[sections.length - 1],
                    markers: false,
                    scroller: '#container',
                    onLeaveBack: () => {
                        gsap.to(bracketsExpand, {
                            width: snapImages[1].offsetWidth + 25,
                            duration: 1,
                            ease: 'power4.out',
                        })
                        clipPathExpand.classList.add('pointer-events-none')
                    },
                    onEnter: () => {
                        gsap.to(bracketsExpand, {
                            width: 0,
                            duration: 1,
                            ease: 'power4.inOut',
                        })
                        clipPathExpand.classList.remove('pointer-events-none')
                    }
                }
            })
        });

        clipPathExpand.addEventListener('mouseover', () => {
            gsap.fromTo(bracketsExpand, {
                width: 0
            }, {
                width: scrollPathExpand.offsetWidth
            })
        })
        clipPathExpand.addEventListener('mouseout', () => {
            gsap.fromTo(bracketsExpand, {
                width: scrollPathExpand.offsetWidth
            }, {
                width: 0
            })
        })

    }, []);

    return (
        <>
            <Preloader/>
            <main id="container" className="z-50 relative animate-reveal preloader-delay preloader-expand bg-white">
                <Grid/>
                <Header/>
                <Content/>
                <Section href="" name="Cynthia Jego" category="Web Designer" />
                <Section href="" name="Gretta" category="Architecture" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb38134367.webp" />
                <Section href="" name="Loretta" category="Restaurant" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb3bcc9f77.webp" />
                <Section name="Thanks for" category="Watching" />
            </main>
        </>
    )
}

export default App
