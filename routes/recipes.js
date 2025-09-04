const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');
const { recipeValidationRules, validate } = require('../middlewares/validateRecipe');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require("../middlewares/isAdmin");

router.get('/', recipesController.getAllRecipes);
router.get('/:id', recipesController.getRecipeById);
router.post('/', auth, recipeValidationRules, validate, recipesController.createRecipe);
router.put('/:id', auth, recipeValidationRules, validate, recipesController.updateRecipe);
router.delete('/:id', auth, isAdmin, recipesController.deleteRecipe);

module.exports = router;