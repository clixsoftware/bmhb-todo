define([
	// Libraries.
	"backbone",
	"marionette",
	"collections/TodoList",
	"views/TodoList",
	"views/Input",
	"views/Footer"
],
function(Backbone, Marionette, TodoList, TodoListView, InputView, FooterView) {
	console.log('app.js');

	// set up the app instance
	var App = new Marionette.Application(),
		todoList = new TodoList();

	// configuration, setting up regions, etc ...
	App.addRegions({
	 	input: "#input",
	 	main: "#main",
	 	footer: "#footer"
	});

	App.addInitializer(function(){
		var viewOptions = {
			collection : todoList
		};

		App.input.show(new InputView(viewOptions));
		App.main.show(new TodoListView(viewOptions));
		App.footer.show(new FooterView(viewOptions));

		todoList.fetch();
	});

	App.on("initialize:after", function() {
        console.log('initialize:after');
        Backbone.history.start();
    });

	// export the app from this module
	return App;

});
