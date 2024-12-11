import {
  airline,
  elpa,
  safaricom,
  telecom,
  water,
  yegnabus,
} from "@/lib/assets";

import { IAction, ICategoryItem } from "@/types";

import {
  CirclePlusIcon,
  CircleDiagonalIconLeft,
  CircleDiagonalIconRight,
  CircleDiagonalIconDown,
} from "@/lib/assets";

export const transportationItems: ICategoryItem[] = [
  {
    name: "Ethiopian Airlines",
    logo: airline,
  },
  {
    name: "Yegna Bus Ticket",
    logo: yegnabus,
  },
];

export const utilityItems: ICategoryItem[] = [
  {
    name: "ELPA",
    logo: elpa,
  },
  {
    name: "Wuha Limat",
    logo: water,
  },
  {
    name: "EthioTelecom",
    logo: telecom,
  },
  {
    name: "Safaricom",
    logo: safaricom,
  },
];

export const actions: IAction[] = [
  { icon: CirclePlusIcon, label: "DEPOSIT" },
  { icon: CircleDiagonalIconLeft, label: "WITHDRAW" },
  { icon: CircleDiagonalIconRight, label: "SEND" },
  { icon: CircleDiagonalIconDown, label: "RECEIVE" },
];
