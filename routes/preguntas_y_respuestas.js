const express = require('express');
const router = express.Router();
const preguntasRespuestas = require("../model/preguntas_y_respuestas")

router.get('/', async (req, res) => {
    try {
      const items = await preguntasRespuestas.find();
      res.json(items);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  router.post('/', async (req, res) => {

    const newItem = new preguntasRespuestas({
      enunciado: req.body.enunciado
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
      const item = await preguntasRespuestas.findByIdAndUpdate(req.params.id, {
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
      const item = await preguntasRespuestas.findByIdAndDelete(req.params.id);
  
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