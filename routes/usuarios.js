const express = require('express');
const router = express.Router();
const usuarios = require("../model/usuarios")

router.get('/', async (req, res) => {
    try {
      const items = await usuarios.find();
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {

    const newItem = new usuarios({
      nombre: req.body.nombre,
      contrasenna: req.body.contrasenna
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
      const item = await usuarios.findByIdAndUpdate(req.params.id, {
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
      const item = await usuarios.findByIdAndDelete(req.params.id);
  
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