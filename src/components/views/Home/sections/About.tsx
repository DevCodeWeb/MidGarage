import { Button } from "@/components/atoms/Button";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const About = () => {
  return (
    <section className="my-[220px]">
      <div className="col-span-6 text-[22px] flex flex-col justify-center xs:col-span-12 sm:col-span-12">
        <h2 className="col-span-12 font-bold text-[40px] mb-[24px] xs:text-center sm:text-center">
          Qui sommes-nous ?
        </h2>
        <img
          src="assets/about.png"
          alt=""
          className="hidden col-span-12 xs:block sm:block"
        />
        <p className="mb-[24px] xs:text-[18px] sm:text-[18px]">
          MID GARAGE, réparateur multimarque vous accueille pour la réparation
          et l’entretien de vos Poids Lourd à Nesle et en déplacement. Découvrez
          toute notre gamme de prestations : entretien, révision, vidange,
          courroie de distribution, amortisseurs/suspension, freinage etc…
          <br />
          <br />
          Nous nous déplaçons également sur devis dans toute la France et pays
          voisins pour vous dépanner en cas de besoin. La garantie constructeur
          est préservée et certifiée. Nos professionnels sont formés aux
          nouveautés techniques leur permettant d’intervenir sur toutes les
          marques de véhicules. Ils suivent et respectent le cahier des charges
          des constructeurs automobiles.
          <br />
          <br />
          MID GARAGE est là pour vous conseiller et répondre à l’ensemble de vos
          besoins. N’hésitez plus, prenez rendez-vous chez votre garagiste pour
          l’entretien de votre Poids Lourd. À bientôt chez MID GARAGE
        </p>
        <div className="flex gap-[24px] xs:flex-col sm:flex-col">
          <Link href="/garage">
            <Button label="Découvrez notre garage" />
          </Link>
        </div>
      </div>
      <img
        src="assets/about.png"
        alt=""
        className="col-span-5 xs:hidden sm:hidden"
      />
    </section>
  );
};
