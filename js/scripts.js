// business logic
function Pizza (size, sauce, topping) {
  this.pizzaSize1 = size;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.customerPizza = function() {
  return "Size:" + " " + this.pizzaSize1 + "<br>" + "Sauce:" + " " + this.sauce + "<br>" + "Topping:" + " " + this.topping + "<br>" ;
};

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

    alert(myPizza.customerPizza());
    console.log("hello");
    $("#finalOrder").show(myPizza.customerPizza());
    $("#finalOrder").append(myPizza.customerPizza());
  });
});
