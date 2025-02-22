
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

const blogContent = [
  {
    id: 123,
    img: "/malaysia.png",
    title: "Bangladesh to India",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            pariatur voluptas nisi esse molestias tempore. Deleniti mollitia,
            commodi, ullam iusto aperiam ad rerum quo esse possimus odit
            doloribus, tempora blanditiis? Molestiae maiores, maxime id
            reprehenderit repellendus dicta voluptate vitae nulla debitis.`,
  },
  {
    id: 123345,
    img: "/malaysia.png",
    title: "Bangladesh to India",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            pariatur voluptas nisi esse molestias tempore. Deleniti mollitia,
            commodi, ullam iusto aperiam ad rerum quo esse possimus odit
            doloribus, tempora blanditiis? Molestiae maiores, maxime id
            reprehenderit repellendus dicta voluptate vitae nulla debitis.`,
  },
  {
    id: 12344345,
    img: "/malaysia.png",
    title: "Bangladesh to India",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            pariatur voluptas nisi esse molestias tempore. Deleniti mollitia,
            commodi, ullam iusto aperiam ad rerum quo esse possimus odit
            doloribus, tempora blanditiis? Molestiae maiores, maxime id
            reprehenderit repellendus dicta voluptate vitae nulla debitis.`,
  },
  {
    id: 3445,
    img: "/malaysia.png",
    title: "Bangladesh to India",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            pariatur voluptas nisi esse molestias tempore. Deleniti mollitia,
            commodi, ullam iusto aperiam ad rerum quo esse possimus odit
            doloribus, tempora blanditiis? Molestiae maiores, maxime id
            reprehenderit repellendus dicta voluptate vitae nulla debitis.`,
  },
  {
    id: 3445,
    img: "/malaysia.png",
    title: "Bangladesh to India",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            pariatur voluptas nisi esse molestias tempore. Deleniti mollitia,
            commodi, ullam iusto aperiam ad rerum quo esse possimus odit
            doloribus, tempora blanditiis? Molestiae maiores, maxime id
            reprehenderit repellendus dicta voluptate vitae nulla debitis.`,
  },
];

const OurBlogBodySection = () => {

  return (
    <div className=" container h-auto py-10 px-4 sm:px-8 md:px-12 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-2 items-center align-middle justify-center m-auto">
      {blogContent.map((item) => (
        <Card
          key={item.id}
          className="w-full flex-col gap-2 shadow-4xl cursor-pointer flex"
        >

            <Image
              className="rounded-t-xl w-full h-[200px]"
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
            />
          <div className=" w-full h-auto flex flex-col gap-1 p-2 text-left">
            <h1 className=" text-lg font-semibold text-gray-800 leading-4">
              {item.title}
            </h1>
            <p className=" text-sm font-light line-clamp-4 text-gray-600 leading-4">
              {" "}
              {item.details}
            </p>

            <Link href={`/blog/${item.id}`} className="w-full h-auto block">
            <Button className="bg-defult hover:bg-defult/80 w-full">
              Learn More
            </Button></Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OurBlogBodySection;
