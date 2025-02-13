import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from "gsap/SplitText";
import TextPlugin from "gsap/TextPlugin";

export default function Preloader() {

    useGSAP(() => {
        gsap.registerPlugin(SplitText, TextPlugin)

        function generateRandomLetter() {
            const alphabet = "abcdefghijklmnopqrstuvwxyz#@=+&!?$"
            return alphabet[Math.floor(Math.random() * alphabet.length)]
        }

        const swipes = document.querySelectorAll('.swipe-text')
        const newText = ['CynthiaJego', 'WebDesigner']
        swipes.forEach((swipe, key) => {
            const split = new SplitText(swipe, {type: "words, chars"});
            let lastWordLength = 0
            split.words.forEach(word => {
                let wordLength = word.innerText.length + lastWordLength
                for (let i = 0; i < wordLength; i++) {
                    split.chars[i].innerText = generateRandomLetter()
                }
                lastWordLength = wordLength
                setTimeout(() => {
                    split.chars.forEach((chars, k) => {
                        gsap.to(chars, {
                            text: newText[key][k],
                            delay: 0.05 * k
                        })
                    })
                }, 300)
            })
        })
    });

    return (
        <>
            <section className="fixed top-0 left-0 w-full h-[100lvh] z-10 bg-dark text-light">
                <div className="fixed top-1/2 -translate-y-1/2 left-0 grid grid-cols-12 w-full gap-5 px-5 py-24 select-none uppercase">
                    <div className="w-[15px] animate-expand-brackets brackets-delay absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-between">
                        <span>(</span>
                        <div className="animate-expand gif-delay preloader-expand h-[200px] bg-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
                        <div style={{background: 'url(/videos/cynthiajego.gif)', backgroundSize: 'cover', backgroundPosition: 'center'}}
                             className="animate-gif-expand preloader-expand gif-delay w-[300px] h-[187px]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
                        <span>)</span>
                        <div className="swipe-text absolute bottom-full right-1/2 translate-x-1/2 -translate-y-32 md:bottom-1/2 md:translate-x-0 md:translate-y-1/2 md:right-full whitespace-nowrap md:mr-8 lg:mr-16 xl:mr-24">Cynthia Jego</div>
                        <div className="swipe-text absolute top-full left-1/2 -translate-x-1/2 translate-y-34 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:left-full whitespace-nowrap md:ml-8 lg:ml-16 xl:ml-24">Web Designer</div>
                    </div>
                </div>
            </section>
        </>
    )
}