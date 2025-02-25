import type { Data } from "./component";

export function filterSearchTerm(
  data: Data,
  searchTerm: string | undefined,
): Data {
  if (!searchTerm) return data;

  return data
    .map((group) =>
      group.filter(
        (item) =>
          normalize(item.one).includes(normalize(searchTerm)) ||
          normalize(item.two).includes(normalize(searchTerm)),
      ),
    )
    .filter((group) => group.length > 0);
}

function normalize(input: string): string {
  return input
    .toLocaleLowerCase("ca-ES")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}
