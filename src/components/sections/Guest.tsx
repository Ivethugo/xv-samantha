import { useGuest } from "../../index.ts";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "flowbite-react/components/Button";

gsap.registerPlugin(ScrollTrigger);

export function Guest() {
  const { name, tickets } = useGuest();
  const containerRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    const phoneNumber = "522227160481";
    const message = encodeURIComponent(
      `Hola buen día, por este medio me gustaría confirmar mi asistencia 
a los xv años de Samantha que se celebrarán el día ${
        import.meta.env.VITE_DATE_STRING_CAPITAL
      }
      
    Mis datos personales son:
      
    *${name}*  
    *Mi numero de boletos a confirmar son ${tickets}!* 

*Muchas gracias y nos vemos pronto!* 😊`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const title =
    "px-6 text-center font-cinzelDecorative text-base-100 text-3xl xl:text-4xl";
  const parents = "font-cinzel text-[10PX] text-base-100 text-center";

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.4, // Incrementado para mayor separación entre elementos
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section id="guest-section" className="bg-white scroll-mt-52">
      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-[1px] bg-gold" />
        <div className="w-full h-[1px] bg-gold" />
      </div>

      <div
        ref={containerRef}
        className="flex flex-col items-center gap-12 md:gap-20 lg:gap-22 py-10"
      >
        <div className={title}>{import.meta.env.VITE_GUEST_TITLE}</div>
        <div className="w-[250px] md:w-[400px] font-josefinSlab font-semibold text-center lg:text-[20px] text-gold">
          {import.meta.env.VITE_TEXT_CONFIRMATION}
        </div>
        <div className="w-[300px] h-[120px] flex flex-col justify-center gap-1 text-center bg-smoth-gold border border-gold rounded-[10px]">
          <div className={parents}>
            <div>{import.meta.env.VITE_TEXT_BOOKING}</div>
            <div className="text-2xl font-semibold">{tickets}</div>
            <div>{import.meta.env.VITE_TEXT_BOOKING2}</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center font-josefinSlab font-semibold text-base-100 text-2xl">
          <div>{name}</div>
        </div>

        <Button
          onClick={sendMessage}
          outline
          className="flex justify-center items-center gap-1 bg-base-200 text-white border-gold hover:bg-base-100 focus:bg-base-100 active:bg-base-100"
        >
          {import.meta.env.VITE_TEXT_BUTTON}
        </Button>
      </div>

      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-[1px] bg-gold" />
        <div className="w-full h-[1px] bg-gold" />
      </div>
    </section>
  );
}
