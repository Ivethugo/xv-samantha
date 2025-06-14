import Church from "../../assets/icons/church.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGuest } from "../../index";
gsap.registerPlugin(ScrollTrigger);

export function Godparents() {
  const { code } = useGuest();

  const godparentsText =
    "px-6 text-center font-cinzelDecorative text-base-100 text-3xl xl:text-4xl";
  const invitation = "font-josefinSlab text-[16px] text-gold px-6 text-center";
  const parents = "font-cinzel text-[10PX] text-900 text-center";

  const titleRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const parentsBoxRef = useRef<HTMLDivElement>(null);
  const godparentsInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      titleRef.current,
      invitationRef.current,
      parentsBoxRef.current,
      godparentsInfoRef.current,
    ];

    elements.forEach((element, index) => {
      if (element) {
        gsap.fromTo(
          element,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: index * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="godparents-section" className="scroll-mt-52">
      <div className="bg-white flex flex-col gap-10 items-center py-1">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full h-[1px] bg-gold" />
          <div className="w-full h-[1px] bg-gold" />
        </div>

        <div ref={titleRef} className={godparentsText}>
          <div>{import.meta.env.VITE_GODPARENTS_TITLE}</div>
          <div>{import.meta.env.VITE_GODPARENTS_TITLE2}</div>
          <div>{import.meta.env.VITE_GODPARENTS_TITLE3}</div>
        </div>
        <div ref={invitationRef}>
          <div className={invitation}>{import.meta.env.VITE_INVITATION}</div>
        </div>
        <div
          ref={parentsBoxRef}
          className="w-[300px] h-[100px] flex flex-col justify-center gap-3 text-center bg-smoth-gold border border-gold rounded-[10px]"
        >
          <div className={parents}>
            <div>{import.meta.env.VITE_FATHER_NAME}</div>
            <div>{import.meta.env.VITE_MOTHER_NAME}</div>
          </div>
        </div>
        {code === "maxlagunes" ? (
          <div
            ref={parentsBoxRef}
            className="w-[300px] h-[100px] flex flex-col justify-center gap-3 text-center bg-smoth-gold border border-gold rounded-[10px]"
          >
            <div className={parents}>
              <div>{import.meta.env.VITE_GODPARENTS_TAHNKS}</div>
              <div>{import.meta.env.VITE_GODPARENT_MAX}</div>
            </div>
          </div>
        ) : null}
        {code === "AAAAA" ? (
          <div
            ref={parentsBoxRef}
            className="w-[300px] h-[100px] flex flex-col justify-center gap-3 text-center bg-smoth-gold border border-gold rounded-[10px]"
          >
            <div className={parents}>
              <div>{import.meta.env.VITE_GODPARENTS_TAHNKS}</div>
              <div>{import.meta.env.VITE_GODPARENT_LUIS}</div>
            </div>
          </div>
        ) : null}
        <div ref={godparentsInfoRef} className="flex flex-col gap-10">
          <div className={godparentsText}>
            {import.meta.env.VITE_GODPARENTS_TEXT}
          </div>
          <div className="flex justify-center item-center">
            <img src={Church} alt="church image" className="w-22 h-22" />
          </div>
          <div className={parents}>
            <div>{import.meta.env.VITE_GODFATHER_NAME}</div>
            <div>{import.meta.env.VITE_GODMOTHER_NAME}</div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="w-full h-[1px] bg-gold" />
          <div className="w-full h-[1px] bg-gold" />
        </div>
      </div>
    </section>
  );
}
