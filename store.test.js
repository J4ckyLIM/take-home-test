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
  it("should have discount drop to 0 after expiration date", () => {
    expect(
      new Store([new DiscountOffer("Vinted", 0, 30)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Vinted", 0, 0)]);
  });
  it("should have discount decreased by 2 and expiresIn decreased by 1", () => {
    expect(
      new Store([new DiscountOffer("BackMarket", 15, 42)]).updateDiscounts()
    ).toEqual([new DiscountOffer("BackMarket", 14, 40)]);
  });
  it("should have discount increased by 2 after expiration date", () => {
    expect(
      new Store([new DiscountOffer("Naturalia", 0, 16)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Naturalia", 0, 18)]);
  });
  it("should have discount increased by 1 and expiresIn decreased by 1", () => {
    expect(
      new Store([new DiscountOffer("Naturalia", 30, 16)]).updateDiscounts()
    ).toEqual([new DiscountOffer("Naturalia", 29, 17)]);
  });
  it("should decrease the discount twice as fast after expiration date", () => {
    expect(
      new Store([new DiscountOffer("bidule", 0, 15)]).updateDiscounts()
    ).toEqual([new DiscountOffer("bidule", 0, 13)]);
  });
  it("should decrease the expiresIn but the discount can't go higher than 50", () => {
    expect(new Store([new DiscountOffer("bidule", 0, 60)])).toEqual([
      new DiscountOffer("bidule", 0, 50)
    ]);
  });
});
