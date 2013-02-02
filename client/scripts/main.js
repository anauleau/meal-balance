if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'index',
    '*': '404'
  });
  Template.basicForm.events({
    'click #submit' : function(){
      var searchFields = ["search", "cuisine", "diet"];

      var searchTerms = {};
      //TODO: refactor and use reduce instead of for loop
      for (var i = 0; i < searchFields.length; i++){
        searchTerms[searchFields[i]] = $("#" + searchFields[i]).val();
      }
    }
  });

  Template.basicForm.cuisine = function(){
    return ["American", "American: Cajun and Creole", "Chinese", "Italian"]
  }
}
