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
      title: "Contact",
      link: "Contact",
    },
    {
      title: "Partenaires",
      link: "partenaires",
    },
  ];

  return (
    <header
      className={`flex fixed ${
        scroll ? "top-0" : "top-[-70px]"
      } items-center duration-200 justify-center w-screen bg-blue h-[70px] shadow-lg`}
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
          <Button label="Contacter" />
        </div>
      </div>
    </header>
  );
};
