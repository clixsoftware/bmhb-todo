define(
	['marionette',
	'plugins/backbone.marionette.handlebars',
	'templates',
	'views/TodoItem'
	
	], 
	function (Marionette, MarionetteHandlebars, templates, TodoItem) {
		"use strict";
		
		return Marionette.CompositeView.extend({
			tagName: "table",
			className: "table",
			itemView : TodoItem,
			template : templates.todoList,

			ui : {
				toggle : '#toggle-all'
			},

			events : {
				'click #toggle-all' : 'onToggleAllClick'
			},

			initialize : function() {
				this.bindTo(this.collection, 'all', this.updateToggleCheckbox, this);
			},

			onRender : function() {
				this.updateToggleCheckbox();
			},

			updateToggleCheckbox : function() {
				function reduceCompleted(left, right) { return left && right.get('completed'); }
				var allCompleted = this.collection.reduce(reduceCompleted,true);
				this.ui.toggle.prop('checked', allCompleted);
			},

			onToggleAllClick : function(evt) {
				var isChecked = evt.currentTarget.checked;
				this.collection.each(function(todo){
				todo.save({'completed': isChecked});
			});
		}
	});
});