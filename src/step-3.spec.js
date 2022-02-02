import { VendingMachine } from "./vending-machine";

describe("Vending Machine Step 3", () => {
  it("initializes", () => {
    expect(new VendingMachine(1, 2)).toBeDefined();
  });
});
