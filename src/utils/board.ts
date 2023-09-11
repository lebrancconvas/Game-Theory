import { Player } from "./player";

export class Board {
  players: Player[];

  constructor() {
    this.players = [];
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
};
