import ButtonFrame from "../../assets/images/loading/open_button.png";

type OpenButtonProps = {
  onClick: () => void;
};

export function OpenButton({ onClick }: OpenButtonProps) {
  return (
    <button
      className="w-full h-full relative cursor-pointer z-50"
      onClick={onClick}
    >
      <img
        src={ButtonFrame}
        alt="OpenButton"
        className="w-full h-full absolute top-0 left-0"
      />
      <h1 className="w-full h-full absolute -top-0 font-monteCarlo text-5xl text-gold">
        Abrir
      </h1>
    </button>
  );
}
