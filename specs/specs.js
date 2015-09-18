describe('Pizza', function () {
  it("creates a new pizza", function () {
  	var testPizza = new Pizza("Medium");
  	expect(testPizza.dimension).to.equal("Medium");
  	expect(testPizza.toppings).to.eql([]);
  });

});
