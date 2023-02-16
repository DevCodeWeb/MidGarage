import { ButtonTrans } from "@/components/atoms/Button";

import externalLinkFill from "@iconify/icons-eva/external-link-fill";
import { Posts } from "@/data/Posts";

export const FacebookPosts = () => {
  return (
    <section className="mb-[50px]">
      <h2 className="col-span-12 text-center text-[24px] xs:text-[18px] sm:text-[18px]">
        Nous partageons la plupart de nos interventions sur Facebook
      </h2>
      <div className="flex items-center justify-center flex-wrap col-span-12 gap-[24px] cursor-pointer">
        {Posts.map((elm: any, i: number) => {
          return (
            <a href={elm} key={i} target="_blank" rel="noreferrer">
              <iframe
                src={elm}
                width="400"
                height="600"
                loading="lazy"
                className="duration-300 border-4 border-white shadow-lg cursor-pointer rounded-2xl hover:shadow-2xl"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </a>
          );
        })}
      </div>
      <div className="flex justify-center col-span-12 mt-[24px]">
        <a
          href="https://www.facebook.com/midate/"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonTrans
            label="Voir plus"
            icon={externalLinkFill}
            className="flex-row-reverse"
          />
        </a>
      </div>
    </section>
  );
};
