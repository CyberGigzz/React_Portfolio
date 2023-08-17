import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Giga Katamadze. Please have a look around.</p>
          </div>
          <div>
            <p>
              I am a driven and ambitious individual who is passionate about web
              development. Although I am relatively new to the field, having
              started my journey just 6 months ago, I am determined to become a
              skilled full-stack developer in the JavaScript ecosystem. I am
              constantly learning and expanding my knowledge of front-end and
              back-end technologies, and I am committed to delivering
              high-quality, responsive web applications that meet the needs of
              my clients. With my dedication and hard work, I am confident that
              I will achieve my goal of becoming a successful full-stack web
              developer in the JavaScript world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
