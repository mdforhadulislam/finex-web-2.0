"use client";

import { useLang } from "@/context/LangContext";
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
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">,HTMLAnchorElement, InternalLinkProps
>(({ className, title,href="/", children, ...props }, ref) => {
  const { isBangla } = useLang();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
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
});
ListItem.displayName = "ListItem";

export default function NavBar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [navBarScrolled, setNavBarScrolled] = useState(false);
  const lang = useLang();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 80) {
      setNavBarScrolled(true);
    } else {
      setNavBarScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          } lg:flex items-center align-middle justify-center  hidden ml-[-40px]`}
        >
          <NavigationMenu>
            <NavigationMenuList className="w-auto flex justify-center align-middle gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref onClick={()=>{setIsMenuVisible(false)}}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Home</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>হোম</IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/price" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
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
                          href="/"  onClick={()=>{setIsMenuVisible(false)}}
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
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </IsEnglish>
                            <IsBangla className={"bfont text-[19px]"}>
                              অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি
                              স্বয়ংক্রিয়ভাবে পূর্ণ বা প্রস্তাবিত শব্দ বা
                              বাক্যাংশ প্রদান করে
                            </IsBangla>
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <IsEnglish className="">
                      <ListItem href="/about/why-finex" title="Why Finex"  onClick={()=>{setIsMenuVisible(false)}}>
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem href="/about/why-finex" title="কেন ফিনেক্স"  onClick={()=>{setIsMenuVisible(false)}}>
                        অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি
                        স্বয়ংক্রিয়ভাবে পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ
                        প্রদান করে
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem
                        href="/about/work-process"
                        title="Work Processes"  onClick={()=>{setIsMenuVisible(false)}}
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </IsEnglish>

                    <IsBangla className="">
                      <ListItem
                        href="/about/work-process"
                        title="কাজের প্রক্রিয়া"  onClick={()=>{setIsMenuVisible(false)}}
                      >
                        অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি
                        স্বয়ংক্রিয়ভাবে পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ
                        প্রদান করে
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem href="/about/our-services" title="Our Services"  onClick={()=>{setIsMenuVisible(false)}}>
                        How to install dependencies and structure your app.
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem
                        href="/about/our-services"
                        title="আমাদের সেবা সমূহ"  onClick={()=>{setIsMenuVisible(false)}}
                      >
                        অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি
                        স্বয়ংক্রিয়ভাবে পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ
                        প্রদান করে
                      </ListItem>
                    </IsBangla>

                    <IsEnglish className="">
                      <ListItem
                        href="/about/our-team-member"
                        title="Our Team Member"  onClick={()=>{setIsMenuVisible(false)}}
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </IsEnglish>
                    <IsBangla className="">
                      <ListItem
                        href="/about/our-team-member"
                        title="আমাদের সদস্য"  onClick={()=>{setIsMenuVisible(false)}}
                      >
                        অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি
                        স্বয়ংক্রিয়ভাবে পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ
                        প্রদান করে
                      </ListItem>
                    </IsBangla>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Blog</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>
                      প্রতিদিনের ব্লগ
                    </IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <IsEnglish className="">Contact</IsEnglish>
                    <IsBangla className={"bfont text-[21px]"}>যোগাযোগ</IsBangla>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div>
          <div className="flex gap-1 sm:gap-2">
            <Button
              className={
                "  border border-defult-button text-center shadow  hover:bg-defult-button/25 bg-defult-button/15 text-defult-button transition duration-300 block rounded-md w-full py-2 h-auto px-2"
              }
              onClick={() => {
                lang.isEnglish
                  ? lang.bangla()
                  : lang.isBangla
                  ? lang.english()
                  : null;
              }}
            >
              {lang.isEnglish && "Be"} {lang.isBangla && "En"}
            </Button>

            <div className="block lg:hidden">
              <Link
                href={"/auth/login"}
                className={`px-3  text-center  shadow  text-white transition duration-300 w-full hover:bg-white bg-defult-button border-defult-button border hover:text-defult-button rounded-lg flex justify-center align-middle items-center ${
                  lang.isBangla
                    ? "bfont text-[22px] py-[3px]"
                    : "py-[6px] text-[16.6px]"
                }`}
              >
                {lang.isEnglish && "Login"} {lang.isBangla && "লগইন"}
              </Link>
            </div>

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

            <div className="hidden lg:block">
              <Link
                href={"/auth/login"}
                className={`px-5 h-auto text-center shadow  text-white transition duration-300 w-full hover:bg-white flex justify-center align-middle items-center bg-defult-button border-defult-button border hover:text-defult-button ${
                  navBarScrolled ? "rounded-lg " : "rounded-full "
                } ${
                  lang.isBangla
                    ? "bfont text-[22px] py-[2px] pt-[5px]"
                    : "py-[6px] text-[16.6px]"
                }`}
              >
                {lang.isEnglish && "Login"} {lang.isBangla && "লগইন"}
              </Link>
            </div>
          </div>
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
              <Link href="/" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
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
              <Link href="/price" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
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
                    <Link  onClick={()=>{setIsMenuVisible(false)}}
                      className=" hidden sm:flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                      href="/"
                    >
                      <Logo link={"/"} imageStyle="" isFooter={false} />
                    </Link>
                  </NavigationMenuLink>

                  <IsEnglish className="">
                    <ListItem href="/about/why-finex" title="Why Finex"  onClick={()=>{setIsMenuVisible(false)}}>
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem href="/about/why-finex" title="কেন ফিনেক্স"  onClick={()=>{setIsMenuVisible(false)}}>
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem
                      href="/about/work-process"
                      title="Work Processes"  onClick={()=>{setIsMenuVisible(false)}}
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </IsEnglish>

                  <IsBangla className="">
                    <ListItem
                      href="/about/work-process"  onClick={()=>{setIsMenuVisible(false)}}
                      title="কাজের প্রক্রিয়া"
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem href="/about/our-services" title="Our Services"  onClick={()=>{setIsMenuVisible(false)}}>
                      How to install dependencies and structure your app.
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem
                      href="/about/our-services"
                      title="আমাদের সেবা সমূহ"  onClick={()=>{setIsMenuVisible(false)}}
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>

                  <IsEnglish className="">
                    <ListItem
                      href="/about/our-team-member"
                      title="Our Team Member"  onClick={()=>{setIsMenuVisible(false)}}
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </IsEnglish>
                  <IsBangla className="">
                    <ListItem
                      href="/about/our-team-member"
                      title="আমাদের সদস্য"  onClick={()=>{setIsMenuVisible(false)}}
                    >
                      অটো টেক্সট বা স্বয়ংক্রিয় পূরণ প্রযুক্তি স্বয়ংক্রিয়ভাবে
                      পূর্ণ বা প্রস্তাবিত শব্দ বা বাক্যাংশ প্রদান করে
                    </ListItem>
                  </IsBangla>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
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
              <Link href="/contact" legacyBehavior passHref  onClick={()=>{setIsMenuVisible(false)}}>
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
