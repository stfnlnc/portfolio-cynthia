import './App.css'
import Lenis from "lenis"
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Preloader from "./components/Preloader.jsx";

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
