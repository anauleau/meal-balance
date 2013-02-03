 var getDataByCuisine = function(filter){
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://api.pearson.com/kitchen-manager/v1/recipes.json?limit=50&apikey=3e8c8773334c91e0614872759ec4f303",
    success: function(data){
      var ingredientFilter = _.map(filter.diet, function(eachDiet){
        return eachDiet;
      });
      ingredientFilter = _.uniq(_.flatten(ingredientFilter));
      getResultRecipes(data.results, ingredientFilter);
    }
  });
}

var resultRecipes = [];
var getResultRecipes = function(resultArray, dietArray){
  _.each(resultArray, function(eachResult){
    if(_.intersection(eachResult.ingredients, dietArray).length === 0){
      resultRecipes.push(eachResult);
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: eachResult.url,
        success: function(data){
          eachResult["directions"] = data.directions;
        }
      });
    }
  });
  console.log(resultRecipes);
};
