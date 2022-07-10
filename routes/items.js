const { Router } = require("express");
const router = Router();

const itemData = require('../dataInterface/items');
const currentItem = itemData.getById;

router.get("/", (req, res, next) => {
  res.status(200).send(itemData.getAll())
});

router.get("/:id", (req, res, next) => {
  if (currentItem(req.params.id)) {
    res.json(itemData.getById(req.params.id))
  }
  else (!currentItem(req.params.id))
  res.status(404).send({ msg: `No item with the id of ${req.params.id}.` })
});

router.post("/", (req, res, next) => {
  itemData.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  if (currentItem(req.params.id)) {
    res.status(200).send(itemData.updateById(req.params.id, req.body));
  }
  else (!currentItem(req.params.id))
  res.status(200).send({ msg: `No item with the id of ${req.params.id}, creating item.` })
});

router.delete("/:id", (req, res, next) => {
  if (currentItem(req.params.id)) {
    res.status(200).send(itemData.deleteById(req.params.id));
  }
  else (!currentItem(req.params.id))
  res.status(404).send({ msg: `No item with the id of ${req.params.id}.` })
});

module.exports = router;
