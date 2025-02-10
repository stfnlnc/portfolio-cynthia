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
        const videos = document.querySelectorAll('.video')

        sections.forEach((section, key) => {
            revealProject(snapImages[key], snapImages[1], category, name, section, sections, bracketsExpand)
            if(key > 0 && key < sections.length - 1) {
                gsap.to(videos[key - 1], {
                    scrollTrigger: {
                        trigger: sections[key],
                        scroller: '#container',
                        onEnter: () => {
                            videos[key - 1].play()
                        },
                        onEnterBack: () => {
                            videos[key - 1].play()
                        },
                        onLeave: () => {
                            videos[key - 1].pause()
                            videos[key - 1].currentTime = 0
                            videos[key - 1].load()
                        },
                        onLeaveBack: () => {
                            videos[key - 1].pause()
                            videos[key - 1].currentTime = 0
                            videos[key - 1].load()
                        },
                    }
                })
            }
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
                        scrollPathExpand.innerText = 'Scroll to Explore'
                    },
                    onEnter: () => {
                        gsap.to(bracketsExpand, {
                            width: 0,
                            duration: 1,
                            ease: 'power4.inOut',
                        })
                        clipPathExpand.classList.remove('pointer-events-none')
                        scrollPathExpand.innerText = 'hello@cynthiajego.com'
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
            gsap.fromTo(scrollPathExpand, {
                clipPath: 'inset(0% 50% 0% 50%)'
            }, {
                clipPath: 'inset(0% 0% 0% 0%)'
            })
        })
        clipPathExpand.addEventListener('mouseout', () => {
            gsap.fromTo(bracketsExpand, {
                width: scrollPathExpand.offsetWidth
            }, {
                width: 0
            })
            gsap.fromTo(scrollPathExpand, {
                clipPath: 'inset(0% 0% 0% 0%)'
            }, {
                clipPath: 'inset(0% 50% 0% 50%)'
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
                <Section href="" name="Gretta" category="Architecture" src="/videos/gretta.mp4" />
                <Section href="" name="Loretta" category="Restaurant" src="/videos/loretta.mp4" />
                <Section href="" name="Vaste" category="Magazine" src="/videos/vaste.mp4" />
                <Section href="" name="SurImpression" category="Culture" src="/videos/surimpression.mp4" />
                <Section name="Thanks for" category="Watching" />
            </main>
        </>
    )
}

export default App
