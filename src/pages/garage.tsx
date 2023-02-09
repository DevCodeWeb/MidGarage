import { Garage } from "@/components/views/Garage";
import Head from "next/head";

export default function GaragePage() {
  return (
    <>
      <Head>
        <title>Notre Garage</title>
        <meta
          name="description"
          content="Garage spécialisé dans la réparation de poids lourds dans toute l’Europe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Garage />
    </>
  );
}
