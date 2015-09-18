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


$(document).ready(function() { 
  $("#pizza-price").hide();
  $("form.pizza-order").submit(function(event) {
    event.preventDefault();
    $("#pizza-price").show();

  
    var inputtedDimension =$("select#dimension").val();
  
    var newPizza = new Pizza("Dimension", 0);
    var inputtedToppingAmount =$(this).find("input.topping-number").val();
    var inputtedTopping =$("select#topping").val();

    if(inputtedDimension === "small" && inputtedTopping === "topping") {
  	  var basePrice = newPizza.smallDimension();
  	  var toppingAmount = parseInt(inputtedToppingAmount);
  	  var topping = newPizza.addTopping();
  	  var toppingTotal = topping * toppingAmount;
  	  var totalPizzaCost = basePrice + toppingTotal;	
  	  $("#pizza-price").text("Total Amount" + " $" + totalPizzaCost);
    }
    else if (inputtedDimension === "medium" && inputtedTopping === "topping") {
      var basePrice = newPizza.mediumDimension();
  	  var toppingAmount = parseInt(inputtedToppingAmount);
  	  var topping = newPizza.addTopping();
  	  var toppingTotal = topping * toppingAmount;
  	  var totalPizzaCost = basePrice + toppingTotal;
  	  $("#pizza-price").text("Total Amount" + " $" + totalPizzaCost);	 
    }
    else if (inputtedDimension === "large" && inputtedTopping === "topping") {
      var basePrice = newPizza.largeDimension();
  	  var toppingAmount = parseInt(inputtedToppingAmount);
  	  var topping = newPizza.addTopping();
  	  var toppingTotal = topping * toppingAmount;
  	  var totalPizzaCost = basePrice + toppingTotal;
      $("#pizza-price").text("Total Amount" + " $" + totalPizzaCost);	 
    } 
    $("input.topping-number").val("");  
  });  
});
