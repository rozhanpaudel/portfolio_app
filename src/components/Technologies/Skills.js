import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "programming-languages",
    Component: RiFlutterFill,
    title: "Programming Languages",
    Description: () => (
      <>C, C++, C#, Visual Basic,JAVA, Python, JavaScript (ES5 & ES6) </>
    ),
  },
  {
    slug: "mobile-development",
    Component: RiFlutterFill,
    title: "Mobile Development",
    Description: () => (
      <>
        Currently working with React Native to build cross platform mobile
        applications
      </>
    ),
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => (
      <>
        I can code in Java. But I mainly use it for building desktop
        applications.
      </>
    ),
  },
  {
    slug: "frameworks",
    Component: DiTerminal,
    title: "Frameworks & Technology",
    Description: () => (
      <>
        AJAX, Node JS and Express JS, React JS with Redux , Next JS, JWT, and
        Socket.io
      </>
    ),
  },
  {
    slug: "database",
    Component: SiFirebase,
    title: "Database",
    Description: () => (
      <>
        I have used Firebase, MongoDb, MySQL, PostgreSQL for auth, database &
        for push notifications
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
