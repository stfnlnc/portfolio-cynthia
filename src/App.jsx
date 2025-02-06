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

        sections.forEach((section, key) => {
            revealProject(snapImages[key], snapImages[1], category, name, section, sections, bracketsExpand)
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
                    <div data-name="Cynthia Jego" data-category="Digital Designer" className="snap-image"></div>
                </Section>
                <Section>
                    <img data-name="Gretta" data-category="Site web" className="snap-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60lvh] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb38134367.webp" alt=""/>
                </Section>
                <Section>
                    <img data-name="Loretta" data-category="Branding" className="snap-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60lvh] object-center object-cover" src="https://studiokhi.com/uploads/works/gretta/1920/gretta-678fb3bcc9f77.webp" alt=""/>
                </Section>
            </main>
        </>
    )
}

export default App
