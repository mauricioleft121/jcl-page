import { Link } from "react-router-dom";
import logoDark from "@/assets/Logo JCL.png";
import logoLight from "@/assets/Logo JCL Branca.png";

interface LogoProps {
  /** "light" = logo clara (para fundos escuros) · "dark" = logo escura (para fundos claros) */
  theme?: "light" | "dark";
  className?: string;
  /** Envolve em <Link to="/"> quando true */
  linked?: boolean;
}

const Logo = ({ theme = "dark", className = "h-12", linked = true }: LogoProps) => {
  const img = (
    <img
      src={theme === "light" ? logoLight : logoDark}
      alt="JCL Empilhadeiras"
      className={`${className} w-auto object-contain`}
    />
  );
  if (!linked) return img;
  return (
    <Link to="/" aria-label="JCL Empilhadeiras — início" className="inline-flex">
      {img}
    </Link>
  );
};

export default Logo;
