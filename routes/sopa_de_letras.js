const express = require('express');
const router = express.Router();
const sopaDeLetras = require("../model/sopa_de_letras")

router.get('/', async (req, res) => {
    try {
      const items = await sopaDeLetras.find();
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {

    const newItem = new sopaDeLetras({
        enunciado: req.body.enunciado,
        formato: req.body.formato
    });
  
    try {
      const item = await newItem.save();
      res.status(201).json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const item = await sopaDeLetras.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true });
  
      if (!item) {
        return res.status(404).json({ msg: 'Item not found' });
      }
  
      res.status(201).json(item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const item = await sopaDeLetras.findByIdAndDelete(req.params.id);
  
      if (!item) {
        return res.status(404).json({ msg: 'Item not found' });
      }
  
      res.json({"Mensaje": "Item Eliminado Correctamente"});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;