import { CgMonday } from "react-icons/cg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGithub, FaPhp, FaWordpress, FaMailchimp } from "react-icons/fa";
import { FaAlgolia } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiAdobe,
  SiCanva,
  SiCypress,
  SiFigma,
  SiGoogleanalytics,
  SiJavascript,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
} from "react-icons/si";

export default function IconBanner() {
  return (
    <div className="w-full h-40 flex items-center justify-center gap-8 py-10 px-6">
      <FaHtml5 className="icon-effect" aria-label="HTML5" />
      <FaCss3 className="icon-effect" aria-label="CSS3" />
      <SiTypescript className="icon-effect" />
      <SiJavascript className="icon-effect" aria-label="JavaScript" />
      <FaReact className="icon-effect" aria-label="React" />
      <SiTailwindcss className="icon-effect" aria-label="Tailwind CSS" />
      <FaPhp className="icon-effect" aria-label="PHP" />
      <SiNextdotjs className="icon-effect" />
      <FaNodeJs className="icon-effect" />
      <IoLogoFirebase className="icon-effect" />
      <SiMysql className="icon-effect" />
      <SiPostman className="icon-effect" />
      <SiCypress className="icon-effect" />
      <CgMonday className="icon-effect" />
      <FaWordpress className="icon-effect" aria-label="WordPress" />
      <SiWoocommerce className="icon-effect" />
      <FaAlgolia className="icon-effect" />
      <SiGoogleanalytics className="icon-effect" />
      <FaMailchimp className="icon-effect" />
      <SiVercel className="icon-effect" />
      <FaGithub className="icon-effect" />
      <SiJira className="icon-effect" />
      <SiCanva className="icon-effect" />
      <SiFigma className="icon-effect" />
      <SiAdobe className="icon-effect" />
    </div>
  );
}
