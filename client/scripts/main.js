if (Meteor.isClient) {

	Template.basicForm.events({
	'click #submit' : function(){

		var searchFields = ["search", "cuisine", "diet"]

		var searchTerms = {};
	       //refactor and use reduce instead of for loop
	  for (var i = 0; i < fields.length; i++){
	  	searchTerms[fields[i]] = $("#" + fields[i]).val();
	  }

	}

	});

}
