import { Breed } from "./breed";

export interface Dog {
  breeds: Array<Breed>;
  height: number;
  id: string;
  url: string;
  width: number;
}
