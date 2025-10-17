import {useEffect, useRef} from "react";

const Hero = () =>{
    const videoRef = useRef();

    useEffect(() => {
            if (videoRef.current) videoRef.current.playbackRate = 2;
        },
        []);
    return (
      <section id="hero" class="h-screen">
          <div>
              <h1>Pranamika's Portfolio</h1>
              <img src="/portfolioimg.png" alt="Pranamika's Portfolio" />
          </div>
          <video ref={videoRef} src="/videos/vid3.mp4" autoPlay muted playsInline />
          <button>See More</button>
      </section>
    )
}

export default Hero;