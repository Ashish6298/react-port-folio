import REllMate from "../assets/projects/REllMate.png";
import care from "../assets/projects/care.png";
import bargain from "../assets/projects/bargain.png";
import fileforge from "../assets/projects/fileforge.png";
import medisynth from "../assets/projects/medisynth.jpg";
import uiux from "../assets/projects/uiux.png";


export const HERO_CONTENT = `I'm a dynamic front-end developer with a passion for crafting intuitive and visually stunning user interfaces that elevate digital experiences. My expertise in Flutter, React.js, and UI/UX design allows me to build responsive, AI-driven applications, from healthcare kiosks to interactive web platforms. With a strong foundation in technologies like Node.js and REST APIs, I ensure seamless integration of front-end designs with robust backends. Driven by creativity and precision, I meticulously refine every pixel and interaction, delivering fast, scalable solutions that captivate users. My mission is to create front-end masterpieces that not only enhance usability but also drive innovation, leaving a lasting impact on users and industries alike.`;
export const ABOUT_TEXT = `I'm a front-end developer with a passion for creating visually captivating and highly responsive user interfaces that redefine user experiences. Proficient in Flutter, React.js, and UI/UX design, I transform ideas into seamless, AI-driven applications, from intuitive hospital kiosks to dynamic web platforms. My skills in Node.js, REST APIs, and Dart enable me to bridge stunning front-end designs with robust backends, ensuring optimal performance and scalability. Thriving in collaborative settings, I blend creativity with technical precision to deliver innovative digital solutions that engage users and drive impactful results.`;
export const PROJECTS = [
  {
    title: "FileForge: File Conversion & Manipulation Suite",
    image: fileforge,
    description:
      "Welcome to FileForge, a cutting-edge, futuristic backend solution built to transform, summarize, merge, split, and rearrange your documents and media files with unparalleled ease. Powered by modern Node.js technologies and infused with AI-driven capabilities, FileForge is your portal to a seamless file-handling experience. Whether you're converting PDFs to DOCX, extracting audio from videos, or summarizing lengthy documents, FileForge has you covered—fast, secure, and futuristic.",
    technologies: [
      "Node.js",
      "Express",
      "Multer",
      "FFmpeg",
      "Tesseract.js",
      "Gemini API",
      "PDFKit",
      "docx",
    ],
    link: ["https://file-forge-livid.vercel.app/"],
  },

  {
    title: "ReelMate",
    image: REllMate,
    description:
      "ReelMate is a powerful and user-friendly app that allows you to download Instagram Reels, YouTube videos, and YouTube Shorts effortlessly. Whether you want to save videos for offline viewing or share them with friends, ReelMate makes it simple!",
    technologies: ["flutter", "dart", "Node js", "FFmpeg", "AWS", "yt-dlp"],
    link: ["https://github.com/Ashish6298/REELMATE/releases/tag/v1.2"],
  },
  {
    title: "CARELINK",
    image: care,
    description:
      "The Hospital Kiosk System is an interactive solution designed to streamline patient appointment booking and lab test management in a hospital setting. Patients can use the kiosk to register, book appointments with specialists based on symptoms, pay consultation fees, and manage lab tests prescribed by doctors. The system integrates with a doctor-facing mobile app called CareLink, enabling seamless communication between patients, doctors, and lab personnel.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "MongoDb",
      "Flutter",
      "Dart",
      "Python",
      "multer",
      "Node js",
      "websocket",
    ],
    link: ["https://github.com/orgs/FusionFrameworks/repositories"],
  },
  {
    title: "BARGAIN BOT",
    image: bargain,
    description:
      "Real-time price comparison and analysis powered by AI & web scrapers. Find the best deals in seconds! Track price history,get price drop alerts —all in one place.",
    technologies: [
      "React.js (MUI)",
      "Node.js + Express",
      "Puppeteer",
      "MongoDB",
      "Google Gemini AI	",
      "Chart.js",
    ],
    link: ["https://bargain-bot.vercel.app/"],
  },

  {
    title: "AI Virtual Patient",
    image: medisynth,
    description:
      "A pivotal feature introduces an AI-generated patient exhibiting lifelike symptoms and presenting a simulated body temperature. Students should diagnose and prescribe medications, and then they receive real-time feedback with alternative suggestions through a user-friendly interface. The application will take the access of camera and microphone to get the data from students so as to provide an immersive learning experience. ",
    technologies: ["HTML", "CSS", "JS", "Typescript", "Python3"],
    link: ["https://github.com/SanskariTechies/MediSynth"],
  },

  {
    title: "Tetherfi Internship",
    image: uiux,
    description:
      "Mobile application for customer support agents.The project aimed to develop a sophisticated backend system designed to handle user authen-tication, communication through SMS and calls, and email notifications.",
    technologies: ["HTML", "CSS", "JS", "Typescript", "Python3"],
    link: ["https://github.com/SanskariTechies/MediSynth"],
  },
];

export const CONTACT = {
  phoneNo: "+91 8804339456 ",
  email: "ashishgoswami1013@gmail.com",
};
