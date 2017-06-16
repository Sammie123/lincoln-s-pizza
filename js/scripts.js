// business logic
function Pizza (size, sauce, topping) {
  this.pizzaSize1 = size;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.customerPizza = function() {
  return "Size:" + " " + this.pizzaSize1 + " " + "<br>" + "Sauce(s):" + " " + this.sauce + " " + "<br>" + "Topping(s):" + " " + this.topping + " " + "<br>";
};

function Price (price) {
  this.price = price;
}

Price.prototype.totalPizzaCost = function () {
  return "$" + " " + this.price * 1.10;
}
// interface logic

$(document).ready(function() {
  $("form.totalForm").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=size]:checked").val();

    var pizzaSauce = [];
    $("input:checkbox[name=pizzaSauce]:checked").each(function() {
      var userResponse1 = $(this).val();
      pizzaSauce.push(userResponse1);
    });

    var pizzaTopping = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var userResponse2 = $(this).val();
      pizzaTopping.push(userResponse2);
    });

    var myPizza = new Pizza(pizzaSize, pizzaSauce, pizzaTopping);
    myPizza.customerPizza();

    $("#finalOrder").append(myPizza.customerPizza());
    $("#finalOrder").show(myPizza.customerPizza());

    if (pizzaSize === "Small") {
      var pizzaSize = 10;
    } else if (pizzaSize === "Medium") {
      var pizzaSize = 15;
    } else if (pizzaSize === "Large") {
      var pizzaSize = 20;
    }

    var cost = new Price(pizzaSize);
    cost.totalPizzaCost();

    $("#cost").append(cost.totalPizzaCost());
    $("#cost").show(cost.totalPizzaCost());
    $(".totalForm").hide();

  });
});
