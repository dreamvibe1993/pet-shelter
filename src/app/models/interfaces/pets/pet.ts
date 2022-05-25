import { Breed } from "./breed";

export interface Pet {
  breeds: Array<Breed>;
  height: number;
  id: string;
  url: string;
  width: number;
}
