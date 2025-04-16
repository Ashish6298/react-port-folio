import { RiReactjsLine } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiFigma } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si"; // Proxy for SQL
import { SiGit } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiPostman } from "react-icons/si"; // Proxy for REST APIs
import { SiAdobexd } from "react-icons/si"; // Proxy for UI/UX design
import { SiC } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl text-blue-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <DiJava className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <AiFillHtml5 className="text-7xl text-red-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiFigma className="text-7xl text-pink-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiFlutter className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiNodedotjs className="text-7xl text-green-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiExpress className="text-7xl text-gray-300" />
        </motion.div>

        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiDart className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiAdobexd className="text-7xl text-pink-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiC className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiLinux className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border bg-neutral-800 p-4"
        >
          <SiKalilinux className="text-7xl text-gray-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
