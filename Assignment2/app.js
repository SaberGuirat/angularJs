(function () {
  "use strict";
  angular
    .module("myApp", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getItems();
    list.buy = function (itemName, quantity, itemIndex) {
      try {
        ShoppingListCheckOffService.buy(itemName, quantity, itemIndex);
      } catch (error) {
        list.error = error.message;
      }
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;

    list.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var items = [
      { name: "cookies", quantity: 10 },
      { name: "Milks", quantity: 2 },
      { name: "coffe", quantity: 1 },
      { name: "cheese", quantity: 1 },
      { name: "Yogurts", quantity: 4 },
    ];

    var bought_items = [];

    service.buy = function (itemName, quantity, itemIndex) {
      var item = {
        name: itemName,
        quantity: quantity,
      };
      items.splice(itemIndex, 1);
      bought_items.push(item);
      if (items.length === 0) {
        throw new Error("Everything is bought!");
      }
    };

    service.getItems = function () {
      return items;
    };

    service.getBoughtItems = function () {
      return bought_items;
    };
  }
})();
