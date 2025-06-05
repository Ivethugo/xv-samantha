import { useState } from "react";
import BgImage from "../../assets/images/loading/loading.jpg";
import EnvLeft from "../../assets/images/loading/env_left.png";
import EnvRight from "../../assets/images/loading/env_right.png";
import { useAudio, CountUp, BlurText, OpenButton, useGuest } from "../../index";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

export function Loading() {
  const { code } = useGuest();
  const { isReady } = useAudio();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);
  const openAnimation = {
    duration: 1.5,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const handleOpenAnimation = () => {
    setEndAnimation(true);
  };
  const handleClick = () => {
    setEndAnimation(false);
    setIsClosing(true);
    setTimeout(() => {
      navigate(`/main${`/?code=${code}`}`);
    }, 1000);
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {isReady && (
          <>
            <div className="w-full h-full opacity-[0.8] bg-white relative" />
            {isClosing && (
              <div className="w-full h-full absolute flex justify-center items-center text-8xl mb-8 text-base-200 font-monteCarlo">
                {import.meta.env.VITE_FIRST_NAME}
              </div>
            )}
            <div
              className={`w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center gap-46 ${
                isClosing && "hidden"
              }`}
            >
              <BlurText
                text={import.meta.env.VITE_FIRST_NAME}
                delay={600}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleOpenAnimation}
                className="text-8xl mb-8 text-base-200 font-monteCarlo"
              />
              <div className="flex flex-row gap-2">
                <CountUp
                  from={0}
                  to={100}
                  direction="up"
                  duration={2}
                  className="count-up-text text-5xl font-bold text-base-200 font-monteCarlo"
                />
                <div className="text-5xl font-bold text-base-200 font-monteCarlo">
                  %
                </div>
              </div>
            </div>

            {/* Open Animation */}
            <AnimatePresence>
              {endAnimation && (
                <div className="w-full h-full absolute left-0 top-0 sm:w-[480px] sm:left-auto">
                  <div
                    className={`w-full h-full relative ${
                      endAnimation ? "" : "hidden"
                    }`}
                  >
                    {/* Envelope */}
                    <motion.div
                      animate={{ x: 0 }}
                      initial={{ x: -1000 }}
                      exit={{ x: -1000 }}
                      transition={{ openAnimation }}
                      className="w-full h-full obsolute left-0 top-0"
                    >
                      <img
                        src={EnvLeft}
                        alt="EnvLeft"
                        className="w-full h-full"
                      />
                    </motion.div>
                    <motion.div
                      animate={{ x: 0 }}
                      initial={{ x: 1000 }}
                      exit={{ x: 1000 }}
                      transition={{ openAnimation }}
                      className="w-full h-full absolute right-0 top-0"
                    >
                      <img
                        src={EnvRight}
                        alt="EnvRight"
                        className="w-full h-full "
                      />
                    </motion.div>

                    {/* Open Button */}
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        yoyo: Infinity,
                      }}
                    >
                      <motion.div
                        animate={{ x: 0 }}
                        initial={{ x: 1000 }}
                        exit={{ x: 1000 }}
                        transition={{ openAnimation }}
                        className="w-[200px] h-[50px] absolute left-32 top-[45%]"
                      >
                        <OpenButton onClick={handleClick} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </>
  );
}
