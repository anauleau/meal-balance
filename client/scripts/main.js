var searchTerms;
if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'index',
    '/settings' : 'accountSettings',
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
    }
  });

  var searchReq = function(){
    var query = {
      keyWord: $('#search').val()
    };
    getDataByCuisine(query);
  };

  Template.basicForm.cuisine = function(){
    return ["African",
            "American",
            "American: Cajun and Creole",
            "American: California",
            "American: Hawaii",
            "American: Mid-Atlantic",
            "American: Midwest",
            "American: Mountain States",
            "American: New England",
            "American: Pacific Northwest"];
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
}
