import { useState } from "react";
import { navLinks } from "@/data";
import logo from "../assets/logo.svg";
import lightArrow from "../assets/icon-arrow-light.svg";
import darkArrow from "../assets/icon-arrow-dark.svg";
import { motion } from "framer-motion";
import { MenuToggle } from "./ToggleButton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [position, setPosition] = useState("bottom");
  const [showSublink, setShowSublink] = useState({});

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSublinkToggle = (index) => {
    setShowSublink((prevState) => {
      const updatedState = { ...prevState };

      // Close all other sublinks except the clicked one
      Object.keys(updatedState).forEach((key) => {
        if (key !== String(index)) {
          updatedState[key] = false;
        }
      });

      // Toggle the clicked sublink
      updatedState[index] = !prevState[index];
      return updatedState;
    });
  };

  return (
    <header className="bg lg:bg-big rounded-bl-large bg-pattern-mobile-gradient bg-no-repeat pb-[2.3rem] px-[30px] pt-10 md:px-9 lg:bg-pattern-desktop-gradient lg:pl-36 lg:pr-28 lg:pt-12 xl:pr-36 rounded-bl-[90px]">
      <div className="flex justify-between items-center">
        {/* Left */}
        <div className="flex space-x-[60px]">
          <img src={logo}></img>
          <nav className="hidden lg:flex items-center gap-10 ">
            {navLinks.map((navLink) => (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div key={navLink.id}>
                      <a
                        href="/"
                        className="flex items-center gap-2 text-[#fce4df] font-semibold capitalize"
                      >
                        {navLink.name}
                        <img
                          src={lightArrow}
                          alt="link icon"
                          className="text-white"
                        />
                      </a>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40 py-5 px-5">
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      {navLink.subLinks.map((subLink, index) => (
                        <div>
                          <p
                            key={index}
                            className="cursor-pointer text-[16px] font-light hover:font-semibold mb-2"
                          >
                            {subLink}
                          </p>
                        </div>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ))}
          </nav>
        </div>

        {mobileMenu && (
          <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-black shadow-lg rounded-[5px] bg-white flex flex-col items-center absolute left-[10%] top-[10%] h-[60%] w-[80%] p-8 gap-8 z-50 ">
              <div className="flex flex-col justify-center w-full gap-[20px]">
                {navLinks.map((link, index) => (
                  <div
                    key={link.id}
                    className="flex flex-col items-center w-full "
                  >
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSublinkToggle(index);
                      }}
                      className="flex items-center gap-2 cursor-pointer capitalize"
                    >
                      {link.name}
                      <img
                        src={darkArrow}
                        alt="link icon"
                        className="text-red-500"
                      />
                    </a>
                    {showSublink[index] && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="py-[20px] bg-[#efeff1] w-full mt-[20px] rounded-[5px]"
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <p
                            key={subIndex}
                            className="cursor-pointer text-[16px] font-light text-center hover:font-semibold mb-2"
                          >
                            {subLink}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-[20px] w-full">
                <Button className="text-black text-[18px] tracking-[1px]">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-[#ff856e] to-[#fd4756] text-[18px] text-white w-[50%] h-[43px] rounded-[25px]">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex lg:hidden">
          <MenuToggle toggle={handleToggle} />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-[#fce4df] font-semibold">Login</button>
          <button className="bg-white text-[#f24b5d] font-semibold px-5 py-2 rounded-[19px]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Hero */}
      <main className="py-[100px] text-center">
        <h1 className="text-white  text-[50px]">
          A modern publishing platform
        </h1>
        <p className="text-[#fce4df] text-[18px] mt-3">
          Grow your audience and build your online brand
        </p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button>Start for Free</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </main>
    </header>
  );
};

export default Header;
