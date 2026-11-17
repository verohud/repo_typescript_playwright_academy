import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novak")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("How are you?")
  .askReceptionistQuestion("Kde je toaleta")
  .entryBathroom()
  .washHands();

async function main() {
  const visitor = new EntryHall("Jana Novakova");
  await visitor
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) =>
      entryHall.askReceptionistQuestion("Where is the bathroom?"),
    )
    .then((entryHall) => entryHall.entryBathroom())
    .then((bathroom) => bathroom.washHands())
    .then((bathroom) => bathroom.returnToEntryHall());
}

main();
