module.exports = class Store {
  /**
   * @param {DiscountOffer[]} discountOffers - Array of DiscountOffer object
   */
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  /**
   * Calculates the discount rate of a discount offer
   * Depending on their property
   */
  updateDiscounts() {
    for (var i = 0; i < this.discountOffers.length; i++) {
      this.discountOffers[i];
      switch (this.discountOffers[i].partnerName) {
        case "Naturalia":
          if (this.discountOffers[i].expiresIn > 0) {
            this.discountOffers[i].updateDiscount(1);
          }
          // Case when expiration date has passed
          else {
            this.discountOffers[i].updateDiscount(2);
          }
          break;
        case "Vinted":
          break;
        case "Ilek":
          break;
        case "BackMarket":
          break;
        default:
          if (this.discountOffers[i].expiresIn > 0) {
            this.discountOffers[i].updateDiscount(-1);
          }
          // Case when expiration date has passed
          else {
            this.discountOffers[i].updateDiscount(-2);
          }
          break;
      }
    }

    return this.discountOffers;
  }
};
