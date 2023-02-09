/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import garageIcon from "@iconify/icons-mdi/garage";
import phoneOutline from "@iconify/icons-eva/phone-outline";
import homePin from "@iconify/icons-material-symbols/home-pin";
import emailOutline from "@iconify/icons-eva/email-outline";

import { Button } from "@/components/atoms/Button";

export const HeadView = () => {
  return (
    <section className="pb-[150px]">
      <img src="assets/garage.png" alt="" className="col-span-12" />
      <div className="flex flex-col col-span-12">
        <h2 className="text-[24px]">Votre garage poids lourds - Nesle</h2>
        <div className="flex items-center gap-[12px]">
          <Icon icon={garageIcon} className="w-[48px] h-[48px]" />
          <h1 className="text-[48px] font-bold">MidGarage</h1>
        </div>
      </div>
      <div className="h-full col-span-7">
        <p className="mb-[24px] text-[18px]">
          MID GARAGE est là pour vous conseiller et répondre à l’ensemble de vos
          besoins. N’hésitez plus, prenez rendez-vous chez votre garagiste. À
          bientôt chez MID GARAGE !
        </p>
        <div className="flex justify-between text-white bg-red p-[24px] gap-[48px] rounded-lg text-[20px]">
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
        <div className="flex gap-[16px] mt-[24px]">
          <Button label="Prenez Rendez-vous" />
          <Button label="Demader un devis" />
        </div>
      </div>
      <div className="col-span-5 overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.178329161648!2d2.9022075391376765!3d49.7639024134547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7e310ab99de7f%3A0xc1dea80993537ef8!2sMid%20Garage!5e0!3m2!1sfr!2sfr!4v1675955962170!5m2!1sfr!2sfr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};
