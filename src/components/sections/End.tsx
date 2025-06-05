import { useEffect, useState, useRef } from "react";
import { EndText } from "../../index";
import EndImage from "../../assets/images/main/endImage-h.png";
import EndImageW from "../../assets/images/main/endImage-w.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function End() {
  const [bg, setBg] = useState(EndImage);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setBg(EndImageW);
      } else {
        setBg(EndImage);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="end-section"
      className="w-full h-[600px] flex flex-col justify-center items-center bg-cover bg-center scroll-mt-52"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <EndText />
    </section>
  );
}
