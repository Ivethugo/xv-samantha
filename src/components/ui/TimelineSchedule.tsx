import { motion } from "framer-motion";

function Point() {
  return (
    <motion.div
      initial={{
        backgroundColor: "var(--color-gold)",
        borderColor: "var(--color-gold)",
      }}
      viewport={{ amount: 1, margin: "0px 0px -300px 0px" }}
      whileInView={{
        backgroundColor: "var(--color-base-100)",
        borderColor: "var(--color-base-100)",
        transition: { duration: 0 },
      }}
      className="w-3 h-3 rounded-lg border-2 absolute"
    ></motion.div>
  );
}
function Line() {
  return (
    <motion.div
      initial={{ backgroundColor: "var(--color-gold)" }}
      viewport={{ amount: 1, margin: "0px 0px -200px 0px" }}
      whileInView={{
        backgroundColor: "var(--color-base-100)",
        transition: { duration: 0 },
      }}
      className="w-0.5 h-[100px] absolute top-3"
    ></motion.div>
  );
}

export function TimelineSchedule() {
  return (
    <>
      <div className="absolute top-4">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>
      <div className="absolute top-[128px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[240px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[352px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
        </div>
      </div>

      <div className="absolute top-[464px]">
        <div className="w-4 h-[100px] flex justify-center relative">
          <Point />
          <Line />
          <motion.div
            initial={{
              backgroundColor: "var(--color-gold)",
              borderColor: "var(--color-gold)",
            }}
            viewport={{ amount: 1, margin: "0px 0px -300px 0px" }}
            whileInView={{
              backgroundColor: "var(--color-base-100)",
              borderColor: "var(--color-base-100)",
              transition: { duration: 1 },
            }}
            className="w-3 h-3 rounded-lg border-2 absolute top-[110px]"
          ></motion.div>
        </div>
      </div>
    </>
  );
}
