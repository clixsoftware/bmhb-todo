define([
	// Application.
	"app",
	"marionette"
],
function(app, Marionette) {
	console.log('router.js');

	// Defining the application router, you can attach sub routers here.
	var Router = Marionette.AppRouter.extend({
		routes: {
			"": "index"
		},

		index: function() {
			console.log('router - index!');
		}
	});

	return new Router();

});
