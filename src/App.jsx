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

function App() {

    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz#@=+&!?$"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    const initialTexts = useRef([])
    useGSAP(() => {
        gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger)

        const swipes = document.querySelectorAll('.swipe-hover')

        swipes.forEach((swipe, key) => {
            initialTexts.current[key] = swipe.textContent
            const split = new SplitText(swipe, {type: "words, chars"});
            swipe.addEventListener('mouseenter', () => {
                let lastWordLength = 0
                split.words.forEach(word => {
                    let wordLength = word.innerText.length + lastWordLength
                    for (let i = 0; i < wordLength; i++) {
                        split.chars.forEach((chars, k) => {
                            gsap.to(chars, {
                                text: generateRandomLetter(),
                                delay: 0.08 * k * Math.random(),
                            })
                        })
                    }
                })
                setTimeout(() => {
                    split.chars.forEach((chars, k) => {
                        gsap.to(chars, {
                            text: initialTexts.current[key].replace(/\s/g, '')[k],
                            delay: 0.03 * k
                        })
                    })
                }, split.chars.length * 50)
            })
        })

        const sections = document.querySelectorAll('.section')
        const snapImages = document.querySelectorAll('.snap-image')
        const bracketsExpand = document.getElementById('brackets-expand')

        sections.forEach((section, key) => {
            gsap.fromTo(snapImages[key], {
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
                    },
                }
            )
            gsap.fromTo(bracketsExpand, {
                    width: 0
                }, {
                    width: 1000,
                    duration: 1.2,
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: sections[1],
                        start: "top center",
                        toggleActions: "play none none reverse",
                        markers: false,
                        scroller: '#container',
                    },
                }
            )
        });

    }, []);


    return (
        <>
            <Preloader/>
            <main id="container" className="z-50 relative animate-reveal preloader-delay preloader-expand bg-white">
                <Grid/>
                <Header/>
                <Content/>
                <Section>
                    <div data-name="Cynthia Jego" className="snap-image"></div>
                </Section>
                <Section>
                    <img data-name="Gretta" className="snap-image pl-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb38134367.webp" alt=""/>
                </Section>
                <Section>
                    <img data-name="Loretta" className="snap-image pl-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vw] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb3bcc9f77.webp" alt=""/>
                </Section>
            </main>
        </>
    )
}

export default App
