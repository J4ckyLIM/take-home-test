const Store = require("./entities/Store");
const DiscountOffer = require("./entities/DiscountOffer");

describe("Store", () => {
  it("should decrease the discount and expiresIn", () => {
    expect(
      new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts()
    ).toEqual([new DiscountOffer("test", 1, 2)]);
  });
  it("should not modify any value", () => {
    expect(
      new Store([new DiscountOffer("Ilek", 12, 32)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Ilek", 12, 32)]);
  });
  it("should have discount increased by 3 and expiresIn decreased by 1", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 4, 25)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", 3, 28)]);
  });
  it("should have discount increased by 2 and expiresIn decreased by 1", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 8, 30)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", 7, 32)]);
  });
});
