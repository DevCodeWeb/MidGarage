/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/atoms/Button";
import { Input, Select, TextArea } from "@/components/atoms/Inputs";
import sendRounded from "@iconify/icons-material-symbols/send-rounded";
import phoneFill from "@iconify/icons-eva/phone-fill";

export const ContactForm = () => {
  return (
    <section className="mb-[100px]">
      <div className="flex flex-col items-center justify-center col-span-7 col-start-4 xs:col-span-12 sm:col-span-12">
        <p className="mb-[48px]">
          Veuillez bien remplir tous les champs pour que nous puissions traiter
          au mieux votre demande
        </p>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[18px]">
            Informations sur votre camion
          </h3>
          <div className="flex gap-[24px]">
            <Input label="Marque" placeholder="Man" />
            <Input label="Model" placeholder="Euro 6" />
            <Input label="Année" placeholder="2018" />
          </div>
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[18px]">Informations sur vous</h3>
          <div className="flex gap-[24px] xs:flex-col sm:flex-col">
            <Input name="FirstName" label="Nom" placeholder="Pierre" required />
            <Input
              name="FirstName"
              label="Prénom"
              placeholder="Dupont"
              required
            />
          </div>
          <div className="flex gap-[24px] mt-[24px] xs:flex-col sm:flex-col">
            <Input
              name="FirstName"
              label="Adresse mail"
              placeholder="pierredupont@gmail.com"
              required
            />
            <Input
              name="FirstName"
              label="Numéro de téléphone"
              placeholder="06 49 25 54 53"
              required
            />
          </div>
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[12px]">Nom de votre entreprise</h3>
          <Input name="FirstName" placeholder="Transport-Society" />
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[12px]">Votre message</h3>
          <TextArea placeholder="Mon alternateur m’a laché sur la A5. J'aurais besoin d'aide !" />
        </div>
        <div className=" flex gap-[24px] w-full xs:flex-col sm:flex-col">
          <Button label="09 87 56 93 27" icon={phoneFill} />
          <Button label="Envoyer" icon={sendRounded} />
        </div>
      </div>
    </section>
  );
};
