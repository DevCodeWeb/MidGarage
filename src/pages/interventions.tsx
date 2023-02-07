import { Interventions } from "@/components/views/Interventions";
import Head from "next/head";

export default function InterventionsPage() {
  return (
    <>
      <Head>
        <title>Nos interventions</title>
        <meta
          name="description"
          content="Garage spécialisé dans la réparation de poids lourds dans toute l’Europe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Interventions />
    </>
  );
}
