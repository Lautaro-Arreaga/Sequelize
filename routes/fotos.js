const express = require('express');
const router = express.Router();
const { Foto } = require('../models'); // Esto ya funcionará si el modelo se llama "Foto"

// GET /fotos/findAll/json
router.get('/findAll/json', async (req, res) => {
  try {
    const fotos = await Foto.findAll({
      attributes: { exclude: ['updatedAt'] }
    });
    res.json(fotos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /fotos/findAll/view
router.get('/findAll/view', async (req, res) => {
  try {
    const fotos = await Foto.findAll({
      attributes: { exclude: ['updatedAt'] }
    });
    res.render('fotos', { title: 'Fotos', arrFotos: fotos });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
