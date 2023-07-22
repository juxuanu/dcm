import React from "react";
import { Wrapper } from "@dcm/components/wrapper";
import { Section } from "@dcm/components/section";
import Link from "next/link";
import Image from "next/image";
import { StringPair } from "@dcm/components/string-pair";
import { LinkedInLogo } from "@dcm/components/linkedin-logo";
import { InstagramLogo } from "@dcm/components/instagram-logo";
import llibret1 from "../assets/images/llibret1-mini.jpeg";
import llibret2 from "../assets/images/llibret2-mini.jpeg";
import llibret3 from "../assets/images/llibret3-mini.jpeg";
import { EmailLogo } from "@dcm/components/email-logo";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Section title={"Què?"}>
        <p>
          Un recull de curiositats, expressions i paraules mallorquines
          explicades i traduïdes per catalans.
        </p>
        <p>
          Basat en un llibret autoeditat i enquadernat per l&apos;
          <Link
            className="underline"
            href={"mailto:ainadelsol.disseny@gmail.com"}
          >
            Aina
          </Link>
          , com a regal per l&apos;
          <Link className="underline" href={"mailto:dcm@icarns.xyz"}>
            Ícar
          </Link>
          .
        </p>
        <div
          className={`w-full h-auto overflow-x-auto flex flex-row flex-nowrap gap-3 my-6
            [&>*]:w-72 [&>*]:h-auto `}
        >
          <Link href={"/llibret1.jpeg"}>
            <Image
              loading={"lazy"}
              src={llibret1}
              title={"Llibret: vocabulari"}
              alt={"Llibret: vocabulari"}
            />
          </Link>
          <Link href={"/llibret2.jpeg"}>
            <Image
              loading={"lazy"}
              src={llibret2}
              title={"Llibret: portada"}
              alt={"Llibret: portada"}
            />
          </Link>
          <Link href={"/llibret3.jpeg"}>
            <Image
              loading={"lazy"}
              src={llibret3}
              title={"Llibret: paraules"}
              alt={"Llibret: paraules"}
            />
          </Link>
        </div>
        <div className="w-full mt-10 pr-4 text-right border-r-2 border-solid border-bookBlue">
          <blockquote className="italic">
            Un recull fet per tu, Ícar, perquè puguis aprendre un poquet més de
            jo.
          </blockquote>
          <p>Sant Jordi, 2023</p>
        </div>
      </Section>
      <Section title={"Qui?"} extraClasses="mt-6">
        <ul className="space-y-2">
          <li>
            <StringPair
              one={"Disseny"}
              two={"Aina"}
              extraElement={
                <div className="w-fit h-fit flex flex-row gap-1">
                  <Link
                    href={"https://www.linkedin.com/in/ainadelsol/"}
                    prefetch={false}
                    target={"_blank"}
                  >
                    <LinkedInLogo />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/ainadelsol/"}
                    prefetch={false}
                    target={"_blank"}
                  >
                    <InstagramLogo />
                  </Link>
                  <Link href={"mailto:ainadelsol.disseny@gmail.com"}>
                    <EmailLogo />
                  </Link>
                </div>
              }
            />
          </li>
          <li>
            <StringPair
              one={"Programació"}
              two={"Ícar"}
              extraElement={
                <div className="w-fit h-fit flex flex-row gap-1">
                  <Link
                    href={"https://www.linkedin.com/in/icarns/"}
                    prefetch={false}
                    target={"_blank"}
                  >
                    <LinkedInLogo />
                  </Link>
                  <Link href={"mailto:dcm@icarns.xyz"}>
                    <EmailLogo />
                  </Link>
                </div>
              }
            />
          </li>
        </ul>
      </Section>
      <Section title={"Com?"} extraClasses="mt-6">
        <p>
          El disseny del llibret original ha estat creat amb Adobe InDesign, i
          posteriorment adaptat.
        </p>
        <p>
          El lloc web ha estat creat amb Next.js i es serveix des de Cloudflare.{" "}
          <Link
            href={"https://github.com/juxuanu/dcm"}
            prefetch={false}
            target={"_blank"}
            className="underline"
          >
            Codi públic
          </Link>
          .
        </p>
      </Section>
      <Section title={"On?"} extraClasses="mt-6">
        <p>Aquest projecte ha aparegut en diferents mitjans de comunicació:</p>
        <ul className="list-disc list-inside">
          <li>
            IB3:{" "}
            <Link
              className="underline"
              href={
                "https://s3.amazonaws.com/media.ib3alacarta.com/058decc8-4b98-4f6f-b3b4-9b2984825171/da217664-1bdf-11ee-a224-c437725f29d4/DLT8706291.mp4"
              }
            >
              Cinc dies
            </Link>{" "}
            (entrevista a les 2h i 9min)
          </li>
          <li>
            <Link
              className="underline"
              href={
                "https://www.arabalears.cat/cultura/catalunya-nyonya-mallorca-xubec-diccionari-mallorquina-fet-catala_1_4740442.html"
              }
            >
              ARA Balears
            </Link>
          </li>
          <li>
            Revista de Llucmajor:{" "}
            <Link className="underline" href={"/revista-llucmajor.jpg"}>
              imprès
            </Link>
          </li>
        </ul>
      </Section>
    </Wrapper>
  );
};

export default Home;
