import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card } from "../../index.ts";
import Church from "../../assets/images/main/church.jpg";
import Reception from "../../assets/images/main/reception.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Locations() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animación para la primera tarjeta (derecha)
    if (card1Ref.current) {
      gsap.fromTo(
        card1Ref.current,
        {
          x: 50,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animación para la segunda tarjeta (izquierda)
    if (card2Ref.current) {
      gsap.fromTo(
        card2Ref.current,
        {
          x: -50,
          rotation: 0,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="location-section" className="scroll-mt-52">
      <div className="w-full h-full py-20">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 lg:gap-48">
          <div className="w-full h-full flex lg:justify-end justify-center items-center">
            <div ref={card1Ref}>
              <Card
                title={import.meta.env.VITE_CHURCH_TITLE_CARD}
                place={import.meta.env.VITE_CHURCH_NAME}
                image={Church}
                timeText={import.meta.env.VITE_CHURCH_TIME_TEXT}
                timeValue={import.meta.env.VITE_CHURCH_TIME}
                addressText={import.meta.env.VITE_CHURCH_ADDRESS_TEXT}
                addressValue={import.meta.env.VITE_CHURCH_ADDRESS}
                addressValue2={import.meta.env.VITE_CHURCH_ADDRESS2}
                addressValue3={import.meta.env.VITE_CHURCH_ADDRESS3}
                textButton={import.meta.env.VITE_CHURCH_TEXT_BUTTON}
                iconName={import.meta.env.VITE_CHURCH_ICON_BUTTON}
                location={import.meta.env.VITE_CHURCH_LOCATION}
                position="right"
              />
            </div>
          </div>
          <div className="w-full h-full flex lg:justify-start justify-center items-center">
            <div ref={card2Ref}>
              <Card
                title={import.meta.env.VITE_RECEPTION_TITLE_CARD}
                place={import.meta.env.VITE_RECEPTION_NAME}
                image={Reception}
                timeText={import.meta.env.VITE_RECEPTION_TIME_TEXT}
                timeValue={import.meta.env.VITE_RECEPTION_TIME}
                addressText={import.meta.env.VITE_RECEPTION_ADDRESS_TEXT}
                addressValue={import.meta.env.VITE_RECEPTION_ADDRESS}
                addressValue2={import.meta.env.VITE_RECEPTION_ADDRESS2}
                addressValue3={import.meta.env.VITE_RECEPTION_ADDRESS3}
                textButton={import.meta.env.VITE_RECEPTION_TEXT_BUTTON}
                iconName={import.meta.env.VITE_RECEPTION_ICON_BUTTON}
                location={import.meta.env.VITE_RECEPTION_LOCATION}
                position="left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-[1px] bg-gold" />
        <div className="w-full h-[1px] bg-gold" />
      </div>
    </section>
  );
}
