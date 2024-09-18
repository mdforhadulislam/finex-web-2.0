import Link from "next/link";
import LOGO_EN from "@/components/assets/logo-en.png";
import LOGO_FOOTER_EN from "@/components/assets/logo-footer-en.png";

const Logo = ({ link, imageStyle, isFooter = false }) => {
  return (
    <Link
      href={link || "/"}
      title={"FASTER INTERNATIONAL EXPRESS - FINEX"}
      about={"FASTER INTERNATIONAL EXPRESS - FINEX"}
      className={`w-auto flex items-center`}
    >
      <img
        className={`${imageStyle ? imageStyle : "w-[140px] h-[45px] "} `}
        src={isFooter ? LOGO_FOOTER_EN.src : LOGO_EN.src}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
