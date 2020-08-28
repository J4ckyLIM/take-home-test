module.exports = class DiscountOffer {
  /**
   * @param {string} partnerName - Name of the partner
   * @param {number} expiresIn - Number of date before it expires
   * @param {number} discountRateInPercent - Value in percent that correspond to the discount rate
   */
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    if (discountRateInPercent >= 50) {
      discountRateInPercent = 50;
    }
    this.discountInPercent = discountRateInPercent;
  }

  /**
   * Update the discount rate given the value in parameter
   * And decrease the expiresIn value by 1 every day (unless it is already at 0)
   * @param {number} value - Value to add or retrieve to the property
   * @param {boolean} expireDecrease - True if expiresIn property can decrease
   */
  updateDiscount(value, expireDecrease = true) {
    if (this.expiresIn > 0 && expireDecrease) {
      this.expiresIn = this.expiresIn - 1; // ExpiresIn property decrease every day
    }
    // DiscountInPercent can't excess 50
    if (this.discountInPercent + value >= 50 || this.discountInPercent >= 50) {
      this.discountInPercent = 50;
    } else {
      // DiscountInPercent can't be lower than 0
      if (this.discountInPercent + value <= 0) {
        this.discountInPercent = 0;
      } else {
        this.discountInPercent = this.discountInPercent + value;
      }
    }
  }
};
