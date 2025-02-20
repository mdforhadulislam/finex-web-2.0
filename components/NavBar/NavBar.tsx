"use client";

import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { useLoad } from "@/context/LoadContext";
import { useUserTrack } from "@/context/UserTrackContext";
import { cn } from "@/lib/utils";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import Logo from "@/utils/Logo";
import LogoBn from "@/utils/LogoBn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getRequestSend,
  LOGIN_API,
  LOGOUT_API,
  postRequestSend,
  REGISTER_API,
  USER_ACCOUNT_API,
} from "../ApiCall/ApiMethod";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { useRouter } from "next/navigation";

interface InternalLinkProps {
  href?: string; // Optional href
  className?: string; // Optional className
  title?: string; // Optional title
  onClick?: () => void;
  children: React.ReactNode; // Children can be any React node
}

const ListItem = React.forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ className, title, href = "/", children, ...props }, ref) => {
    const { isBangla } = useLang();
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div
              className={`font-medium leading-none ${
                isBangla ? "bfont text-[21px]" : "text-sm "
              }`}
            >
              {title}
            </div>
            <p
              className={`line-clamp-2  text-muted-foreground ${
                isBangla ? "bfont text-[19px]" : "text-sm leading-snug"
              }`}
            >
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [navBarScrolled, setNavBarScrolled] = useState<boolean>(false);
  const [isProfileMenu, setIsProfileMenu] = useState<boolean>(false);

  const router = useRouter()

  const lang = useLang();
  const userTrack = useUserTrack();
  const auth = useAuth();
  const load = useLoad();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 120) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password: string): boolean => password.length >= 6;

  // Phone validation
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?\d{11,15}$/; // Adjust as needed for country-specific formats
    return phoneRegex.test(phone);
  };


  const handleLogin = (): void => {
    const newErrors: { [key: string]: string } = {};
    if (!validatePhone(phone))
      newErrors.phone =
        "Please enter a valid phone number (11-15 digits, including country code).";
    if (!validatePassword(password))
      newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      load.loadingStart();
      postRequestSend(LOGIN_API, {}, { phone, password }).then((res) => {
        load.loadingEnd();
        if (res.status == 200) {
          setIsRegister(false);
          setIsLogin(false);
          auth.loginHandler(res?.data?.token, res?.data?.user);
          toast.success(res.message);
          router.push(`https://finex-app.vercel.app/${res?.data?.token}?phone=${res?.data?.user?.phone}`)
        } else {
          setIsLogin(true);
          toast.error(res.message);
        }
      });
    } else {
      Object.values(errors).forEach((error) => toast.error(error));
    }
  };

  const handleRegister = (): void => {
    const newErrors: { [key: string]: string } = {};
    if (!name) newErrors.name = "Name is required.";
    if (!validatePhone(phone))
      newErrors.phone =
        "Please enter a valid phone number (11-15 digits, including country code).";
    if (!validateEmail(email)) newErrors.email = "Please enter a valid email.";
    if (!validatePassword(password))
      newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      load.loadingStart();
      postRequestSend(
        REGISTER_API,
        {},
        { name, phone, email, password, role }
      ).then((res) => {
        load.loadingEnd();
        if (res.status == 200) {
          setIsRegister(false);
          setIsLogin(true);
          toast.success(res.message);
        } else {
          toast.error(res.message);
          setIsLogin(true);
        }
      });
    } else {
      Object.values(errors).forEach((error) => toast.error(error));
    }
  };

  const logoutHandler = () => {
    load.loadingStart();
    postRequestSend(LOGOUT_API, { authorization: auth.token }).then((res) => {
      load.loadingEnd();
      if (res.status === 200) {
        auth.logoutHandler();
        setIsProfileMenu(false);
        toast.success(res.message);
      } else {
        setIsProfileMenu(false);
        toast.error(res.message);
      }
    });
  };

  const [profile, setProfile] = useState<string>("");

  useEffect(() => {
    if (auth.isUserLoggedIn) {
      setIsLogin(false);
    }

    getRequestSend(USER_ACCOUNT_API(auth?.user?.phone), {
      authorization: auth.token,
    }).then((res) => {
      if (res.status == 200) {
        setProfile(res?.data?.profile);
      }
    });

    if (
      userTrack.email &&
      userTrack.name &&
      userTrack.phone &&
      userTrack.type
    ) {
      setEmail(userTrack.email);
      setName(userTrack.name);
      setPhone(userTrack.phone);
      setRole(userTrack.type);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [userTrack, auth?.user?.phone, auth?.token, auth.isUserLoggedIn]);

  return (
    <header
      className={`z-[50] ${
        navBarScrolled
          ? " fixed w-full h-auto animate-in duration-100"
          : "animate-in duration-100 w-full lg:px-6 m-auto lg:py-4 fixed "
      }`}
    >
      <div
        className={`w-full h-auto backdrop-blur-md bg-white border shadow-3xl px-2 sm:px-4 py-2 flex flex-row items-center justify-between ${
          navBarScrolled ? "" : "lg:rounded-full"
        }`}
      >
        <IsEnglish className={"mr-1"}>
          <Logo link={"/"} imageStyle={""} isFooter={false} />
        </IsEnglish>
        <IsBangla className={"mr-1"}>
          <LogoBn link={"/"} imageStyle={""} isFooter={false} />
        </IsBangla>

        <div
          className={`${
            isMenuVisible ? "block" : "hidden"
          } lg:flex items-center align-middle justify-center  hidden ml-[-20px]`}
        >
          <NavigationMenu>
            <NavigationMenuList className="w-auto flex justify-center align-middle gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Home</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>হোম</IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/price" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Price</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>চার্জ</IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  <IsEnglish className="">About</IsEnglish>
                  <IsBangla className={"bfont text-[21px]"}>
                    আমাদের সম্পর্কে
                  </IsBangla>
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={`left-0 top-14 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-white shadow-3xl rounded-md`}
                >
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-defult/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Logo link={"/"} imageStyle="" isFooter={false} />
                          <div className="mb-2 mt-4 text-sm font-medium">
                            <IsEnglish className="">
                              Faster Int. Express
                            </IsEnglish>
                            <IsBangla className={"bfont text-[21px]"}>
                              ফাস্টার ইন্ট. এক্সপ্রেস
                            </IsBangla>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            <IsEnglish className="">
                            Delivering seamless, reliable, and personalized shipping solutions with unmatched flexibility and a strong courier network since 2023.
                            </IsEnglish>
                            <IsBangla className={"bfont text-[19px]"}>
                            ২০২৩ সাল থেকে অবিচ্ছিন্ন, নির্ভরযোগ্য এবং ব্যক্তিগতকৃত শিপিং সমাধান প্রদান করছি, অমীমাংসিত নমনীয়তা এবং শক্তিশালী কুরিয়ার নেটওয়ার্কের সাথে।
                            </IsBangla>
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <IsEnglish className="">
                      <ListItem href="/about/why-finex" title="Why Finex">
                      Delivering seamless, reliable, and personalized shipping solutions with unmatched flexibility and a strong courier network since 2023.
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem href="/about/why-finex" title="কেন ফিনেক্স">
                      ২০২৩ সাল থেকে অদ্বিতীয় নমনীয়তা এবং শক্তিশালী কুরিয়ার নেটওয়ার্কসহ সুনির্দিষ্ট, নির্ভরযোগ্য এবং ব্যক্তিগতকৃত শিপিং সমাধান প্রদান করছি।
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem
                        href="/about/work-process"
                        title="Work Processes"
                      >
                        From order placement and courier assignment to real-time tracking and prompt delivery, we ensure a seamless and efficient shipping experience.
                      </ListItem>
                    </IsEnglish>

                    <IsBangla className="">
                      <ListItem
                        href="/about/work-process"
                        title="কাজের প্রক্রিয়া"
                      >
                        অর্ডার প্লেসমেন্ট এবং কুরিয়ার অ্যাসাইনমেন্ট থেকে রিয়েল-টাইম ট্র্যাকিং এবং সময়মতো ডেলিভারি পর্যন্ত, আমরা একটি সুনির্দিষ্ট এবং দক্ষ শিপিং অভিজ্ঞতা নিশ্চিত করি।
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem href="/about/our-services" title="Our Services">
                      Providing fast, reliable, and flexible courier solutions with personalized delivery options and real-time tracking to meet all your shipping needs.
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem
                        href="/about/our-services"
                        title="আমাদের সেবা সমূহ"
                      >
                        দ্রুত, নির্ভরযোগ্য, এবং নমনীয় কুরিয়ার সমাধান প্রদান করছি, ব্যক্তিগতকৃত ডেলিভারি অপশন এবং রিয়েল-টাইম ট্র্যাকিং সহ, যা আপনার সমস্ত শিপিং চাহিদা পূর্ণ করে।
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem
                        href="/about/our-team-member"
                        title="Our Team Member"
                      >
                        A dedicated group of skilled professionals working together to deliver exceptional service, ensuring efficiency, reliability, and customer satisfaction at every step.
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem
                        href="/about/our-team-member"
                        title="আমাদের সদস্য"
                      >
                       একটি নিবেদিত দক্ষ পেশাদার দলের সদস্যরা একসঙ্গে কাজ করে অসাধারণ সেবা প্রদান করতে, প্রতিটি পদক্ষেপে দক্ষতা, নির্ভরযোগ্যতা এবং গ্রাহক সন্তুষ্টি নিশ্চিত করে।
                      </ListItem>
                    </IsBangla>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Blog</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>
                      প্রতিদিনের ব্লগ
                    </IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Contact</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>যোগাযোগ</IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex gap-1">
          <div className="flex gap-1 sm:gap-2 -mr-1">
            <Button
              className={
                "  border border-defult-button text-center shadow  hover:bg-defult-button/25 bg-defult-button/15 text-defult-button transition duration-300 block rounded-md w-full py-2 h-auto px-2"
              }
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                lang.isEnglish
                  ? lang.bangla()
                  : lang.isBangla
                  ? lang.english()
                  : null;
              }}
            >
              {lang.isEnglish && "Be"} {lang.isBangla && "En"}
            </Button>

            {/* login from  */}
            <AlertDialog open={isLogin} onOpenChange={setIsLogin}>
              {!auth.isUserLoggedIn && (
                <AlertDialogTrigger asChild>
                  <Button
                    className={`px-3 text-center shadow text-white transition duration-300 w-full h-full hover:bg-white bg-defult-button border-defult-button border hover:text-defult-button rounded-lg flex justify-center align-middle items-center lg:px-5 lg:border-defult-button ${
                      navBarScrolled ? "lg:rounded-lg " : "lg:rounded-full "
                    } ${
                      lang.isBangla
                        ? "bfont text-[22px] lg:py-[2px] lg:pt-[5px] py-[3px]"
                        : "py-[6px] text-[16.6px]"
                    }`}
                    onClick={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    {lang.isEnglish && "Login"} {lang.isBangla && "লগইন"}
                  </Button>
                </AlertDialogTrigger>
              )}

              <AlertDialogContent className="bg-transparent bg-none border-none p-3">
                <div className="bg-white p-6 border border-white rounded-lg">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl text-defult">
                      Login to Your Account
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm font-normal pb-5">
                      Please enter your email and password to log in.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin();
                    }}
                    className="grid gap-2"
                  >
                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-defult">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-defult">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="flex justify-left items-center">
                      <p className="text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <button
                          onClick={() => {
                            setIsLogin(false);
                            setIsRegister(true); // Assuming setIsRegister toggles a registration dialog
                          }}
                          className="text-defult font-semibold hover:underline"
                        >
                          Register
                        </button>
                      </p>
                    </div>

                    <AlertDialogFooter className="flex justify-between pt-4">
                      <AlertDialogCancel asChild>
                        <Button
                          variant="outline"
                          className="border-defult hover:bg-defult/10 text-defult hover:text-defult/90 px-5"
                        >
                          Cancel
                        </Button>
                      </AlertDialogCancel>
                      <Button
                        type="submit"
                        className="border-defult hover:bg-defult/90 hover:text-white text-white bg-defult px-8"
                      >
                        Login
                      </Button>
                    </AlertDialogFooter>
                  </form>
                </div>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={isRegister} onOpenChange={setIsRegister}>
              <AlertDialogContent className="bg-transparent bg-none border-none p-3">
                <div className="bg-white p-6 border border-white rounded-lg">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl text-defult">
                      Create a New Account
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm font-normal pb-5">
                      Please fill in the details below to register.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleRegister();
                    }}
                    className="grid gap-2"
                  >
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-defult">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-defult">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-defult">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-defult">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                      />
                    </div>

                    <div className="flex justify-left items-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                          onClick={() => {
                            setIsRegister(false);
                            setIsLogin(true); // Switch back to login dialog
                          }}
                          className="text-defult font-semibold hover:underline"
                        >
                          Login
                        </button>
                      </p>
                    </div>

                    <AlertDialogFooter className="flex justify-between pt-4">
                      <AlertDialogCancel asChild>
                        <Button
                          variant="outline"
                          className="border-defult hover:bg-defult/10 text-defult hover:text-defult/90 px-5"
                        >
                          Cancel
                        </Button>
                      </AlertDialogCancel>
                      <Button
                        type="submit"
                        className="border-defult hover:bg-defult/90 hover:text-white text-white bg-defult px-8"
                      >
                        Register
                      </Button>
                    </AlertDialogFooter>
                  </form>
                </div>
              </AlertDialogContent>
            </AlertDialog>

            <Button
              className={`inline-flex items-center p-1  bg-defult  rounded-lg lg:hidden text-white shadow-3xl hover:border hover:bg-transparent hover:text-defult  focus:outline-none h-auto border border-defult ${
                lang.isBangla
                  ? "bfont text-[22px] py-[2px] px-1"
                  : "py-[6px] px-[4px] text-[16.6px]"
              }`}
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              {lang.isEnglish && "Menu"}
              {lang.isBangla && "মেনু"}
            </Button>
          </div>
          {auth.isUserLoggedIn && (
            <div
              className=" bg-white p-1 pl-2 rounded-full cursor-pointer relative"
              onClick={() => {
                setIsProfileMenu(!isProfileMenu);
              }}
            >
              <Image
                width={33}
                height={33}
                src={profile ? profile : "/profile.png"}
                className="w-[38px] h-[38px] p-[2px] rounded-full shadow-3xl overflow-hidden border-gray-800 border"
                alt="User Profile"
              />
              {isProfileMenu && (
                <>
                  <div
                    id="dropdownAvatar"
                    className="z-0 absolute -right-0 sm:-right-[10px] top-[58px]  bg-white divide-y divide-gray-100 rounded-lg  shadow-4xl w-44 border "
                  >
                    <ul
                      className=" text-sm text-gray-700 "
                      aria-labelledby="dropdownUserAvatarButton"
                    >
                      <li>
                        <IsEnglish className="">
                          <Link
                            href={"https://finex-app.vercel.app/dashboard/"}
                            className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                          >
                            Dashboard
                          </Link>
                        </IsEnglish>
                        <IsBangla className="">
                          <Link
                            href={"https://finex-app.vercel.app/dashboard/"}
                            className="block px-4 py-1 hover:bg-gray-100 rounded-lg cursor-pointer bfont text-xl"
                          >
                            ড্যাশবোর্ড
                          </Link>
                        </IsBangla>
                      </li>
                      <li>
                        <IsEnglish className="">
                          <button className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer w-full text-left">
                            Settings
                          </button>
                        </IsEnglish>
                        <IsBangla className="">
                          <button className="block px-4 py-1 hover:bg-gray-100 rounded-lg cursor-pointer w-full bfont text-left text-xl">
                            সেটিংস্‌
                          </button>
                        </IsBangla>
                      </li>
                      <li>
                        <IsEnglish className="">
                          <button
                            className="w-full block px-4 py-2 text-left hover:bg-gray-100 rounded-lg cursor-pointer"
                            onClick={logoutHandler}
                          >
                            Logout
                          </button>
                        </IsEnglish>
                        <IsBangla className="">
                          <button
                            className=" w-full text-left block px-4 py-1 hover:bg-gray-100 rounded-lg cursor-pointer  bfont text-xl"
                            onClick={logoutHandler}
                          >
                            লগআউট
                          </button>
                        </IsBangla>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuVisible ? "block" : "hidden"
        } lg:hidden w-full bg-gray-100 p-3`}
      >
        <NavigationMenu className="bg-white p-2 rounded-md">
          <NavigationMenuList className="w-full flex flex-col justify-center align-middle gap-1 ">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  style={{ width: "100%", textAlign: "left", display: "block" }}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-defult-button text-defult-button hover:text-white bg-transparent`}
                >
                  <IsEnglish className="">Home</IsEnglish>
                  <IsBangla className={"bfont text-[21px]"}>হোম</IsBangla>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/price" legacyBehavior passHref>
                <NavigationMenuLink
                  style={{ width: "100%", textAlign: "left", display: "block" }}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-defult-button text-defult-button hover:text-white bg-transparent`}
                >
                  <IsEnglish className="">Price</IsEnglish>
                  <IsBangla className={"bfont text-[21px]"}>চার্জ</IsBangla>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ width: "100%", textAlign: "left", display: "block" }}
                className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors  disabled:opacity-50 hover:bg-defult-button text-defult-button hover:text-white bg-transparent`}
              >
                <IsEnglish className="">About</IsEnglish>
                <IsBangla className={"bfont text-[21px]"}>
                  আমাদের সম্পর্কে
                </IsBangla>
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={`left-0 top-0 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 bg-white shadow-3xl rounded-md`}
              >
                <ul className="grid gap-1 p-2  lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <NavigationMenuLink asChild>
                    <Link
                      className=" hidden sm:flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                      href="/"
                    >
                      <Logo link={"/"} imageStyle="" isFooter={false} />
                    </Link>
                  </NavigationMenuLink>

                  <IsEnglish className="">
                    <ListItem href="/about/why-finex" title="Why Finex">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem href="/about/why-finex" title="কেন ফিনেক্স">
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem href="/about/work-process" title="Work Processes">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </IsEnglish>

                  <IsBangla className="">
                    <ListItem
                      href="/about/work-process"
                      title="কাজের প্রক্রিয়া"
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem href="/about/our-services" title="Our Services">
                      How to install dependencies and structure your app.
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem
                      href="/about/our-services"
                      title="আমাদের সেবা সমূহ"
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem
                      href="/about/our-team-member"
                      title="Our Team Member"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem
                      href="/about/our-team-member"
                      title="আমাদের সদস্য"
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  style={{ width: "100%", textAlign: "left", display: "block" }}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-defult-button text-defult-button hover:text-white bg-transparent`}
                >
                  <IsEnglish className="">Blog</IsEnglish>
                  <IsBangla className={"bfont text-[21px]"}>
                    প্রতিদিনের ব্লগ
                  </IsBangla>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  style={{ width: "100%", textAlign: "left", display: "block" }}
                  className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-defult-button text-defult-button hover:text-white bg-transparent`}
                >
                  <IsEnglish className="">Contact</IsEnglish>
                  <IsBangla className={"bfont text-[21px]"}>যোগাযোগ</IsBangla>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
