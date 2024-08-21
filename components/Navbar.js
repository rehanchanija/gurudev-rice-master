import { Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { Logo } from "../svg/Logo";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const path = router.pathname;
  return (
    <div className=" flex justify-between items-center text-black  mx-auto lg:container lg:px-0 px-4 sticky top-0">
      <Link href="/" prefetch={false}>
        <div className="flex space-x-2 items-center cursor-pointer">
          <Image
            src="/images/logo2.png"
            width={300}
            height={300}
            alt="Gurudev Rice"
            className="sm:h-20 h-18 sm:w-20 w-20"
          />
          <h3 className="text-xl font-semibold text-primary">
            GURUDEV
            <span className="text-[#7F8732]"> RICE </span>
          </h3>
        </div>
      </Link>
      {/* Desktop View */}
      <div className="md:flex hidden items-center">
        <div>
          <ul className="flex  sm:text-base font-base xl:space-x-10 sm:space-x-4  font-poppins text-gray-400">
            <li
              className="py-1 cursor-pointer text-xl font-semibold"
              style={{
                color: path === "/" ? "#000" : "#000",
                borderBottom: path === "/" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/" prefetch={false}>
                <p className="text-black p-0 m-0">Home</p>
              </Link>
            </li>

            <li
              className="cursor-pointer py-1 text-xl font-semibold"
              style={{
                color: path === "/aboutus" ? "#000" : "#000",
                borderBottom:
                  path === "/aboutus" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/aboutus" prefetch={false}>
                <p className="text-black p-0 m-0">About Us</p>
              </Link>
            </li>

            <li
              className="cursor-pointer py-1 text-xl font-semibold"
              style={{
                color: path === "/products" ? "#000" : "#000",
                borderBottom:
                  path === "/products" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/products" prefetch={false}>
                <p className="text-black p-0 m-0">Products</p>
              </Link>
            </li>
            {/* <li
              className="cursor-pointer py-1 text-xl font-semibold"
              style={{
                color: path === "/sustainability" ? "#000" : "#000",
                borderBottom:
                  path === "/sustainability" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/sustainability" prefetch={false}>
                Sustainability
              </Link>
            </li> */}
            <li
              className="cursor-pointer py-1 text-xl font-semibold"
              style={{
                color: path === "/contactus" ? "#000" : "#000",
                borderBottom:
                  path === "/contactus" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/contactus" prefetch={false}>
                <p className="text-black p-0 m-0">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* mobile View */}
      <div className="md:hidden flex  z-40">
        <button className="text-4xl" onClick={toggleDrawer}>
          <HiOutlineMenuAlt3 />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          width="300px"
          //   className="absolute"
        >
          <ul className="flex flex-col  text-2xl space-y-6  font-poppins text-gray-400 py-14 items-center">
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-1"
              style={{
                color: path === "/" ? "#000" : "#000",
                borderBottom: path === "/" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/" prefetch={false}>
                <p className="text-black p-0 m-0">Home</p>
              </Link>
            </li>
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-1"
              style={{
                color: path === "/aboutus" ? "#000" : "#000",
                borderBottom:
                  path === "/aboutus" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/aboutus" prefetch={false}>
                <p className="text-black p-0 m-0">About Us</p>
              </Link>
            </li>
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-1"
              style={{
                color: path === "/products" ? "#000" : "#000",
                borderBottom:
                  path === "/products" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/products" prefetch={false}>
                <p className="text-black p-0 m-0">Products</p>
              </Link>
            </li>
            {/* <li
              onClick={toggleDrawer}
              className="cursor-pointer py-1"
              style={{
                color: path === "/sustainability" ? "#000" : "#000",
                borderBottom:
                  path === "/sustainability" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/sustainability" prefetch={false}>
                Sustainability
              </Link>
            </li> */}
            <li
              onClick={toggleDrawer}
              className="cursor-pointer py-1"
              style={{
                color: path === "/contactus" ? "#000" : "#000",
                borderBottom:
                  path === "/contactus" ? "3px solid #DA8E2D" : "none",
              }}
            >
              <Link href="/contactus" prefetch={false}>
                <p className="text-black p-0 m-0">Contact Us</p>
              </Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
