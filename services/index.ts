import DataService, {
  Expression,
  Word,
  Curiosities,
} from "@dcm/services/data.service";

const dataService = new DataService();

export { dataService };
export type { Word, Curiosities, Expression };
