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
      if (
        this.discountOffers[i].partnerName != "Naturalia" &&
        this.discountOffers[i].partnerName != "Vinted"
      ) {
        if (this.discountOffers[i].discountInPercent > 0) {
          if (this.discountOffers[i].partnerName != "Ilek") {
            this.discountOffers[i].updateProperty("discountInPercent", -1);
          }
        }
      } else {
        if (this.discountOffers[i].discountInPercent < 50) {
          this.discountOffers[i].updateProperty("discountInPercent", 1);
          if (this.discountOffers[i].partnerName == "Vinted") {
            if (this.discountOffers[i].expiresIn < 11) {
              if (this.discountOffers[i].discountInPercent < 50) {
                this.discountOffers[i].updateProperty("discountInPercent", 1);
              }
            }
            if (this.discountOffers[i].expiresIn < 6) {
              if (this.discountOffers[i].discountInPercent < 50) {
                this.discountOffers[i].updateProperty("discountInPercent", 1);
              }
            }
          }
        }
      }
      if (this.discountOffers[i].partnerName != "Ilek") {
        this.discountOffers[i].updateProperty("expiresIn", -1);
      }
      // Expiration date passed
      if (this.discountOffers[i].expiresIn < 0) {
        if (this.discountOffers[i].partnerName != "Naturalia") {
          if (this.discountOffers[i].partnerName != "Vinted") {
            if (this.discountOffers[i].discountInPercent > 0) {
              if (this.discountOffers[i].partnerName != "Ilek") {
                this.discountOffers[i].updateProperty("discountInPercent", -2);
              }
            }
          } else {
            // Case Vinted
            // Discount is set to 0
            this.discountOffers[i].updateProperty(
              "discountInPercent",
              -this.discountOffers[i].discountInPercent
            );
          }
        } else {
          // Case Naturalia
          if (this.discountOffers[i].discountInPercent < 50) {
            this.discountOffers[i].updateProperty("discountInPercent", 2);
          }
        }
      }
    }

    return this.discountOffers;
  }
};
