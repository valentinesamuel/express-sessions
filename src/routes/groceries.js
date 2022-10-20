const { Router } = require("express");

const router = Router();

const groceriesList = [
  { item: "milk", quantity: 2 },
  { item: "bread", quantity: 1 },
  { item: "pop-tarts", quantity: 1 }
];

router.get("/", (req, res) => {
  res.send(groceriesList);
});

router.get("/:item", (req, res) => {
  const { item } = res.params;
  const groceryItem = groceriesList.find((g) => g.item === item);
  res.send(groceryItem);
});

router.post("/", (req, res) => {
  groceriesList.push(req.body);
  res.send(201);
});

module.exports = router;
