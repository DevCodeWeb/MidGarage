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
    <section className="py-[150px]">
      <div
        className="col-span-12 text-center font-bold text-[48px] mb-[48px
       ]"
      >
        <h1>Nos interventions</h1>
        <p className="text-[40px] font-normal">
          Retrouvez juste ici quelques-unes de nos interventions
        </p>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId"
        width="500"
        height="274"
        className="border:none overflow:hidden rounded-2xl"
      ></iframe>
    </section>
  );
};
