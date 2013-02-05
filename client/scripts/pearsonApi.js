var getDataByCuisine = function(filter){
  var cuisineAPI = "https://api.pearson.com/kitchen-manager/v1/recipes.json?ingredients-any="+filter.keyWord+"&apikey=3e8c8773334c91e0614872759ec4f303";
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: cuisineAPI,
    success: function(data){
      var ingredientFilter = _.map(filter.restrictions, function(b, eachDiet){
        return b ? restrictionHash[eachDiet] : [];
      });
      ingredientFilter = _.uniq(_.flatten(ingredientFilter));
      getResultRecipes(data.results, ingredientFilter);
    }
  });
};

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
          eachResult["recipeName"] = eachResult.name
          eachResult["directions"] = data.directions;
        }
      });
    }
  });
  console.log(resultRecipes);
  Meteor.call('showResults');
};
