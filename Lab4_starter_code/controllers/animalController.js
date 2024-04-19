// Author: Shah Bano
// Date: 18th April 2024
// Description: Lab 4
const Animal = require('../models/Animal');

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.render('all-animals', { animals: animals });
    } catch (error) {
        console.error('Error fetching animals:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.getAddAnimalForm = (req, res) => {
    res.render('add-animal');
};


exports.addAnimal = async (req, res) => {
    try {
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.redirect('/animal');
    } catch (error) {
        console.error('Error adding new animal:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.getEditAnimalForm = async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        res.render('edit-animal', { animal: animal });
    } catch (error) {
        console.error('Error fetching animal for editing:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.updateAnimal = async (req, res) => {
    try {
        await Animal.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/animal');
    } catch (error) {
        console.error('Error updating animal:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.deleteAnimal = async (req, res) => {
    try {
        await Animal.findByIdAndRemove(req.params.id);
        res.redirect('/animal');
    } catch (error) {
        console.error('Error deleting animal:', error);
        res.status(500).send('Internal Server Error');
    }
};
