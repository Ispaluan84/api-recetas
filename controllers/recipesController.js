const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        next(err);
    }
};

exports.getRecipeById = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            const error = new Error('Receta no encontrada'); 
            error.status = 404;
            return next(error);
        } 
        res.json(recipe)
    } catch (err) {
        next(err);
    }
};

exports.createRecipe = async (req, res, next) => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        next(err);
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updated) {
            const error = new Error('Receta no encomtrada');
            error.status = 404;
        }
        res.json(updated);
   } catch (err) {
        next(err)
   }
};

exports.deleteRecipe = async (req, res, next) => {
    try {
        const deleted = await Recipe.findByIdAndDelete(req.params.id);
        if (!deleted) {
            const error = new Error('Receta no encontrada');
            error.status = 404;
            return next(error);
        }
    } catch (error) {
        next(err);
    }
};