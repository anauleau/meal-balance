var getDataByCuisine = function(filter){
  var cuisineAPI = "https://api.pearson.com/kitchen-manager/v1/recipes.json?ingredients-any="+filter.keyWord+"&apikey=3e8c8773334c91e0614872759ec4f303";
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: cuisineAPI,
    success: function(data){
      console.log(data);
      filterArray = ["it", "should", "be", "user","'s","input"];
      getResultRecipes(data.results, filterArray);
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
          eachResult["directions"] = data.directions;
        }
      });
    }
  });
  console.log(resultRecipes);
};
