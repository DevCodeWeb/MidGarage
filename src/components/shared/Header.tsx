/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, ButtonTrans } from "../atoms/Button";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const links = [
    {
      title: "Accueil",
      link: "/",
    },
    {
      title: "Interventions",
      link: "interventions",
    },
    {
      title: "Garage",
      link: "garage",
    },
  ];

  return (
    <header
      className={`flex fixed ${
        scroll
          ? "h-[70px]"
          : "h-[50px] bg-opacity-50 hover:h-[70px] hover:bg-opacity-100 duration-200"
      } items-center duration-200 text-white top-0 justify-center w-screen bg-blue shadow-lg`}
    >
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="">
          <img src="assets/logoMG.png" alt="" />
        </div>
        <div className="flex gap-[12px] items-center">
          {links.map((elm, i) => {
            return (
              <div key={i}>
                <Link href={elm.link}>
                  <ButtonTrans label={elm.title} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
