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

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            className="h-12"
          />

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
