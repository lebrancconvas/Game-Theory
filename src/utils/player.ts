import { ITactic } from "../@types";

export class Player {
  tactics: ITactic[];

  constructor() {
    this.tactics = [];
  }

  addTactic(name: string, payoff: number) {
    this.tactics.push({ name, payoff });
  }
};
