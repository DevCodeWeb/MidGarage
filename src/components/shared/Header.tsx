/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonTrans } from "../atoms/Button";
import { DropMobile } from "./Drop";
import { Icon } from "@iconify/react";
import menuFill from "@iconify/icons-eva/menu-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import truckFastOutline from "@iconify/icons-mdi/truck-fast-outline";
import garageHomeOutline from "@iconify/icons-material-symbols/garage-home-outline";
import phoneOutline from "@iconify/icons-eva/phone-outline";
import homeOutline from "@iconify/icons-material-symbols/home-outline";

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const links = [
    {
      title: "Accueil",
      link: "/",
      icon: homeOutline,
    },
    {
      title: "Interventions",
      link: "interventions",
      icon: truckFastOutline,
    },
    {
      title: "Garage",
      link: "garage",
      icon: garageHomeOutline,
    },
    {
      title: "Contact",
      link: "contact",
      icon: phoneOutline,
    },
  ];

  return (
    <header
      className={`flex fixed ${
        scroll
          ? "h-[70px]"
          : "h-[50px] bg-opacity-50 hover:h-[70px] hover:bg-opacity-100 duration-200"
      } items-center duration-200 text-white top-0 justify-center w-screen bg-blue shadow-lg z-30 xs:px-[16px] sm:px-[16px]`}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="">
          <img src="assets/logoMG.png" alt="" />
        </div>
        <div className="flex gap-[12px] items-center xs:hidden sm:hidden">
          {links.map((elm: any, i: number) => {
            return (
              <div key={i}>
                <Link href={elm.link}>
                  <ButtonTrans label={elm.title} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" gap-[12px] items-center xs:block sm:flex hidden">
          <Icon
            icon={active ? closeFill : menuFill}
            className="w-[32px] h-[32px]"
            onClick={() => {
              setActive(!active);
            }}
          />
          <DropMobile links={links} active={active} setActive={setActive} />
        </div>
      </div>
    </header>
  );
};
