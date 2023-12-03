import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Badge,
  Card,
} from "@material-tailwind/react";
import { DialogWithForm } from "./DialogWithForm";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <>
      <ul className="mt-2 mb-4 px-5 py-1 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hover:shadow-2xl text-white bg-black border-none rounded-lg">
        <Typography as="li" variant="small" className="p-1 font-sans">
          <a href="#" className="flex items-center text-xl">
            Phones
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-sans">
          <a href="#" className="flex items-center text-xl">
            Laptops
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-sans">
          <a href="#" className="flex items-center text-xl">
            TVs
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-sans">
          <a href="#" className="flex items-center text-lg ">
            <Badge color="red">
              <svg
                class="w-6 h-6 text-blue-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                />
              </svg>
            </Badge>
          </a>
        </Typography>
      </ul>
      
    </>
  );

  return (
    <div className="max-h-[768px] w-[calc(100%)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-black">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-normal font-sans text-2xl"
          >
            The eShop
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <div className="flex items-center gap-x-1">
              <DialogWithForm />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
