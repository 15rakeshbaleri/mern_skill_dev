const Item = require("../model/items");
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getbyid = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
