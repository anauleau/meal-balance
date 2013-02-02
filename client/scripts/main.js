var searchTerms;
if (Meteor.isClient) {
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

}
