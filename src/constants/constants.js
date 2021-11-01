export const projects = [
  {
    title: "Doctalk Mobile App Backend",
    description:
      "Doc Talk Mobile Application is a health management app used by doctors to keep track the records of Patient Health Issues.In this project, I have used socket.io for real time connection , SMS Gateway for Mobile Verification, Email Gateway for Email Verification, JWT Tokens ,bcrypt JS for password hashing and many more packages",
    image: "/images/doctalk_app.jpg",
    tags: ["Node JS", "Express JS", "Socket.io", "MongoDB", "Firebase"],
    source: "https://github.com/rozhanpaudel",
    visit:
      "https://play.google.com/store/apps/details?id=health.xyba.docTalk&hl=en",
    id: 3,
  },
  {
    title: "Mero Chatroom",
    description:
      "Basically Mero Chat Room is a web application where a user can register,and after the approval of an account user can login , can create unique chat rooms & add others users to the room and chat with them about the confidential Issues. It is a role based group chat app where admin have privilege to accept the unverified users.",
    image: "/images/merochatroom.png",
    tags: ["React", "Node JS", "Socket.io", "Express JS", "Mongo DB"],
    source: "https://github.com/rozhanpaudel",
    visit: "http://merochatroom.herokuapp.com/",
    id: 1,
  },

  {
    title: "Doctalk Landing Page ",
    description:
      "Doc Talk Mobile Application is a health management app used by doctors to keep track the records of Patient Health Issues.",
    image: "/images/doctalk.jpg",
    tags: ["HTML5", "CSS3", "JQUERY", "NODEMAILER"],
    source: "https://github.com/rozhanpaudel",
    visit: "https://www.doctalk.health",
    id: 2,
  },

  {
    title: "Nepal Corona Tracker",
    description:
      "Nepal corona tracker tracks the corona statistics of Country Nepal. In this Web App, I have implemented the API provided by Nepal Health Organization.(As of 2021 , Nepal Health Org removed their api that fetch details)",
    image: "/images/covid.jpg",
    tags: ["JavaScript", "NPM", "React", "API"],
    source: "https://gitlab.com/rozhan.paudel98/coronatracker",
    visit: "https://nepalcoronatracker.netlify.app/",
    id: 0,
  },
  // {
  //   title: "Lenovo SNAPit",
  //   description:
  //     "Lenovo SNAPit Camera was one of the finest OEM camera apps back in those days. It had tonnes of unique and amazing features. I ported it to work on almost all devices at that time.",
  //   image: "/images/snapit.jpg",
  //   tags: ["Java", "Libs", "Smali"],
  //   source: "#",
  //   visit:
  //     "https://forum.xda-developers.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/",
  //   id: 3,
  // },
  // {
  //   title: "CyanogenOS Apps",
  //   description:
  //     "CyanogenOS 12.1 had a set of exclusive apps like a new theme engine and a new Truecaller integrated dialer. I ported it to work with CyanogenMod 13 and CM 13 based ROMs.",
  //   image: "/images/capps.jpg",
  //   tags: ["Java", "Libs"],
  //   source: "#",
  //   visit:
  //     "https://forum.xda-developers.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/",
  //   id: 3,
  // },
];

export const TimeLineData = [
  {
    year: 2019,
    text: "Started my journey as a new developer. I have taken a MERN Stack development Course",
  },
  {
    year: 2020,
    text: "Joined Company and started to work as a web application developer,built many rest apis, worked on real life projects.",
  },
  {
    year: 2021,
    text: "Learned React framework Next JS and working as a Freelance Developer",
  },
];
