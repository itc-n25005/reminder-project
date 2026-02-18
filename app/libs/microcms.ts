import { createClient } from "microcms-js-sdk";

export type task = {
  id: number;
  event: string;
  date: string;
  time: string;
  done: boolean;
};
export type todo = {
  id: number;
  event: string;
  date: string;
  time: string;
  done: boolean;
};
