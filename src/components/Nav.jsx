import { logoTransparent, logoTransparent2 } from "../assets/images";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  const [navbar, toggleNavbar] = useState(true);
  return (
    <header className="padding-x py-8  absolute    w-full z-40">
      <nav className="flex justify-between items-center max-container ">
        <a href="/" className="">
          {/* <img src={logoTransparent} alt="logo" height={140} width={280} /> */}
          <img src={logoTransparent2} alt="logo" height={70} width={210} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <Button label="Get Started" iconUrl={undefined} />
        </div>

        <div
          className="hidden max-lg:block"
          onClick={() => toggleNavbar(!navbar)}
        >
          {navbar ? (
            <Bars3Icon className="h-8 w-8 text-gray-900 cursor-pointer" />
          ) : (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow-xl">
              <div className="flex justify-end p-12">
                <XMarkIcon className="h-8 w-8 text-gray-900 cursor-pointer" />
              </div>
              <div className={`ml-12 flex flex-col items-start   `}>
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className=" p-4 list-none hover:bg-blue-200 w-full rounded-lg"
                  >
                    <a
                      href={item.href}
                      className="font-montserrat font-medium leading-normal text-lg text-gray-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <Button label="Get Started" iconUrl={undefined} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
