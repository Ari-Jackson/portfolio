import computerCover from "./assets/computer-cover.jpg";
import profileImg from "./assets/ari-profile.jpg";
import secondCover from "./assets/secondStock.jpg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
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
            src={secondCover}
            alt="Desk with macbook"
            className="min-w-screen -z-20 mt-24  h-full brightness-50 md:h-auto md:brightness-75"
          />
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
          <div className=" z-20 mt-36 h-full w-full md:my-32">
            <div className="justify-self-start">
              <h1 className="font-heading-font pb-5 text-center text-4xl font-bold tracking-wide md:pb-10 md:text-left md:tracking-widest">
                ABOUT ME
              </h1>
              <div className="flex flex-col space-y-5 font-text md:flex-row md:space-x-10 md:space-y-0">
                <p className="w-full">
                  I'm an aspiring software developer, interested in making in
                  impact on the way we learn and grow. Growing up I've always
                  has a passion for computers and technology, but being one of
                  two children to an single immigrant mother meant we often
                  without the shinier newer things.
                </p>
                <p className="w-full">
                  I'm passionate about working on projects that support all
                  learners along their journey. Weather it's by helping future
                  developers begin their tech journey or by building tools that
                  make every learning journey possible.
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
              WHATS NEXT?
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
          <div className="flex flex-col justify-center space-y-5 py-5">
            <button className="rounded-md border px-5 py-3 lg:hover:bg-gray-300 lg:hover:text-black">
              Download My Full Resume
            </button>
            <p>© 2023 by Ari Jackson with ❤️</p>
          </div>
        </footer>
      </ParallaxLayer>
    </>
  );
};
