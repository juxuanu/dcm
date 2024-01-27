import React from "react";
import { getCuriosities } from "@dcm/data/data";
import Section from "@dcm/components/section";
import StringPair from "@dcm/components/string-pair";
import { Metadata } from "next";
import Footer from "@dcm/components/footer";
import Header from "@dcm/components/header";

export const metadata: Metadata = {
  title: "Curiositats | MxC",
};

// noinspection JSNonASCIINames,NonAsciiCharacters
const Curiositats: React.FC = () => {
  const curiositats = getCuriosities();

  return (
    <>
      <Header currentPage={"curiositats"} />
      <Section title={"Articles definits"}>
        <ul className="space-y-2">
          {curiositats["articles definits"].llista.map((a) => (
            <StringPair key={a.ca} one={a.ca} two={a.ma} />
          ))}
          <li></li>
        </ul>
        <div className="mt-3">
          <h3 className="text-lg h-fit mt-4 mb-2 font-medium uppercase">
            Excepcions
          </h3>
          <p className="first-letter:capitalize mb-2">
            {curiositats["articles definits"].notes["1"].text}.
          </p>
          <div>
            <p className="first-letter:capitalize mb-2">
              {curiositats["articles definits"].notes["2"].text}.
            </p>
            <ul className="space-y-2 ml-2 list-inside list-disc">
              {curiositats["articles definits"].notes["2"].llista.map((i) => {
                const split = i.split(":");
                if (split.length === 1)
                  return (
                    <li key={i} className="first-letter:capitalize">
                      {split[0]}
                    </li>
                  );
                return (
                  <li key={i} className="first-letter:capitalize">
                    <span className="font-semibold">{split[0]}</span>:{split[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>
      <Section title={"Articles personals"} extraClasses={"mt-6"}>
        <p>{curiositats["articles personals"]}</p>
      </Section>
      <Section title={"Maneres de dir"} extraClasses={"mt-6"}>
        <ul className="space-y-2">
          {curiositats["maneres de dir"].llista.map((i) => (
            <li key={i.concepte}>
              <StringPair one={i.concepte} two={i.paraules} />
            </li>
          ))}
        </ul>
      </Section>
      <Section title={"Pronúncia"} extraClasses={"mt-6"}>
        <p className="first-letter:uppercase mb-4">
          {curiositats.pronúncia.text}.
        </p>
        <ul className="space-y-2">
          {curiositats.pronúncia.llista.map((i) => {
            const split = i.split(":");
            if (split.length === 1)
              return (
                <li key={i} className="first-letter:capitalize">
                  {split[0]}
                </li>
              );
            return (
              <li key={i} className="first-letter:capitalize">
                <span className="font-semibold">{split[0]}</span>:
                {split.slice(1).join(":")}
              </li>
            );
          })}
        </ul>
      </Section>
      <Section title={"Sufixos"} extraClasses="mt-6">
        <ul className="space-y-2">
          {curiositats.sufixos.llista.map((i) => {
            const split = i.split(":");
            if (split.length === 1)
              return (
                <li key={i} className="first-letter:capitalize">
                  {split[0]}
                </li>
              );
            return (
              <li key={i} className="first-letter:capitalize">
                <span className="font-semibold">{split[0]}</span>:
                {split.slice(1).join(":")}
              </li>
            );
          })}
        </ul>
      </Section>
      <Footer />
    </>
  );
};

export default Curiositats;
