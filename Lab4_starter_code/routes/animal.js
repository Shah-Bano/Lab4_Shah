// Author: Shah Bano
// Date: 18th April 2024
// Description: Lab 4

const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// GET route to display all animals
router.get('/', animalController.getAllAnimals);

// GET route to display the form for adding a new animal
router.get('/add', animalController.getAddAnimalForm);

// POST route to add a new animal
router.post('/add', animalController.addAnimal);

// GET route to display the form for editing a specific animal
router.get('/edit/:id', animalController.getEditAnimalForm);

// POST route to update an animal's details
router.post('/update/:id', animalController.updateAnimal);

// POST route to delete an animal
router.post('/delete/:id', animalController.deleteAnimal);

module.exports = router;
