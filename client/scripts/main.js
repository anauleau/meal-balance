var searchTerms;
if (Meteor.isClient) {
	Meteor.Router.add({
    '/': 'index',
    '/settings' : 'accountSettings',
    '*': '404'
  });

	Template.basicForm.events({
	  'click #submit' : function(e){
		  e.preventDefault();
		  searchTerms = {
			  "keyWord": undefined,
			  "cuisine": undefined,
			  "diet": {}
		  };

		  for (key in searchTerms){
			  if($("#" + key).val()){
			  	searchTerms[key] = $("#"+key).val();
			  }
		  }
		  getDataByCuisine(searchTerms.cuisine);
	  }
	});

  Template.basicForm.cuisine = function(){
    return ["American",
            "American: Cajun and Creole",
            "Italian"];
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
