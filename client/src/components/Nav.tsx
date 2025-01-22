import { useState } from "react";

interface navProps {
  updateState: () => void;
}

export default function Nav({ updateState }: navProps) {
  const [currentURL, setCurrentURL] = useState("Home");
  const updateLocation = (section: string) => {
    setCurrentURL(section);
  };

  //taiwlind css classNames
  const linkClass =
    "block py-2 pr-4 pl-3 dark:text-white rounded bg-primary-700 text-gray-950 lg:bg-transparent lg:p-0";
  const activLinkClass =
    "block py-2 pr-4 pl-3 text-pink-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0";

  return (
    <nav className="flex md:justify-center md:items-center w-full h-full border-gray-200 z-50 px-4 lg:px-6 py-2.5">
      <div className="flex flex-row md:justify-center md:items-center mx-auto w-full">
        <div
          className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-32 md:mt-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li
              className="text-3xl md:text-base mb-3 md:mb-0"
              onClick={() => {
                updateState();
              }}
            >
              <a
                href="#Home"
                className={currentURL === "Home" ? activLinkClass : linkClass}
                aria-current="page"
                onClick={() => {
                  updateLocation("Home");
                }}
              >
                Home
              </a>
            </li>
            <li
              className="text-3xl md:text-base mb-3 md:mb-0"
              onClick={() => {
                updateState();
              }}
            >
              <a
                href="#About"
                className={currentURL === "About" ? activLinkClass : linkClass}
                onClick={() => {
                  updateLocation("About");
                }}
              >
                About
              </a>
            </li>
            <li
              className="text-3xl md:text-base mb-3 md:mb-0"
              onClick={() => {
                updateState();
              }}
            >
              <a
                href="#Teams"
                className={currentURL === "Teams" ? activLinkClass : linkClass}
                onClick={() => {
                  updateLocation("Teams");
                }}
              >
                Teams
              </a>
            </li>
            <li
              className="text-3xl md:text-base mb-3 md:mb-0"
              onClick={() => {
                updateState();
              }}
            >
              <a
                href="#Contact"
                className={
                  currentURL === "ContactUs" ? activLinkClass : linkClass
                }
                onClick={() => {
                  updateLocation("ContactUs");
                }}
              >
                Contact Us
              </a>
            </li>
            <li
              className="text-3xl md:text-base mb-3 md:mb-0"
              onClick={() => {
                updateState();
              }}
            >
              <a
                href="#Market"
                className={
                  currentURL === "MarketPlace" ? activLinkClass : linkClass
                }
                onClick={() => {
                  updateLocation("MarketPlace");
                }}
              >
                Marketplace
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
