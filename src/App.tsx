import computerCover from "./assets/computer-cover.jpg";
import profileImg from "./assets/ari-profile.jpg";
import secondCover from "./assets/secondStock.jpg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiReactquery,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

type parallaxLayer = (prop: { offset: number; speed?: number }) => JSX.Element;

export default function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} factor={0.5} speed={0.5}>
          <img
            src={computerCover}
            className="min-w-screen -z-10 h-full brightness-50 md:-mt-96 md:h-auto md:brightness-75"
          />
        </ParallaxLayer>
        <NameCard offset={0} />
        <ParallaxLayer offset={0.5}>
          <img
            alt="Desk with macbook"
            className="min-w-screen -z-20 mt-24  h-full brightness-50 md:brightness-75 lg:h-auto"
            src={secondCover}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.2}>
          <div className="text-center md:px-40 lg:px-64">
            <h1 className="font-heading-font mb-2 text-4xl font-bold tracking-wider text-white lg:text-left">
              Skills
            </h1>
            <div className="flex justify-between">
              {/* <div className="rounded-full bg-sky-600 p-5">
                <SiTypescript className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiJavascript className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiReact className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiTailwindcss className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiExpress className="h-12 w-12 p-2 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiPostgresql className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <SiMysql className="h-12 w-12 text-white" />
              </div>
              <div className="rounded-full bg-sky-600 p-5">
                <TbSql className="h-12 w-12 text-white" />
              </div> */}
            </div>
          </div>
        </ParallaxLayer>
        <AboutMe offset={0.45} speed={1} />
        <FooterAndContact offset={1.75} />
      </Parallax>
    </>
  );
}

const NameCard: parallaxLayer = ({ offset }) => {
  return (
    <>
      <ParallaxLayer offset={offset}>
        <div className=" flex w-full flex-col items-center">
          <h1 className="mt-20 font-name text-6xl tracking-tighter text-white [word-spacing:-20px] md:mt-16 md:text-8xl">
            Ari Jackson
          </h1>
          <p className="font-heading-font mt-2 text-2xl font-bold capitalize tracking-widest text-slate-50 md:text-2xl">
            FULL STACK DEVELOPER
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
};

const AboutMe: parallaxLayer = ({ offset, speed }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={speed}>
        <div className="relative flex h-fit w-full justify-center bg-white px-8 pb-12 md:h-auto md:px-40 lg:px-64">
          <div className="absolute -top-28 mb-32 h-60 w-60 rounded-full border-8 border-white">
            <img src={profileImg} className="rounded-full" />
          </div>
          <div className=" z-20 mt-36 h-full w-full md:mb-10">
            <div className="justify-self-start">
              <h1 className="font-heading-font pb-5 text-center text-4xl font-bold tracking-wide md:pb-10 md:text-left md:tracking-widest">
                ABOUT ME
              </h1>
              <div className="flex flex-col space-y-5 font-text md:flex-row md:space-x-10 md:space-y-0">
                <p className="w-full">
                  My journey into software engineering began when I first
                  started to manage my ADHD as an adult, apart from my family. I
                  was determined to prove that I wasn't just lazy and
                  irresponsible and that what I really needed were the right
                  tools.I started by building simple, customized, apps with
                  Notion and quickly developed a passion for building systems
                  that genuinely make an impact.
                </p>
                <p className="w-full">
                  I decided to learn how to create web apps to help individuals
                  like myself and anyone who wants to move faster without
                  working harder. My passion for using tech to improve
                  efficiency has followed me across my positions, improving
                  performance for myself and my teams. Using Typescript and
                  React, I build apps that help me genuinely solve problems, and
                  understand how to measure and build on that success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

const FooterAndContact: parallaxLayer = ({ offset }) => {
  return (
    <>
      <ParallaxLayer offset={offset}>
        <footer className="z-20 -mt-24 flex w-full flex-col items-center justify-center bg-white pt-10 font-text md:-mt-0 md:h-60  md:flex-row md:items-start md:space-x-40">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className=" font-heading text-xl tracking-widest">
              WHAT'S NEXT?
            </h1>
            <div className="flex justify-between">
              <a href="mailto:arijackson@pursuit.org" target="_blank">
                <FiMail className="text-xl duration-200 ease-in lg:hover:-translate-y-2 lg:hover:scale-125 lg:hover:text-blue-500" />
              </a>
              <a href="https://github.com/Ari-Jackson" target="_blank">
                <FiGithub className="text-xl duration-200 ease-in lg:hover:-translate-y-2 lg:hover:scale-125 lg:hover:text-blue-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ari-j-jackson/"
                target="_blank"
              >
                <FiLinkedin className="text-xl duration-200 ease-in lg:hover:-translate-y-2 lg:hover:scale-125 lg:hover:text-blue-500" />
              </a>
            </div>
            <h1 className="text-center font-heading">Let's connect!</h1>
          </div>
          <div className="flex flex-col items-center space-y-5 py-5">
            <button className="rounded-md border px-5 py-3 lg:hover:bg-gray-400 lg:hover:text-white">
              Download My Full Resume
            </button>
            <p>© 2023. Made by Ari with ❤️</p>
          </div>
        </footer>
      </ParallaxLayer>
    </>
  );
};
