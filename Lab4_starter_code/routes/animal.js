// Author: Shah Bano
// Date: 18th April 2024
// Description: Lab 4

const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');


router.get('/', animalController.getAllAnimals);


router.get('/add', animalController.getAddAnimalForm);

router.post('/add', animalController.addAnimal);


router.get('/edit/:id', animalController.getEditAnimalForm);

router.post('/update/:id', animalController.updateAnimal);


router.post('/delete/:id', animalController.deleteAnimal);

module.exports = router;
