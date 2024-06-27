import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          Maulana Azad National Institute of Technology, Bhopal, [B.Tech-Computer Science & Engg] -2025<br />
          Jawahar Navodaya Vidyalaya,Vidisha [XII] -2021<br />
          Jawahar Navodaya Vidyalaya,Vidisha [X] -2019<br />          
        </span>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in C/C++, Experienced with Web Development Skills, VS Code, Git/GitHub <br />
           Strong grasp of Data Structure & Algorithms, Object-oriented Programming, Operating System, DataBase Management System
          Excellent problem-solving skills, Effective communicator and
          collaborator
        </span>
        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Achievements
        </h1>
        <span>
          Solved <b>500+</b> Coding Problems on various Platform <br />
          Scored <b>98.3%ile</b> in Joint Entrance Exam Mains 2021
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;