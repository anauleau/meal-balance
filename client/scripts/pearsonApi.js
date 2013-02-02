$.ajax({
  type: "GET", 
  dataType: "jsonp",
  url: "https://api.pearson.com/kitchen-manager/v1/cuisines/American.json?apikey=2e02a8b595c1cd7e9a53cc39d1b8ce21",
  success: function(data){console.log(data);}
});
