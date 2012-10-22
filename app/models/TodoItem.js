define([
	"backbone",
	"marionette",
	"plugins/backbone-localstorage"
],
function(Backbone, Marionette) {
	console.log('models.js');
	// set up the app instance
	
	var TodoItem = Backbone.Model.extend({
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		initialize : function() {
			if (this.isNew()) this.set('created', Date.now());
		},

		toggle  : function() {
			return this.set('completed', !this.isCompleted());
		},

		isCompleted: function() {
			return this.get('completed');
		}
	});

	return TodoItem;

});