// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Experience Section Logo's


// Education Section Logo's
import makaut from './assets/education_logo/makaut.png';
import tdc from './assets/education_logo/TDC.jpg';
import shs from './assets/education_logo/shs.jpeg';
import crvb from './assets/education_logo/crvb.jpeg';




// Project Section Logo's
import attendance from './assets/work_logo/attendance.png';
import code_review from './assets/work_logo/Code_review.png';
import heylo from './assets/work_logo/heylo-ss.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: makaut,
      school: "Maulana Abul Kalam Azad University of Technology",
      date: "Oct 2024 - July 2026",
      // grade: "7.81 CGPA",
      desc: "Pursuing MCA at Maulana Abul Kalam Azad University of Technology, West Bengal, with a focus on programming, software development, and core computer science. Gaining expertise in Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: tdc,
      school: "Tarakeswar Degree College",
      date: "Sept 2021 - Aug 2024",
      grade: "83.48%",
      desc: "Graduated from Tarakeswar Degree College, West Bengal, with strong knowledge in Data Structures, Algorithms, Web Development, and DBMS. Completed projects applying theoretical concepts to real-world challenges.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: shs,
      school: "Shyampur High School",
      date: "2019 - 2021",
      grade: "77.2%",
      desc: "I completed my class 12 education from Shyampur High School, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "WBCHSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: crvb,
      school: "Chiladangi Rabindra VidyaBithi",
      date: "2018 - 2019",
      grade: "71.57%",
      desc: "I completed my class 10 education from Chiladangi Rabindra VidyaBithi.",
      degree: "WBBSE(X)",
    },
  ];
  
  export const projects = [ 
    
     {
      id: 0,
      title: "Heylo - A Realtime Chat Application",
      description:
        "Built Heylo — a realtime chat application developed with React.js, Node.js, Express, and Socket.io, allowing users to communicate instantly through a smooth and responsive interface. The app features live message updates, active user tracking, and efficient event-driven communication for a seamless chatting experience.",
      image: heylo,
      tags: ["React","NodeJs","ExpressJs","MongoDB","Socket.io"],
      github: "https://github.com/ArijitAdhikari25/Chat-App",
      webapp: "https://heylo-chat-app.onrender.com",
    },
     {
      id: 1,
      title: "AI-Powered Code Reviewer",
      description:
        "Developed an AI-powered code review platform using React.js for the frontend and Node.js/Express for the backend, enabling users to input code, receive automated reviews, and view feedback with syntax highlighting and markdown rendering.",
      image: code_review,
      tags: ["React", "NodeJs", "ExpressJs", "Google Gemini API", "CSS"],
      github: "https://github.com/ArijitAdhikari25/Ai-Code-Reviewer-Front",
      webapp: "https://ai-code-reviewer-front.vercel.app/",
    },
     {
      id: 2,
      title: "Online Student Attendence Management System",
      description:
        "Developed a web-based system for managing and monitoring student attendance,enabling teachers to record daily attendance and administrators to access real-time reports.",
      image: attendance,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "#",
      webapp: "https://attendence.lovestoblog.com/",
    },
    
  ];  