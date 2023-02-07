import { Button, ButtonTrans } from "@/components/atoms/Button";

/* eslint-disable @next/next/no-img-element */
export const HeadView = () => {
  return (
    <section>
      <div className="col-span-12 bg-cover pt-[620px] bg-headView pb-[50px] flex flex-col items-center">
        <h1 className="text-[54px] font-bold">MidGarage</h1>
        <div className="flex items-center justify-between w-[90%]">
          <ButtonTrans label="Nos partenaires" />
          <p className="text-[24px]">
            Garage spécialisé dans la réparation de poids lourds dans toute
            l’Europe
          </p>
          <ButtonTrans label="Nos interventions" />
        </div>
      </div>
      <div className="col-span-6 col-start-4 flex gap-[24px] mt-[12px]">
        <Button label="Devis gratuit" />
        <Button label="Nous contacter" />
      </div>
    </section>
  );
};
