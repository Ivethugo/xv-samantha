import { TimelineSchedule, TimelineCard } from "../../index.ts";
import Church from "../../assets/icons/church.svg";
import Reception from "../../assets/icons/reception.svg";
import Dinner from "../../assets/icons/dinner.svg";
import Vals from "../../assets/icons/vals.svg";
import Party from "../../assets/icons/party.svg";
import End from "../../assets/icons/end.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Schedule() {
  const scheduleText =
    "px-6 text-center font-cinzelDecorative text-base-100 text-3xl xl:text-4xl";
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsContainerRef.current) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="scheduler-section" className="scroll-mt-52">
      <div className="w-full flex flex-col justify-center items-center gap-12 pb-28 pt-10 px-5 relative">
        <div className={scheduleText}>Programa</div>
        <div className="relative h-full w-full flex flex-col items-center">
          <div className="absolute">
            <TimelineSchedule />
          </div>

          <div ref={cardsContainerRef} className="flex flex-col gap-10">
            <TimelineCard
              img1={Church}
              text1="CEREMONIA"
              text11="7:00 pm"
              img2={Reception}
              text2="RECEPCIÓN"
              text22="8:30pm"
            />
            <TimelineCard
              img1={Dinner}
              text1="CENA"
              text11="9:00pm"
              img2={Vals}
              text2="VALS"
              text22="10:00pm"
            />
            <TimelineCard
              img1={Party}
              text1="FIESTA"
              text11="11:00pm"
              img2={End}
              text2="FIN DEL EVENTO"
              text22="2:00am"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
