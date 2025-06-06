import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Sound from "../../assets/animated-icons/sound.json";
import { useAudio, Button } from "../../index";
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
          className="fixed inset-0 flex items-start justify-center p-4 select-none"
          style={{ zIndex: 1000, pointerEvents: "auto" }}
        >
          <motion.div
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full border-1 border-gold shadow-lg"
          >
            <div className="flex justify-center">
              <Lottie animationData={Sound} loop={true} className="w-30 h-30" />
            </div>
            <p className="mb-4 text-center">
              {import.meta.env.VITE_AUDIO_QUESTION}
            </p>
            <div className="w-full h-full flex flex-row justify-end items-center gap-5 pr-10">
              <Button
                w="w-[80px]"
                border={false}
                onClick={() => handleClick(false)}
              >
                No
              </Button>
              <Button
                w="w-[120px]"
                border={true}
                onClick={() => handleClick(true)}
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
