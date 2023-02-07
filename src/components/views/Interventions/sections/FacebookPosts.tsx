import { Posts } from "@/data/Posts";

export const FacebookPosts = () => {
  return (
    <section className="mb-[150px]">
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
    </section>
  );
};
