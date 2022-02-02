import { VendingMachine } from "./vending-machine";

describe("Vending Machine Step 1", () => {
  const rows = Math.floor(Math.random() * 10);
  const columns = Math.floor(Math.random() * 10);
  const machine = new VendingMachine(rows, columns);

  it("is defined", () => {
    expect(machine).toBeDefined();
  });

  describe("dimensions", () => {
    it("has the correct number of rows", () => {
      expect(machine.rows).toEqual(rows);
    });

    it("has the correct number of columns", () => {
      expect(machine.columns).toEqual(columns);
    });

    it("has the correct capacity", () => {
      expect(machine.capacity).toEqual(rows + columns);
    });
  });

  describe("stock", () => {
    it("shows the correct value for in stock", () => {
      expect(machine.inStock).toEqual(0);
    });
  });
});
