Handlebars.registerHelper('isMultiple', function(parameter, singular, plural) {
	if(parameter < 2) {
		return singular;
	} else {
		return plural;
	}
});