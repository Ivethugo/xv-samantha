import { Button } from "flowbite-react/components/Button";

type CardProps = {
  title: string;
  place: string;
  image: string;
  timeText: string;
  timeValue: string;
  addressText: string;
  addressValue: string;
  addressValue2: string;
  addressValue3: string;
  textButton: string;
  iconName: string;
  location: string;
  position: "left" | "right";
};

type MapProps = {
  location: string;
};

export function Card({
  title,
  place,
  image,
  timeText,
  timeValue,
  addressText,
  addressValue,
  addressValue2,
  addressValue3,
  textButton,
  iconName,
  location,
  position,
}: CardProps) {
  function googleMaps({ location }: MapProps) {
    window.open(location, "_blank");
  }

  const titleStyle = "p-3 font-cinzel text-2xl text-900";
  const midTitleStyle = "font-cinzel text-gold p-2 text-center";

  return (
    <div
      className={`w-[320px] h-[600px] px-2 py-4 border border-gold
      ${
        position === "right"
          ? "rounded-tl-[40px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[40px]"
          : "rounded-tl-[8px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[8px]"
      }
      shadow-2xl hover:shadow-2xl overflow-hidden transition-shadow duration-300 flex flex-col items-center gap-5 z-40 bg-white`}
    >
      <div className={titleStyle}>{title}</div>
      <div className="">
        <img
          src={image}
          alt="Image"
          width="250"
          className="inline-block transform-gpu rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-5 font-josefinSlab">
        <h1 className={midTitleStyle}>{place}</h1>
        <div className="flex flex-col justify-center items-center">
          <div>
            <span className="font-bold text-center">{timeText} </span>
            {timeValue}
          </div>
          <div className="text-center">
            <span className="font-bold text-center">{addressText} </span>
            {addressValue}
          </div>
          <div className="text-center">{addressValue2}</div>
          <div className="text-center">{addressValue3}</div>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => googleMaps({ location })}
            outline
            className="flex justify-center items-center gap-1 bg-base-200 text-white border-gold hover:bg-base-100 focus:bg-base-100 active:bg-base-100"
          >
            <div className="text-[13px]">{textButton}</div>
            <span className={`${iconName}`}></span>
          </Button>
        </div>
      </div>
    </div>
  );
}
