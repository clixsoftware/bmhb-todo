define([
	// Libraries.
	"backbone",
	"marionette",
	"models/TodoItem",
	"plugins/backbone-localstorage"
],
function(Backbone, Marionette, TodoItem) {
	console.log('collections.js');

	function isCompleted(todo) { return todo.get('completed'); }
	
	// set up the app instance
	TodoList = Backbone.Collection.extend({
		model: TodoItem,
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		getCompleted: function() {
      		return this.filter(isCompleted);
	    },
	    getActive: function() {
	      return this.reject(isCompleted);
	    },
	    comparator: function( todo ) {
	      return todo.get('created');
	    }
	});

	return TodoList;

});
