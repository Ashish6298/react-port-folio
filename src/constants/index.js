import shopping from "../assets/projects/shopping.png";
import task from "../assets/projects/task.png";
import rest from "../assets/projects/rest.png";
import airport from "../assets/projects/airport.png";
import medisynth from "../assets/projects/medisynth.jpg";
import uiux from "../assets/projects/uiux.png";



export const HERO_CONTENT = `I'm a front-end enthusiast with a flair for designing sleek and interactive web interfaces.My journey with cutting-edge technologies like React and Next.js has equipped me with the skills to not only design beautiful interfaces but also to ensure they are fast, scalable, and a joy to use.Driven by creativity and a relentless pursuit of excellence, I thrive on pushing the boundaries of what's possible on the web. I meticulously fine-tune every pixel and every line of code, ensuring that the end product is not just functional but also a masterpiece in its own right. My ultimate goal is to create digital experiences that leave a lasting impression, drive business growth, and delight users at every interaction.`;

export const ABOUT_TEXT = `I'm a front-end developer with a knack for crafting visually striking, responsive web interfaces. Leveraging tools like React and Next.js, I turn concepts into sleek, intuitive user experiences that are both captivating and high-performing. Passionate about pushing the boundaries of web design, I thrive in collaborative environments where creativity meets technology to deliver exceptional digital solutions.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: shopping,
    description:
      "A e-commerce website with features like product listing, shopping cart, and product quantity.",
    technologies: ["HTML", "CSS", "JS","Bootstrap"],
    link: ["https://github.com/Ashish6298/Shopping-project"],
  },
  {
    title: "Task Management App",
    image: task,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "MongoDb"],
    link: ["https://github.com/Ashish6298/TaskManager"]
  },
  {
    title: "Resturant Website",
    image: rest,
    description:
      "A resturant website where you can see the recipies of the food, divided into veg and non-veg category and on the basis of states basis also.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: ["https://github.com/Ashish6298/SIP_FINAL_PROJECT"]
  },
  {
    title: "Airport Car Parking",
    image: airport,
    description:
      "A frontend website to book parking slot for the airport parking area based on the day and airport location with time , at what time you want to park your car with charges.",
    technologies: ["HTML", "CSS","JS"],
    link: ["https://github.com/Ashish6298/Airport_Car_Parking12"]
  
  },
  {
    title: "AI Virtual Patient",
    image: medisynth,
    description:
      "A pivotal feature introduces an AI-generated patient exhibiting lifelike symptoms and presenting a simulated body temperature. Students should diagnose and prescribe medications, and then they receive real-time feedback with alternative suggestions through a user-friendly interface. The application will take the access of camera and microphone to get the data from students so as to provide an immersive learning experience. ",
    technologies: ["HTML", "CSS","JS","Typescript","Python3"],
    link: ["https://github.com/SanskariTechies/MediSynth"]
  
  },

  {
    title: "Tetherfi Internship",
    image: uiux,
    description: "Mobile application for customer support agents.The project aimed to develop a sophisticated backend system designed to handle user authen-tication, communication through SMS and calls, and email notifications.",
    technologies: ["HTML", "CSS","JS","Typescript","Python3"],
    link: ["https://github.com/SanskariTechies/MediSynth"]
  
  },
];

export const CONTACT = {
  address: "Room No. 307 Sahyadri Boy's Hostel Adyar , Mangalore ",
  phoneNo: "+91 8804339456 ",
  email: "ashishgoswami1013@gmail.com",
};
