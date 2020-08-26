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
          // Discount drops to 0 after the expiration date
          if (this.expiresIn === 0) {
            this.discountOffers.updateDiscount(-this.discountRateInPercent);
          } else {
            // Discount increases by 2 when there are 10 days or less
            if (this.expiresIn <= 10 && this.expiresIn > 5) {
              this.discountOffers.updateDiscount(2);
            }
            // Discount increases by 3 when there are 5 days or less
            if (this.expiresIn <= 5) {
              this.discountRateInPercent.updateDiscount(3);
            } else {
              this.discountOffers.updateDiscount(1);
            }
          }
          break;
        case "Ilek":
          // Ilek discount never expires nor decreases.
          this.discountOffers.updateDiscount(0, false);
          break;
        case "BackMarket":
          // Discounts decreases twice as fast as normal partners.
          this.discountOffers.updateDiscount(-2);
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
