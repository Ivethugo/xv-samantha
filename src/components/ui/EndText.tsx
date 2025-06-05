import Butterfly from "../../assets/gifs/butterfly.gif";

export function EndText() {
  const title = "font-cinzel text-4xl text-white text-center";

  return (
    <div className=" w-[300px] h-26 flex justify-center items-center relative">
      <div>
        <img
          className="h-12 w-12 absolute top-2 right-9"
          src={Butterfly}
          alt="Butterfly Animation"
        />
      </div>
      <div className={title}>
        <div>{import.meta.env.VITE_END_TITLE}</div>
      </div>
    </div>
  );
}
