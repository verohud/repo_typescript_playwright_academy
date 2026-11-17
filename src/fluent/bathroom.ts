import { EntryHall } from "./entry_hall.ts";

export class Bathroom {
  readonly visitorName: string;

  constructor(visitorName: string) {
    this.visitorName = visitorName;
    console.log(`Navstevnik ${visitorName} vstoupil na toaletu`);
  }

  returnToEntryHall() {
    console.log(`Navstevnik ${this.visitorName} se vraci do vstupni haly`);
    return new EntryHall(this.visitorName);
  }

  washHands() {
    console.log(`Navstevnik ${this.visitorName} si myje ruce`);
    return this;
  }
}
