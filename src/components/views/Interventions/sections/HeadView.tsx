/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/atoms/Button";
import { Input, Select, TextArea } from "@/components/atoms/Inputs";
import { trucks } from "@/data/Trucks";
import sendRounded from "@iconify/icons-material-symbols/send-rounded";
import phoneFill from "@iconify/icons-eva/phone-fill";

export const HeadView = () => {
  const data = trucks;

  console.log(data[0].brand);

  return (
    <section className="pt-[20px]">
      <div className="col-span-10 h-[400px] bg-brithness-50 col-start-2 bg-team text-center font-bold flex flex-col items-center justify-end pb-[48px] text-[48px] mb-[48px] bg-">
        <h1>Nos interventions</h1>
        <p className="text-[40px] font-normal">
          Retrouvez juste ici quelques-unes de nos interventions
        </p>
      </div>
    </section>
  );
};
