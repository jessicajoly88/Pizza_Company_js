function Pizza(dimension,topping) {
  this.dimension = dimension;
  this.topping = 0;
  this.totalPrice = null;
}

Pizza.prototype.smallDimension = function () {
  return this.dimension = 5;
};

Pizza.prototype.mediumDimension = function () {
  return this.dimension = 8;
};

Pizza.prototype.largeDimension = function () {
  return this.dimension = 12;
};

Pizza.prototype.addTopping = function() {
  return this.topping += 2;
};

Pizza.prototype.totalCost = function() {
  return this.totalPrice = this.dimension + this.topping;
};
