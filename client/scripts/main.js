var searchTerms;
if (Meteor.isClient) {
	Meteor.Router.add({
    '/': 'index',
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
    return ["American", "American: Cajun and Creole", "Chinese", "Italian"]
  }
}
