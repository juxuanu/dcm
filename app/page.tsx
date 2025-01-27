import EmailLogo from "@dcm/components/email-logo";
import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";
import InstagramLogo from "@dcm/components/instagram-logo";
import LinkedInLogo from "@dcm/components/linkedin-logo";
import Section from "@dcm/components/section";
import StringPair from "@dcm/components/string-pair";
import Picture from "next-export-optimize-images/picture";
import Link from "next/link";
import type { FC } from "react";
import llibret1 from "../public/llibret1.jpeg";
import llibret2 from "../public/llibret2.jpeg";
import llibret3 from "../public/llibret3.jpeg";

const Home: FC = () => {
  return (
    <>
      <Header />
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
          className={
            "my-6 flex h-auto w-full flex-row flex-nowrap gap-3 overflow-x-auto *:h-auto *:w-72"
          }
        >
          <Link href={"/llibret1.jpeg"} prefetch={false}>
            <Picture
              src={llibret1}
              title={"Llibret: vocabulari"}
              alt={"Llibret: vocabulari"}
              placeholder={"blur"}
            />
          </Link>
          <Link href={"/llibret2.jpeg"} prefetch={false}>
            <Picture
              src={llibret2}
              title={"Llibret: portada"}
              alt={"Llibret: portada"}
              placeholder={"blur"}
            />
          </Link>
          <Link href={"/llibret3.jpeg"} prefetch={false}>
            <Picture
              src={llibret3}
              title={"Llibret: paraules"}
              alt={"Llibret: paraules"}
              placeholder={"blur"}
            />
          </Link>
        </div>
        <div className="border-book-blue mt-10 w-full border-r-2 border-solid pr-4 text-right">
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
                <div className="flex h-fit w-fit flex-row gap-1">
                  <Link
                    href={"https://www.linkedin.com/in/ainadelsol/"}
                    prefetch={false}
                    target={"_blank"}
                    title={"LinkedIn"}
                  >
                    <LinkedInLogo />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/ainadelsol/"}
                    prefetch={false}
                    target={"_blank"}
                    title={"Instagram"}
                  >
                    <InstagramLogo />
                  </Link>
                  <Link
                    href={"mailto:ainadelsol.disseny@gmail.com"}
                    title={"E-Mail"}
                  >
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
                <div className="flex h-fit w-fit flex-row gap-1">
                  <Link
                    href={"https://www.linkedin.com/in/icarns/"}
                    target={"_blank"}
                    title={"LinkedIn"}
                  >
                    <LinkedInLogo />
                  </Link>
                  <Link href={"mailto:dcm@icarns.xyz"} title={"E-Mail"}>
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
          El lloc web ha estat creat amb Next.js.{" "}
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
        <p className={"mt-4 w-full text-center"}>
          &#9888; No s&apos;ha rebut cap tipus d&apos;assistència lingüística i
          no som experts en aquest àmbit.{" "}
          <span className={"invisible md:visible"}>&#9888;</span>
        </p>
      </Section>
      <Section title={"On?"} extraClasses="mt-6">
        <p>Aquest projecte ha aparegut en diferents mitjans de comunicació:</p>
        <ul className="list-inside list-disc">
          <li>
            IB3:{" "}
            <Link
              className="underline"
              href={
                "https://s3.amazonaws.com/media.ib3alacarta.com/058decc8-4b98-4f6f-b3b4-9b2984825171/da217664-1bdf-11ee-a224-c437725f29d4/DLT8706291.mp4"
              }
              target={"_blank"}
              prefetch={false}
            >
              Cinc dies
            </Link>{" "}
            (entrevista a les 2h i 9min)
          </li>
          <li>
            IB3:{" "}
            <Link
              className="underline"
              target={"_blank"}
              href={
                "https://s3.amazonaws.com/media.ib3alacarta.com/eeeeb5c0-1941-4e25-884d-91010e713d8d/db3060aa-1737-11ee-a224-c437725f29d4/6-422-121478.mp3"
              }
              prefetch={false}
            >
              Ràdio
            </Link>{" "}
            (entrevista al minut 42 i mig)
          </li>
          <li>
            <Link
              className="underline"
              target={"_blank"}
              href={
                "https://www.arabalears.cat/cultura/catalunya-nyonya-mallorca-xubec-diccionari-mallorquina-fet-catala_1_4740442.html"
              }
              prefetch={false}
            >
              ARA Balears
            </Link>
          </li>
          <li>
            Revista de Llucmajor:{" "}
            <Link
              className="underline"
              href={"/revista-llucmajor.jpg"}
              prefetch={false}
            >
              imprès
            </Link>
          </li>
          <li>
            <Link
              className="underline"
              target={"_blank"}
              href={
                "https://www.elnacional.cat/ca/estil-vida/paraules-diferents-mallorqui-catala_1260374_102.html"
              }
              prefetch={false}
            >
              El Nacional
            </Link>
          </li>
        </ul>
      </Section>
      <Footer />
    </>
  );
};

export default Home;
