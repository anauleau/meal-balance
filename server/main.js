Recipes = new Meteor.Collection('recipes')
if (Meteor.isServer) {
  Meteor.startup(function(){
    if(Recipes.find().count() === 0){
      Meteor.http.call("get",
        "https://api.pearson.com/kitchen-manager/v1/recipes.json?limit=2300&apikey=3e8c8773334c91e0614872759ec4f303",
        function(e, r){
          if(e){ console.log(e) }
          _.each((JSON.parse(r.content)).results, function(result){
            Meteor.http.call("get",
              result.url,
              function(e, r){
                var detail = (JSON.parse(r.content));
                result["directions"] = detail.directions;
                result["nutrition"] = detail.nutritional_info;
                result["serve"] = detail.serves;
                Recipes.insert(result);
              }
            )
          });
        }
      );
    }
  });
}
