const cuisine = ['african', 'american', 'british', 'cajun', 'caribbean', 'chinese', 'eastern european', 'european',
'french', 'german', 'greek', 'indian', 'irish', 'italian', 'japanese', 'jeweish', 'korean', 'latin american', 'mediterranean', 'mexican', 'meddle eastern', 'nordic', 'southern', 'spanish', 'thai', 'vietnamese'],
 type = ['main course', 'side dish', 'dessert', 'appetizer', 'salad', 'bread', 'breakfast', 'soup', 'beverage', 'sauce', 'marinade', 'fingerfood', 'snack', 'drink'],
 diet = ['gluten free', 'ketogenic', 'vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP','Whole30'
],
 intolerances = ['dairy', 'egg', 'gluten', 'grain', 'peanut', 'seafood', 'sesame', 'shellfish', 'soy', 'sulfite', 'tree Nut', 'wheat'];

 const baseURL = 'https://api.spoonacular.com/recipes',
 apiKey = 'ACA DEBE IR TU API KEY';

 export default {
    cuisine,
    type,
    diet,
    intolerances,
    baseURL,
    apiKey
 }
