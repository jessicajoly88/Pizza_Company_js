describe('Pizza', function () {
  it("creates a new pizza", function () {
  	var testPizza = new Pizza("Medium","Topping");
  	expect(testPizza.dimension).to.equal("Medium");
  	expect(testPizza.topping).to.equal(2);
  });

  it("returns base price of a small pizza", function () {
    var testPizza = new Pizza("Small");
    expect(testPizza.smallDimension()).to.equal(5);
  });

  it("returns base price of a medium pizza", function () {
    var testPizza = new Pizza("Medium");
    expect(testPizza.mediumDimension()).to.equal(8);
  });

  it("returns base price of a large pizza", function () {
    var testPizza = new Pizza("Large");
    expect(testPizza.largeDimension()).to.equal(12);
  });
  

});
