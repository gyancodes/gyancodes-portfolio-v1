import React from "react";

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto flex justify-between mt-8 items-start flex-col px-4 font-mono ">
      <span>Hi 👋, I'm Gyan Prakash Tiwari</span>
      <span>A Full-Stack Developer and Open Source Enthusiast</span>
      <span className="mt-12">Let's Connect 👋</span>
      <div className="flex mt-2 gap-4">

        <a href="https://github.com/gyancodes">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="h-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/gyancodes/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            className="h-8"
          />
        </a>
        <a href="https://twitter.com/gyancodes">

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" className="h-8" />

        </a>
      </div>
    </div>
  );
};

export default Hero;
