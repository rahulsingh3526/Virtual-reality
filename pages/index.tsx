import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    // <div
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-[#302C42]`}
    // >
    <>
      <div className="bg-[#302C42] p-4 min-h-screen">
        <div className="mx-4">
          <nav className=" p-4 ">
            <div className="container mx-auto flex justify-between items-center">
              {/* Left side with image and name */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/Frame.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-32 h-32"
                  width={700}
                  height={700}
                />
                <Image
                  src="/hydra.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-12 h-8"
                  width={500}
                  height={500}
                />
              </div>

              {/* Middle section with navigation links */}
              <div className="flex space-x-12">
                <Link
                  href="/about"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  ABOUT
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  SERVICES
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  TECHNOLOGIES
                </Link>
                <Link
                  href="/team"
                  className="text-white hover:text-gray-200 text-xs"
                >
                  HOW TO
                </Link>
                {/* Add more links as needed */}
              </div>

              {/* Right side with a button */}
              <div className="space-x-8">
                <button className="text-white border-2 border-white text-xs font-semibold py-2 px-4 rounded-full">
                  CONTACT US
                </button>
                <button className="bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs font-semibold py-2 px-4 rounded-full">
                  JOIN HYDRA
                </button>
              </div>
            </div>
          </nav>

          <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center lg:flex-col space-x-4 w-1/3">
              <div className="">
                <span className="font-semibold text-5xl text-gradient">
                  Dive{" "}
                </span>
                <span className="font-semibold text-white text-4xl ">
                  Into The Depths Of
                </span>
                <span className="font-semibold text-5xl text-gradient ">
                  {" "}
                  Virtual Reality
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore nisl tincidunt
                eget. Lectus mauris eros in vitae .
              </p>

              <div className="flex justify-start space-x-8 mt-20">
                <button className="rounded-full bg-gradient-to-r from-[#8379B2] to-[#BFB6F6] text-xs py-2 px-8">
                  BUILD YOUR WORLD
                </button>{" "}
                <Image
                  src="/arrow.png" // Replace with the path to your image
                  alt="Logo"
                  className="w-12 h-8"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="relative z-20 p-3 ">
              <Image
                src="/girl.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className=" "
                width={490}
                height={426}
              />
              <Image
                src="/Rectangle 4.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className="absolute top-[0%] left-[0%] -z-10"
                width={524}
                height={455}
              />
              <Image
                src="/Vector 1.png" // Replace with the path to your image
                alt="Logo"
                className="absolute -top-40 -left-6 rotate-6 -z-10"
                width={524}
                height={455}
              />
              <Image
                src="/Vector 2.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className="absolute -top-80 -left-6 rotate- -z-10"
                width={316}
                height={709}
              />
              <Image
                src="/Vector 3.png" // Replace with the path to your image
                alt="Logo"
                layout="responsive"
                className="absolute top-[0%] left-[0%] -z-10"
                width={617}
                height={352}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
