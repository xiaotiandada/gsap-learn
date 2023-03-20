import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css'
gsap.registerPlugin(ScrollTrigger);

function App() {
  const circleRef = useRef(null);
  useEffect(() => {
    gsap.fromTo("#hero", {
      opacity: 0.9,
      scale: 0.2,
      y: '-50vh'
    },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: '#first',
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      });
  }, []);

  return (
    <div className="App">
      <div id='first' className='h-[100vh]'>
        <h1 className="text-3xl font-bold underline text-center pt-[40vh]">
          Bring it all together
        </h1>
        <p className='text-center mt-4'>The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.</p>
        <div className='text-center mt-10'>
          <button>Get started for free</button>
          <button>Request demo</button>
        </div>
      </div>

      <section id='second' className=''>
        <img id='hero' className='w-[690px] mx-auto' alt="" loading="lazy" src="https://d33wubrfki0l68.cloudfront.net/86e04f2182b562bb20646414d9e6fb13dc9f824a/bea27/v3/img/build/8t9i3uomzs-1280.png" width="1280" height="800" />
      </section>

    </div>
  );
}

export default App