import { createClient } from "microcms-js-sdk";

export type task = {
  id: number;
  text: string;
  time: string;
  done: boolean;
};
export type todo = {
  id: number;
  text: string;
  time: string;
  done: boolean;
};
