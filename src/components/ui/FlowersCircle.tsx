import FlowersCircleImage from "../../assets/images/main/flowers-circle.png";

export function FlowersCircle() {
  return (
    <>
      {/* Apply default (small) size and lg: prefix for larger size */}
      <div className="w-[360px] h-[500px] flex flex-col justify-center items-center relative">
        <img src={FlowersCircleImage} alt="FlowersCircleImage" />
        <div className="absolute font-cinzel font-semibold top-30">
          {import.meta.env.VITE_EVENT_NAME}
        </div>
        <div className="absolute pr-10 top-40 text-black font-monteCarlo text-6xl">
          {import.meta.env.VITE_FIRST_NAME}
        </div>
        <div className="absolute top-53 pt-10 font-cinzel font-semibold">
          {import.meta.env.VITE_DATE_STRING}
        </div>
      </div>
    </>
  );
}
