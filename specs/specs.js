describe('Pizza', function () {
  it("creates a new pizza", function () {
  	var testPizza = new Pizza("Medium","Topping");
  	expect(testPizza.dimension).to.equal("Medium");
  	expect(testPizza.topping).to.equal(0);
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
  
  it("calculates price of total toppings", function () {
    var testPizza = new Pizza("Medium","Topping");
  	expect(testPizza.dimension).to.equal("Medium");
  	expect(testPizza.addTopping()).to.equal(2);	
  });
  
  it("returns total price of a pizza based on its dimension and total toppings", function () {
    var testPizza = new Pizza("Medium","Topping");
    expect(testPizza.dimension).to.equal("Medium");
  	expect(testPizza.smallDimension()).to.equal(5);	
  	expect(testPizza.addTopping()).to.equal(2);	
  	expect(testPizza.totalCost()).to.equal(7);	
  	expect(testPizza.totalPrice).to.equal(7);
  });
});

//describe('Order', function () {
  //it("creates a new order", function () {
  //  var testOrder = new Order(pizza);
    //expect(testOrder.pizza).to.equal("Pizza 1");
   //expect(testOrder.totalPrice).to.equal(7); 
  //});
//}); 
