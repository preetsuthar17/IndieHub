import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

import { Syne } from "next/font/google";

import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const Header = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/preetsuthar17/IndieHub")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .then((err) => console.error(err));
  }, []);

  return (
    <>
      <header
        className={`${syne.variable} font-[family-name:var(--font-syne)] border-b px-4 py-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="IndieHub" width={30} height={30} />
          <Link href="/" className="font-medium font-sans">
            IndieHub
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-sm hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:underline" href="/#resources">
                Resources
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                className="text-sm hover:underline"
                href="https://x.com/nott_preett"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                className="text-sm hover:underline"
                href="https://forms.gle/iDTEMEJyVqHKmu6WA"
              >
                Submit Resource
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="flex items-center gap-1 hover:bg-primary/10 transition-all"
              onClick={() =>
                window.open(
                  "https://github.com/preetsuthar17/IndieHub",
                  "_blank",
                )
              }
            >
              <svg
                class="w-10 h-10"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.5 2.22168C5.23312 2.22168 2.58496 4.87398 2.58496 8.14677C2.58496 10.7642 4.27962 12.9853 6.63026 13.7684C6.92601 13.8228 7.03366 13.6401 7.03366 13.4827C7.03366 13.3425 7.02893 12.9693 7.02597 12.4754C5.38041 12.8333 5.0332 11.681 5.0332 11.681C4.76465 10.996 4.37663 10.8139 4.37663 10.8139C3.83954 10.4471 4.41744 10.4542 4.41744 10.4542C5.01072 10.4956 5.32303 11.0647 5.32303 11.0647C5.85065 11.9697 6.70774 11.7082 7.04431 11.5568C7.09873 11.1741 7.25134 10.9132 7.42051 10.7654C6.10737 10.6157 4.72621 10.107 4.72621 7.83683C4.72621 7.19031 4.95689 6.66092 5.33486 6.24686C5.27394 6.09721 5.07105 5.49447 5.39283 4.67938C5.39283 4.67938 5.88969 4.51967 7.01947 5.28626C7.502 5.15466 7.99985 5.08763 8.5 5.08692C9.00278 5.08929 9.50851 5.15495 9.98113 5.28626C11.1103 4.51967 11.606 4.67879 11.606 4.67879C11.9289 5.49447 11.7255 6.09721 11.6651 6.24686C12.0437 6.66092 12.2732 7.19031 12.2732 7.83683C12.2732 10.1129 10.8897 10.6139 9.5724 10.7606C9.78475 10.9434 9.97344 11.3048 9.97344 11.8579C9.97344 12.6493 9.96634 13.2887 9.96634 13.4827C9.96634 13.6413 10.0728 13.8258 10.3733 13.7678C11.5512 13.3728 12.5751 12.6175 13.3003 11.6089C14.0256 10.6002 14.4155 9.38912 14.415 8.14677C14.415 4.87398 11.7663 2.22168 8.5 2.22168Z"
                  fill="currentColor"
                ></path>
              </svg>

              {stars}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="block py-2 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#resources"
                      className="block py-2 hover:underline"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://x.com/nott_preett"
                      className="block py-2 hover:underline"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      href="https://forms.gle/iDTEMEJyVqHKmu6WA"
                      className="block py-2 hover:underline"
                    >
                      Submit Resource
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Button
                      className="grow flex items-center justify-center gap-1"
                      onClick={() =>
                        window.open(
                          "https://github.com/preetsuthar17/IndieHub",
                          "_blank",
                        )
                      }
                    >
                      <svg
                        class="w-20 h-20"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 2.22168C5.23312 2.22168 2.58496 4.87398 2.58496 8.14677C2.58496 10.7642 4.27962 12.9853 6.63026 13.7684C6.92601 13.8228 7.03366 13.6401 7.03366 13.4827C7.03366 13.3425 7.02893 12.9693 7.02597 12.4754C5.38041 12.8333 5.0332 11.681 5.0332 11.681C4.76465 10.996 4.37663 10.8139 4.37663 10.8139C3.83954 10.4471 4.41744 10.4542 4.41744 10.4542C5.01072 10.4956 5.32303 11.0647 5.32303 11.0647C5.85065 11.9697 6.70774 11.7082 7.04431 11.5568C7.09873 11.1741 7.25134 10.9132 7.42051 10.7654C6.10737 10.6157 4.72621 10.107 4.72621 7.83683C4.72621 7.19031 4.95689 6.66092 5.33486 6.24686C5.27394 6.09721 5.07105 5.49447 5.39283 4.67938C5.39283 4.67938 5.88969 4.51967 7.01947 5.28626C7.502 5.15466 7.99985 5.08763 8.5 5.08692C9.00278 5.08929 9.50851 5.15495 9.98113 5.28626C11.1103 4.51967 11.606 4.67879 11.606 4.67879C11.9289 5.49447 11.7255 6.09721 11.6651 6.24686C12.0437 6.66092 12.2732 7.19031 12.2732 7.83683C12.2732 10.1129 10.8897 10.6139 9.5724 10.7606C9.78475 10.9434 9.97344 11.3048 9.97344 11.8579C9.97344 12.6493 9.96634 13.2887 9.96634 13.4827C9.96634 13.6413 10.0728 13.8258 10.3733 13.7678C11.5512 13.3728 12.5751 12.6175 13.3003 11.6089C14.0256 10.6002 14.4155 9.38912 14.415 8.14677C14.415 4.87398 11.7663 2.22168 8.5 2.22168Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="text-sm">{stars}</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
