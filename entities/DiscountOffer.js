module.exports = class DiscountOffer {
  /**
   * @param {string} partnerName - Name of the partner
   * @param {number} expiresIn - Number of date before it expires
   * @param {number} discountRateInPercent - Value in percent that correspond to the discount rate
   */
  constructor(partnerName, expiresIn, discountRateInPercent) {
    this.partnerName = partnerName;
    this.expiresIn = expiresIn;
    this.discountInPercent = discountRateInPercent;
  }

  /**
   * Update any property with the given value
   * @param {string} propertyName - Name of the property to update
   * @param {number} value - Value to add or retrieve to the property
   */
  updateProperty(propertyName, value) {
    this[propertyName] = this[propertyName] + value;
  }
};
