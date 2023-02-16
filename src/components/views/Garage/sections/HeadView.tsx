/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import garageIcon from "@iconify/icons-mdi/garage";
import phoneOutline from "@iconify/icons-eva/phone-outline";
import homePin from "@iconify/icons-material-symbols/home-pin";
import emailOutline from "@iconify/icons-eva/email-outline";

import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export const HeadView = () => {
  return (
    <section className="pb-[150px]">
      <img src="assets/garage.png" alt="" className="col-span-12" />
      <div className="flex flex-col col-span-12">
        <div className="flex items-center gap-[12px]">
          <Icon icon={garageIcon} className="w-[48px] h-[48px]" />
          <h1 className="text-[48px] font-bold">MidGarage</h1>
        </div>
        <h2 className="text-[24px]">Votre garage poids lourds - Nesle</h2>
      </div>
      <div className="h-full col-span-7 xs:col-span-12 sm:col-span-12">
        <p className="mb-[24px] text-[18px]">
          MID GARAGE est là pour vous conseiller et répondre à l’ensemble de vos
          besoins.
        </p>
        <div className="flex xs:flex-col sm:flex-col justify-between text-white bg-red p-[24px] gap-[48px] rounded-lg text-[20px]">
          <div className="flex flex-col gap-[12px] ">
            <div className=" flex items-center gap-[12px]">
              <Icon icon={homePin} />
              <h3>Adresse :</h3>
            </div>
            <h4>0 Chem. d&apos;Amiens, 80190 Nesle</h4>
            <div className=" flex items-center gap-[12px]">
              <Icon icon={phoneOutline} />
              <h3>Téléphone :</h3>
            </div>
            <h4>09 09 45 45 24</h4>
            <div className=" flex items-center gap-[12px]">
              <Icon icon={emailOutline} />
              <h3>Mail :</h3>
            </div>
            <h4>contact@midgarage.eu</h4>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-between font-normal">
              <h2>Lundi</h2>
              <h2>Mardi</h2>
              <h2>Mercredi</h2>
              <h2>Jeudi</h2>
              <h2>Vendredi</h2>
              <h2>Samedi</h2>
              <h2>Dimanche</h2>
            </div>
            <div className="flex flex-col justify-between font-normal">
              <h2>9:00 - 12:00 / 13:00 - 17:00</h2>
              <h2>9:00 - 12:00 / 13:00 - 17:00</h2>
              <h2>9:00 - 12:00 / 13:00 - 17:00</h2>
              <h2>9:00 - 12:00 / 13:00 - 17:00</h2>
              <h2>9:00 - 12:00 / 13:00 - 17:00</h2>
              <h2>Fermé</h2>
              <h2>Fermé</h2>
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] mt-[24px] xs:flex-col sm:flex-col">
          <Link href="/contact">
            <Button label="Prenez Rendez-vous" />
          </Link>
          <Link href="/contact">
            <Button label="Demader un devis" />
          </Link>
        </div>
      </div>
      <div className="col-span-5 overflow-hidden rounded-lg xs:col-span-12 sm:col-span-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.178329161648!2d2.9022075391376765!3d49.7639024134547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7e310ab99de7f%3A0xc1dea80993537ef8!2sMid%20Garage!5e0!3m2!1sfr!2sfr!4v1675955962170!5m2!1sfr!2sfr"
          width="600"
          height="520"
          loading="lazy"
        ></iframe>
        <p className="hidden text-center sm:block xs:block mt-[24px]">
          Retrouvez-nous à Nesle directement
        </p>
      </div>
    </section>
  );
};
