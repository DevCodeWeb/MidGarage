import { Icon } from "@iconify/react";
import phoneFill from "@iconify/icons-eva/phone-fill";
import mailRounded from "@iconify/icons-material-symbols/mail-rounded";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className="flex flex-col text-white gap-[48px] pt-[48px] pb-[24px] items-center justify-center w-screen bg-red">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        <div className="">
          <img src="assets/logoMidGarage_White.png" alt="" />
        </div>
        <div className="flex gap-[48px]">
          <div className="flex flex-col items-end">
            <h2 className="font-semibold text-[18px] mb-[12px]">
              Interventions
            </h2>
            <h2>France - Belgique - Allemagne</h2>
            <h2>Suisse - Luxembourg - Pays-Bas</h2>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-semibold text-[18px] mb-[12px]">Facebook</h2>
            <a
              href="https://www.facebook.com/midate/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="hover:underline">@MidGarage</h4>
            </a>
            <Link href="interventions">
              <h4 className="hover:underline">Nos interventions</h4>
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="font-semibold text-[18px] mb-[12px]">Contact</h2>
            <div className=" flex gap-[12px] items-center">
              <Icon icon={phoneFill} />
              <h4>09 87 56 93 27</h4>
            </div>
            <div className=" flex gap-[12px] items-center">
              <Icon icon={mailRounded} />
              <h4>contact@midgarage.eu</h4>
            </div>
          </div>
        </div>
      </div>
      <p className="font-light text-[12px]">
        © copyright - MidGarage 2023 - site développé par{" "}
        <b className="font-semibold cursor-pointer hover:underline">DevCode</b>
      </p>
    </footer>
  );
};
