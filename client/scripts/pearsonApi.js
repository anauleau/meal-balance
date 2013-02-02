var getDataByCuisine = function(cuisine){
  var cuisineAPI = "https://api.pearson.com/kitchen-manager/v1/cuisines/"+cuisine+".json?apikey=2e02a8b595c1cd7e9a53cc39d1b8ce21"
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: cuisineAPI,
    success: function(data){
      getCuisineArray(data.recipes, ["eggs", "milk", "apple"]);
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
  return returnInfo;
}
