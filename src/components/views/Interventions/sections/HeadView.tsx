/* eslint-disable @next/next/no-img-element */
import { trucks } from "@/data/Trucks";

export const HeadView = () => {
  const data = trucks;

  console.log(data[0].brand);

  return (
    <section className="pt-[20px]">
      <div className="col-span-10 xs:col-span-12 sm:col-span-12 h-[400px] xs:h-[220px] sm:-[220px] bg-brithness-50 col-start-2 bg-team bg-contain text-center font-bold flex flex-col items-center justify-end pb-[48px] xs:pb-[24px] sm:pb-[24px] text-[48px] mb-[48px] xs:text-[28px] sm:text-[28px]">
        <h1>Nos interventions</h1>
        <p className="text-[40px]  xs:text-[20px] sm:text-[20px] font-normal">
          Retrouvez juste ici quelques-unes de nos interventions
        </p>
      </div>
    </section>
  );
};
