import Link from "next/link";

const Logo: React.FC<{
  link: string;
  imageStyle: string;
  isFooter: boolean;
}> = ({ link, imageStyle, isFooter }) => {
  return (
    <Link
      href={link || "/"}
      title={"FASTER INTERNATIONAL EXPRESS - FINEX"}
      about={"FASTER INTERNATIONAL EXPRESS - FINEX"}
      className={`w-auto flex items-center`}
    >
      <img
        className={`${imageStyle ? imageStyle : "w-[140px] h-[45px] "} `}
        src={isFooter ? "/logo-footer-en.png" : "/logo-en.png"}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
