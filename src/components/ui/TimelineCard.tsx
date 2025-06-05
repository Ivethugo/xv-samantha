type CardProps = {
  img1: string;
  text1: string;
  text11: string;
  img2: string;
  text2: string;
  text22: string;
};

export function TimelineCard({
  img1,
  text1,
  text11,
  img2,
  text2,
  text22,
}: CardProps) {
  return (
    <div className="w-full flex flex-col gap-10 font-cinzel text-deep-primary">
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <img src={img1} alt={text1} className="w-16 h-16 timeline-icon" />
        </div>
        <div className="flex flex-col justify-center items-start pl-5">
          <div className="w-full flex justify-center">{text1}</div>
          <div className="w-full flex justify-center">{text11}</div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-start pr-5">
          <div className="w-full flex justify-center">{text2}</div>
          <div className="w-full flex justify-center">{text22}</div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={img2}
            alt={text2}
            className={
              text2 === "FIN DEL EVENTO"
                ? "w-20 h-22 timeline-icon"
                : "w-16 h-16 timeline-icon"
            }
          />
        </div>
      </div>
    </div>
  );
}
