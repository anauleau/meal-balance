var getDataByCuisine = function(cuisine){
  console.log(cuisine)
  var cuisineAPI = "https://api.pearson.com/kitchen-manager/v1/cuisines/"+cuisine+".json?apikey=2e02a8b595c1cd7e9a53cc39d1b8ce21"
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    url: cuisineAPI,
    success: function(data){
      console.log(data);
    }
  });
}
