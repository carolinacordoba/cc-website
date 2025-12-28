import { CgMonday } from "react-icons/cg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import { FaAlgolia } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiAdobe,
  SiCanva,
  SiFigma,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function IconBanner() {
  return (
    <div className="w-full flex items-center gap-4 py-10 px-6">
      <FaHtml5 />
      <FaCss3 />
      <SiTypescript />
      <SiJavascript />
      <FaReact />
      <SiTailwindcss />
      <SiNextdotjs />
      <FaNodeJs />
      <IoLogoFirebase />
      <SiMysql />
      <FaAlgolia />
      <CgMonday />
      <FaGithub />
      <SiCanva />
      <SiFigma />
      <SiAdobe />
    </div>
  );
}
