import { Modal, useAudio } from "../../index";
import Song from "../../assets/mp3/a_thousand_miles.mp3";

export function Audio() {
  const { isPlay } = useAudio();

  return (
    <>
      <Modal />
      {isPlay && <audio src={Song} autoPlay loop preload="auto" />}
    </>
  );
}
