import React from "react";
import HTML from "./../../assets/html5.svg";
import CSS from "./../../assets/css3.svg";
import JS from "./../../assets/javascript.svg";
import ReactJS from "./../../assets/react.svg";
import NodeJS from "./../../assets/nodedotjs.svg";

const Skills = () => {
  return (
    <>
      <div className="mx-auto  max-w-3xl items-center justify-between mt-14 p-4 font-mono">
        <span className="text-2xl font-semibold mb-9 border-b-4 border-black" id="skills">Skills</span>
        <div className="flex gap-4 mt-9">
          <img src={HTML} className="h-12 " alt="" />
          <img src={CSS} className="h-12" alt="" />
          <img src={JS} className="h-12" alt="" />
          <img src={ReactJS} className="h-12" alt="" />
        </div>
        <div className="flex gap-4 mt-6">
          <img src={NodeJS} className="h-12" alt="" />

         
          <svg role="img" viewBox="0 0 24 24" fill="white" className="h-12" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            className="h-12"
          />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" className="h-12" />

        </div>
        <div className="flex gap-4 mt-6">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" className="h-12" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg" className="h-12" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" className="h-12" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="h-12" />






        </div>
      </div>
    </>
  );
};

export default Skills;
