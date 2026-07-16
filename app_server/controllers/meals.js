var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const mealsList = (req, res) => {
    res.render('meals', { title: "Travlr Getaways", activeMeals: true, meals });
};

module.exports = {
    mealsList
};
