import './App.css'
import Lenis from "lenis"
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Preloader from "./components/Preloader.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";
import {useRef} from "react";

function App() {

    const lenis = new Lenis({
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1,
        easing: function (t) {
            return (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))
        },
        duration: 3,
        direction: "vertical",
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz#@=+&!?$"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    const initialTexts = useRef([])

    useGSAP(() => {
        gsap.registerPlugin(SplitText, TextPlugin)
        const swipes = document.querySelectorAll('.swipe-hover')

        swipes.forEach((swipe, key) => {
            initialTexts.current[key] = swipe.textContent
            const split = new SplitText(swipe, {type: "words, chars"});
            swipe.addEventListener('mouseenter', () => {
                let lastWordLength = 0
                split.words.forEach(word => {
                    let wordLength = word.innerText.length + lastWordLength
                    for(let i = 0; i < wordLength; i++) {
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
    });


  return (
    <>
        <Preloader />
        <main className="relative w-full h-[100lvh] animate-reveal preloader-delay preloader-expand bg-white z-50">
            <Grid />
            <Header />
            <Content />
        </main>
    </>
  )
}

export default App
