import { Button, ButtonTrans } from "@/components/atoms/Button";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const HeadView = () => {
  return (
    <section className="px-[16px]">
      <div className="col-span-12 bg-cover pt-[620px] bg-headView pb-[24px] flex flex-col items-center">
        <h1 className="text-[54px] font-bold">MidGarage</h1>
        <div className="flex items-center justify-between">
          <p className="text-[24px] text-center">
            Garage spécialisé dans la réparation de poids lourds dans toute
            l’Europe
          </p>
        </div>
      </div>
      <div className="col-span-6 xs:col-span-12 col-start-4 flex gap-[24px] mt-[12px] xs:flex-col sm:flex-col">
        <Link href="/contact">
          <Button label="Devis gratuit" />
        </Link>
        <Link href="/contact">
          <Button label="Nous contacter" />
        </Link>
      </div>
    </section>
  );
};
