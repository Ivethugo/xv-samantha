import { useEffect, useRef, useState } from "react";
import BgH from "../../assets/images/main/bg-h.png";
import BgW from "../../assets/images/main/bg-w.png";
import {
  End,
  Galery,
  Godparents,
  Guest,
  Introduce,
  Locations,
  Navbar,
  Schedule,
  Start,
} from "../../index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function Main() {
  const [background, setBackground] = useState(BgH);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setBackground(BgW);
      } else {
        setBackground(BgH);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function LazySection({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef(null);

    useEffect(() => {
      const section = sectionRef.current;

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, []);

    return (
      <div ref={sectionRef} className="w-full">
        {children}
      </div>
    );
  }

  return (
    <div
      className="w-screen min-h-screen bg-repeat-y bg-center pt-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% auto",
      }}
    >
      <Navbar />
      <Start />
      <LazySection>
        <Introduce />
      </LazySection>
      <LazySection>
        <Locations />
      </LazySection>
      <LazySection>
        <Galery />
      </LazySection>
      <LazySection>
        <Godparents />
      </LazySection>
      <LazySection>
        <Schedule />
      </LazySection>
      <LazySection>
        <Guest />
      </LazySection>
      <LazySection>
        <End />
      </LazySection>
    </div>
  );
}
