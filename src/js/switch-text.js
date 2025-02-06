import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
export default function switchText (text, data) {
    setTimeout(() => {
        const split = new SplitText(text, {type: "words, chars", reduceWhiteSpace: false})
        split.chars.forEach((chars, k) => {
            gsap.to(chars, {
                text: '',
                ease: 'power4.inOut',
                delay: 0.03 * k,
                onComplete: () => {
                    if(k === split.chars.length - 4) {
                        gsap.to(text, {
                            text: data
                        })
                    }
                }
            })
        })
    }, 400)
}