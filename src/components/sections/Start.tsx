import { Countdown, FlowersCircle } from "../../index.ts";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Start() {
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startRef.current) {
      gsap.fromTo(
        startRef.current,
        {
          y: 200,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        }
      );
    }
  }, []);

  return (
    <div 
      id="start-section" 
      ref={startRef}
      className="flex flex-col items-center scroll-mt-52"
    >
      <FlowersCircle />
      <Countdown />
    </div>
  );
}
