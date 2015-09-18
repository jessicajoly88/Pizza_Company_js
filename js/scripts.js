function Pizza(dimension) {
  this.dimension = dimension;
  this.toppings = [];
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