/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/atoms/Button";
import { Input, Select, TextArea } from "@/components/atoms/Inputs";
import { trucks } from "@/data/Trucks";
import sendRounded from "@iconify/icons-material-symbols/send-rounded";
import phoneFill from "@iconify/icons-eva/phone-fill";

export const Contact = () => {
  const data = trucks;

  return (
    <section>
      <img src="assets/contact.png" alt="" className="col-span-6" />
      <div className="flex flex-col items-center justify-center col-span-6">
        <h2 className="font-bold text-[40px]">Nous contacter</h2>
        <p className="mb-[48px]">
          Veuillez bien remplir tous les champs pour que nous puissions traiter
          au mieux votre demande
        </p>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[18px]">
            Informations sur votre camion
          </h3>
          <div className="flex gap-[24px]">
            <Select data={data} label="Marque" placeholder="Man" />
            <Select data={data} label="Model" placeholder="Man" />
            <Select data={data} label="Année" placeholder="Man" />
          </div>
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[18px]">Informations sur vous</h3>
          <div className="flex gap-[24px]">
            <Input name="FirstName" label="Nom" placeholder="Man" required />
            <Input name="FirstName" label="Prénom" placeholder="Man" required />
          </div>
          <div className="flex gap-[24px] mt-[24px]">
            <Input
              name="FirstName"
              label="Adresse mail"
              placeholder="Man"
              required
            />
            <Input
              name="FirstName"
              label="Numéro de téléphone"
              placeholder="Man"
              required
            />
          </div>
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[12px]">Nom de votre entreprise</h3>
          <Input name="FirstName" placeholder="Man" />
        </div>
        <div className="w-full mb-[38px]">
          <h3 className="text-[20px] mb-[12px]">Votre message</h3>
          <TextArea placeholder="Mon alternateur m’a laché sur la A5. A l’aide !" />
        </div>
        <div className=" flex gap-[24px] w-full">
          <Button label="09 87 56 93 27" icon={phoneFill} />
          <Button label="Envoyer" icon={sendRounded} />
        </div>
      </div>
    </section>
  );
};
