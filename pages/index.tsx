import React from "react";
import { Wrapper } from "@dcm/components/wrapper";
import { Section } from "@dcm/components/section";
import Link from "next/link";
import { StringPair } from "@dcm/components/string-pair";

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
          <Link className="underline" href={"mailto:aniads@hotmail.es"}>
            Aina
          </Link>
          , com a regal per l&apos;
          <Link className="underline" href={"mailto:dcm@icarns.xyz"}>
            Ícar
          </Link>
          .
        </p>
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
            <StringPair one={"Programació"} two={"Ícar"} />
          </li>
          <li>
            <StringPair one={"Disseny"} two={"Aina"} />
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
    </Wrapper>
  );
};

export default Home;
