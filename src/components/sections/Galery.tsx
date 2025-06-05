import { useEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Img1 from "../../assets/galery/img1.jpg";
import Img2 from "../../assets/galery/img2.jpg";
import Img3 from "../../assets/galery/img3.jpg";
import Img4 from "../../assets/galery/img4.jpg";
import Img5 from "../../assets/galery/img5.jpg";
import Img6 from "../../assets/galery/img6.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Galery() {
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const imagesContainerStyle = "w-50 h-70 overflow-hidden border-2 border-gold";
  const title =
    "p-3 text-center font-cinzelDecorative text-base-100 text-3xl xl:text-4xl";

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) imagesRef.current[index] = el;
  };

  useEffect(() => {
    imagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          x: index % 2 === 0 ? -50 : 50,
          rotation: index % 2 === 0 ? -30 : 30,
          opacity: 0,
        },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="galery-section"
      className="w-full h-full flex flex-col gap-10 py-10 scroll-mt-52"
    >
      <div className={title}>{import.meta.env.VITE_GALLERY_TITLE}</div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:justify-items-center lg:items-center lg:gap-5 gap-10 justify-center items-center">
        {[Img1, Img2, Img3, Img4, Img5, Img6].map((img, index) => (
          <div
            key={`img-${index}`}
            ref={(el) => addToRefs(el, index)}
            className={imagesContainerStyle}
          >
            <img
              src={img}
              alt={`Img${index + 1}`}
              width="100%"
              height="100%"
              className={`object-cover w-full h-full`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
