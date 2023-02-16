/* eslint-disable @next/next/no-img-element */
import { trucks } from "@/data/Trucks";

export const HeadView = () => {
  const data = trucks;

  console.log(data[0].brand);

  return (
    <section>
      <img src="assets/team.png" alt="" className="col-span-12" />
      <div className="col-span-10 xs:col-span-12 sm:col-span-12 xs:h-[220px] sm:-[220px] col-start-2 text-center font-bold flex flex-col items-center justify-end pb-[48px] xs:pb-[24px] sm:pb-[24px] text-[48px] mb-[48px] xs:text-[28px] sm:text-[28px]">
        <h1>Nos interventions</h1>
      </div>
    </section>
  );
};
