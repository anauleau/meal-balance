var getDataByCuisine = function(filter){
  var cuisineAPI = "https://api.pearson.com/kitchen-manager/v1/recipes.json?ingredients-any=butter&cuisine=american&apikey=3e8c8773334c91e0614872759ec4f303"
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: cuisineAPI,
    success: function(data){
      getCuisineArray(data.results, ["eggs", "milk", "apple"]);
    }
  });
}

var returnInfo = [];
var getCuisineArray = function(data, dietArray){
  _.each(data, function(eachMenu){
    if (_.intersection(eachMenu.ingredients, dietArray).length === 0){
      returnInfo.push(eachMenu);
    }
  });
  console.log(returnInfo);
};

// Template.recipe.name = functi({
//   .name
// }

//directions come as an array of strings

