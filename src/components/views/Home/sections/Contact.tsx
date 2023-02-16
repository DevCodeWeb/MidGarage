/* eslint-disable @next/next/no-img-element */
import { Button, LargeButton } from "@/components/atoms/Button";
import sendRounded from "@iconify/icons-material-symbols/send-rounded";
import phoneFill from "@iconify/icons-eva/phone-fill";
import roundMailOutline from "@iconify/icons-ic/round-mail-outline";
import fileDocumentOutline from "@iconify/icons-mdi/file-document-outline";

export const Contact = () => {
  const contactWay = [
    {
      title: "Envoyer un message",
      subtitle: "Formulaire de contact",
      icon: sendRounded,
      link: "/contact",
    },
    {
      title: "Demander un devis",
      subtitle: "Formulaire de contact",
      icon: fileDocumentOutline,
      link: "/contact",
    },
    {
      title: "Appeler",
      subtitle: "09 87 56 93 27",
      icon: phoneFill,
      link: "tel:0987569327",
    },
    {
      title: "Mail",
      subtitle: "contact@midgarage.eu",
      icon: roundMailOutline,
      link: "mailto:contact@midgarage.eu",
    },
  ];

  return (
    <section className="mb-[24px]">
      <img
        src="assets/contact.png"
        alt=""
        className="col-span-5 xs:hidden sm:hidden"
      />
      <div className="flex flex-col items-center justify-center col-span-6 xs:col-span-12 sm:col-span-12">
        <h2 className="font-bold text-[40px]">Nous contacter</h2>
        <p className="mb-[48px]">
          Veuillez choisir le moyen de contact qui vous convient
        </p>
        <div className=" flex flex-col gap-[24px] w-full">
          {contactWay.map((elm: any, i: number) => {
            return (
              <a href={elm.link} key={i}>
                <LargeButton
                  title={elm.title}
                  subtitle={elm.subtitle}
                  icon={elm.icon}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
