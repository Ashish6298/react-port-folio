// import logo from "../assets/logo.png"
// import { FaGithub, FaLinkedin } from "react-icons/fa"
// import { FaSquareXTwitter } from "react-icons/fa6"
// import { FaInstagram} from "react-icons/fa"

// const Navbar = () => {
//   return (
// <nav className="mb-20 flex items-center justify-between py-6">
// <div className="flex flex-shrink-0 items-center">
// <img className="mx-2 w-10" src={logo} alt="logo"/>
// </div>
// <div className="m-8 flex items-center justify-center gap-4">
//     <FaLinkedin/>
//     <FaGithub/>
//     <FaSquareXTwitter/>
//     <FaInstagram/>

// </div>

// </nav>

//   )
// }

// export default Navbar

import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ashish-goswami-58797a24a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ fontSize: "1.5rem" }} />
        </a>
        <a
          href="https://github.com/Ashish6298"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ fontSize: "1.5rem" }} />
        </a>
        <a
          href="https://x.com/_ashish_goswami?t=D15mdObfOrz5xYKgkA6f1A&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter style={{ fontSize: "1.5rem" }} />
        </a>
        <a
          href="https://www.instagram.com/a.s.h.i.s.h__g.o.s.w.a.m.i?igsh=bWwyeDlqNzBhNHBh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ fontSize: "1.5rem" }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
