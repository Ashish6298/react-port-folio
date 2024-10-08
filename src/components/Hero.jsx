// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/ashish.jpg";
// const hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <h1 className="pb-16 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl">
//               Ashish Goswami
//             </h1>
//             <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
//               FrontEnd Developer
//             </span>
//             <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
//               {HERO_CONTENT}
//             </p>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//         <div className="flex justify-center">
//           <img src={profilePic} alt=""/>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default hero;

// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/ashish.jpg";
// import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
// });

// const hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.h1
//               variants={container(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-16 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl"
//             >
//               Ashish Goswami
//             </motion.h1>
//             <motion.span
//               variants={container(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
//             >
//               FrontEnd Developer
//             </motion.span>

//             <motion.p
//               variants={container(1)}
//               initial="hidden"
//               animate="visible"
//               className="my-2 max-w-xl py-6 font-light tracking-tighter"
//             >
//               {HERO_CONTENT}
//             </motion.p>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center">
//             <motion.img
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               src={profilePic}
//               alt="Ashish Goswami"
//               className="w-50 h-80 rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ashish.jpg";
import { motion } from "framer-motion";
import resume from "../assets/ASHISH_RESUME.pdf"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thick tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ashish Goswami
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Ashish Goswami"
              className="w-50 h-80 rounded-xl"
            />
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
