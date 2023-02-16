import { Contact } from "@/components/views/Contact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Garage spécialisé dans la réparation de poids lourds dans toute l’Europe"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
