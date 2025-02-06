import {SplitText} from "gsap/SplitText";
import gsap from "gsap";

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz#@=+&!?$"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
export default function swipeText(initial, swipe, key) {
    initial[key] = swipe.textContent
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
                    text: initial[key].replace(/\s/g, '')[k],
                    delay: 0.03 * k
                })
            })
        }, split.chars.length * 50)
    })
}