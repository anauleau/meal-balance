var headerSetter = function(xhr) {
  xhr.setRequestHeader("X-Parse-REST-API-Key", "2e02a8b595c1cd7e9a53cc39d1b8ce21");
};

var cuisines = "American";
var dataByCuisine = "https://api.pearson.com/kitchen-manager/v1/cuisines/" + cuisines + ".json?apikey=2e02a8b595c1cd7e9a53cc39d1b8ce21";

$.ajax({
  type: "GET",
  url: dataByCuisine,
  beforeSend: headerSetter,
  contentType: 'application/json',
  success: function(data){
    console.log(data);
  }
});
