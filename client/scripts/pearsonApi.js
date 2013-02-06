Recipes = new Meteor.Collection('recipes');
var resultRecipes = [];
var getResultRecipes = function(query){
  var ingredientFilter = _.map(query.restrictions, function(truthiness, restriction){
    return truthiness ? restrictionHash[restriction] : [];
  });
  ingredientFilter = _.uniq(_.flatten(ingredientFilter));
  var recipes = Recipes.find({}).fetch();
  recipes.forEach(function(result){
    if(_.intersection(result.ingredients, ingredientFilter).length === 0){
      resultRecipes.push(result);
    }
  });
  return resultRecipes;
  Meteor.call('showResults');
};
