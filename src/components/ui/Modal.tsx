import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Sound from "../../assets/animated-icons/sound.json";
import { Button } from "flowbite-react/components/Button";
import { useAudio } from "../../index";
import { useState } from "react";

export function Modal() {
  const [openModal, setOpenModal] = useState(true);
  const { setIsPlay, setIsReady } = useAudio();

  const handleClick = (isPlay: boolean) => {
    if (isPlay) setIsPlay(true);
    setOpenModal(false);
    setIsReady(true);
  };

  return (
    <AnimatePresence>
      {openModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-start justify-center p-4 select-none"
          style={{ zIndex: 1000, pointerEvents: "auto" }}
        >
          <motion.div
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full"
          >
            <div className="flex justify-center">
              <Lottie animationData={Sound} loop={true} className="w-30 h-30" />
            </div>
            <p className="mb-4 text-center">
              {import.meta.env.VITE_AUDIO_QUESTION}
            </p>
            <div className="w-full h-full flex flex-row justify-end items-center gap-5 pr-10">
              <Button
                outline
                color="failure"
                onClick={() => handleClick(false)}
                className="text-gold active:text-base-100 focus:text-base-100"
              >
                No
              </Button>
              <Button
                outline
                onClick={() => handleClick(true)}
                className="border-gold text-gold hover:bg-base-100 hover:border-base-100"
              >
                Si, deacuerdo!
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
