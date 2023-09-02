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
        <nav className=" p-4 mx-4">
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
      </div>
    </>
  );
}
