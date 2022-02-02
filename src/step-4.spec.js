import { VendorMachine } from "./vending-machine";

describe("Vending Machine Step 4", () => {
  it("initializes", () => {
    expect(new VendorMachine(1, 2)).toBeDefined();
  });
});
