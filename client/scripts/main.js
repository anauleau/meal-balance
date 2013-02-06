var searchTerms;
var i = 0;

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
        performSearch(e, template);
      }
    },
    'click #submit' : function(e, template) {
      performSearch(e, template);
    }
  });

  var performSearch = function(e, template){
    e.preventDefault();
    searchReq();
    // Show a loading menu and hide it just before the redirect
    $('#loadingModal').modal('show');
    setTimeout(function(){
      $('#loadingModal').modal('hide');
    }, 3000);
    // Redirect to search results
    setTimeout(function(){
      Meteor.Router.to('/recipes');
    }, 3000);
  };

  var searchReq = function(){
    var query = {
      restrictions: {
        // Give 'em a default value to fall back on in case it's undefined
        lactoseDiet    : $('#lactoseDiet').is(':checked')    || false,
        vegetarianDiet : $('#vegetarianDiet').is(':checked') || false,
        veganDiet      : $('#veganDiet').is(':checked')      || false,
        celiacDiet     : $('#celiacDiet').is(':checked')     || false
      }
    };
    getResultRecipes(query);
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


  Template.recipe.recipeName = function(){
    i = Math.floor(Math.random()*(resultRecipes.length));
    return resultRecipes[i]["name"];
  };

  Template.recipe.ingredients = function(){
    return resultRecipes[i]["ingredients"];
  };

  Template.recipe.directions = function(){
    return resultRecipes[i]["directions"];
  };
}
