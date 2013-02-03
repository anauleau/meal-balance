var searchTerms;
if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'index',
    '/settings' : 'accountSettings',
    '/recipes' : 'recipe',
    '*': '404'
  });

  Template.basicForm.events({
    'keypress #search' : function(e, template) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode === 13) {
        e.preventDefault();
        searchReq();
      }
    },
    'click #submit' : function(e, template) {
      e.preventDefault();
      searchReq();
      setTimeout(function(){Meteor.Router.to('/recipes')}, 5000);
    }
  });

  var searchReq = function(){
    var query = {
      keyWord: $('#search').val(),
      restrictions: {
        // Give 'em a default value to fall back on in case it's undefined
        lactoseDiet    : $('#lactoseDiet').is(':checked')    || false,
        vegetarianDiet : $('#vegetarianDiet').is(':checked') || false,
        veganDiet      : $('#veganDiet').is(':checked')      || false,
        celiacDiet     : $('#celiacDiet').is(':checked')     || false
      }
    };
    getDataByCuisine(query);
  };

  Template.accountSettings.events({
    'click #save' : function(e, template) {
      e.preventDefault();
      // TODO: save the checked selections
    }
  });

  Template.accountSettings.dietPrefs = function(){
    return ['Vegan',
            'Vegetarian',
            'Celiac',
            'Pescetarian',
            'Kosher',
            'Halaal',
            'Lactose Intolerant'];
  };

  // Template.showableRecipe.showRecipe = function(){
  //   return true;
  // };

  Template.recipe.name = function(){
    for (var i = 0; i < resultRecipes.length; i++)
    console.log(resultRecipes[i].name);
  }

  Template.recipe.ingredients = function(){
    for (var i = 0; i < resultRecipes.length; i++)
    return resultRecipes[i].ingredients;
  }

  Template.recipe.directions = function(){
    for (var i = 0; i < resultRecipes.length; i++)
    return resultRecipes[i].directions;
  }
}
