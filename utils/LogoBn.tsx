import Link from "next/link";

const LogoBn: React.FC<{
  link: string;
  imageStyle: string;
  isFooter: boolean;
}> = ({ link, imageStyle, isFooter = false }) => {
  return (
    <Link
      href={link || "/"}
      title={"ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স"}
      about={"ফাস্টার ইন্টারন্যাশনাল এক্সপ্রেস - ফিনেক্স"}
      className={`w-auto flex items-center`}
    >
      <img
        className={`${imageStyle ? imageStyle : "w-[140px] h-[45px] "} `}
        src={isFooter ? "/logo-footer-bn.png" : "/logo-bn.png"}
        alt="logo"
      />
    </Link>
  );
};

export default LogoBn;
