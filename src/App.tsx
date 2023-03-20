import { useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css'
gsap.registerPlugin(ScrollTrigger);

function App() {
  const circleRef = useRef(null);
  useLayoutEffect(() => {
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

      <div className="home-hero-scene-heading-wrapper text-center my-10">
        <p className="home-hero-scene-heading">
          <span className="home-hero-scene-heading-count js-animate-count type-a type-a-5">3,000,000</span>
          <span className="type-a type-a-2">
            developers &amp; businesses
            <br />
            ship faster on Netlify.
          </span>
        </p>
        <p className="home-hero-scene-cta"><a href="https://app.netlify.com/signup" type="button" id="cta-bodyLower-launchyourownproject" className="call-to-action call-to-action-button call-to-action-variant-blue">  <span>Launch your own project</span></a></p>
      </div>

      <div className='h-[100vh] bg-slate-500 border rounded-3xl'></div>

      <div id='fixed'>
        <div className='grid gap-[4rem] grid-cols-2 p-10'>
          <div id="hero-pin" className='sticky top-[80px] w-[400px] h-[600px] bg-gradient-to-b from-indigo-500 to-red-700'></div>
          <div className='p-10'>
            <h2 className="text-7xl	">It’s all ready, already</h2>
            <p className="text-xl	"><b>Skip the painful setup and devops.</b>
              Netlify is a global, production-ready environment from the start. Skip all the server setup and get straight to building.
            </p>
          </div>

          <div className='p-10 col-[2]'>
            <h2 className="text-7xl	">It’s all ready, already</h2>
            <p className="text-xl	"><b>Skip the painful setup and devops.</b>
              Netlify is a global, production-ready environment from the start. Skip all the server setup and get straight to building.
            </p>
          </div>
        </div>
      </div>

      <div className='h-[100vh] bg-slate-500 border rounded-3xl'></div>

    </div>
  );
}

export default App