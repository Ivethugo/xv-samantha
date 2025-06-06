import Image1 from "../../assets/images/main/ImgCircle1.png";
import Image2 from "../../assets/images/main/ImgCircle2.png";
import { ImageCircle } from "../../index.ts";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Introduce() {
  const classImage = "w-[150px] h-[150px] xl:w-[200px] xl:h-[200px]";
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      image1Ref.current,
      {
        x: 100,
        opacity: 0,
        rotation: 45,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      {
        x: -100,
        opacity: 0,
        rotation: -45,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animación para textos con ScrollTrigger
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="introduce-section"
      className="bg-white-50 flex flex-col gap-5 justify-center items-center scroll-mt-20"
    >
      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-[1px] bg-gold" />
        <div className="w-full h-[1px] bg-gold" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:px-10">
        <div ref={image1Ref} className={classImage}>
          <ImageCircle image={Image1} />
        </div>
        <div
          ref={textRef}
          className="flex flex-col text-center gap-8 lg:gap-16"
        >
          <div className="font-cinzelDecorative text-gold text-3xl xl:text-4xl">
            {import.meta.env.VITE_TITLE}
          </div>
          <div className="font-josefinSlab text-center text-[18px] px-5">
            {import.meta.env.VITE_PRAYER}
          </div>
          <div className="font-greatVibes text-2xl xl:text-3xl text-gold">
            {import.meta.env.VITE_THANKS_TEXT}
          </div>
        </div>
        <div ref={image2Ref} className={classImage}>
          <ImageCircle image={Image2} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full h-[1px] bg-gold" />
        <div className="w-full h-[1px] bg-gold" />
      </div>
    </section>
  );
}
