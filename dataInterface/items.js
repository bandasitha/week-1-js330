const uuid = require('uuid');

module.exports = {};

module.exports.items = [{ id: '7', field: 'example' }];

module.exports.getAll = () => {
  return module.exports.items;
}

module.exports.getById = (itemId) => {
  const getItem = module.exports.items.find(idx => idx.id === itemId);
  return getItem;
}

module.exports.deleteById = async (itemId) => {
  const deleteId = module.exports.items.findIndex(idx => idx.id === itemId);
  return module.exports.items.splice(deleteId, 1)
}

module.exports.updateById = async (itemId, newObj) => {
  const updateItem = module.exports.items.find(idx => idx.id === itemId);
  if (updateItem) {
    updateItem.field = newObj.field;
    return updateItem;
  }
}

module.exports.create = async (item) => {
  const id = uuid.v4();
  const newItem = { ...item, id };
  module.exports.items.push(newItem);
  return newItem;
}