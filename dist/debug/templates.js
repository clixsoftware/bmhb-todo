this['JST'] = this['JST'] || {};

this['JST']['app/templates/layouts/main.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div id="todoapp" class="container">\n  <div class="header">\n    <h1>Todos</h1>\n  </div>\n\n  <form class="form"></form>\n  <div class="list"></div>\n  <div class="stats"></div>\n</div>';
}
return __p;
};

this['JST']['app/templates/todo/form.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div id="create-todo">\n  <input id="new-todo" placeholder="What needs to be done?" type="text" />\n  <span class="ui-tooltip-top" style="display:none;">Press Enter to save this task</span>\n</div>\n\n<div id="todos">\n  <input class="check mark-all-done" type="checkbox"/>\n  <label for="check-all">Mark all as complete</label>\n</div>\n';
}
return __p;
};

this['JST']['app/templates/todo/item.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<!--<div class="todo {{#if done}}done{{/if}}">\n  <div class="display">\n    <input class="check" type="checkbox" {{#if done}}"checked=\'checked\'"{{/if}}>\n    <label class="todo-content">{{content}}</label>\n    <span class="todo-destroy"></span>\n  </div>\n  <div class="edit">\n    <input class="todo-input" type="text" value="{{content}}">\n  </div>\n</div>-->\n\n<a href="#">{{content}}</a>';
}
return __p;
};

this['JST']['app/templates/todo/stats.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<span class="todo-count">\n\t{{#if done}}\n\t\tAll done!\n\t{{else}}\n\t\t<span class="number">{{remaining}}</span>\n\t\t<span class="word">{{isMultiple done "item" "items"}}</span> left.\n\t{{/if}}\n</span>\n\n<span class="todo-clear">\n\t{{#if done}}\n  <a href="#">\n    Clear <span class="number-done">{{done}}</span>\n    completed <span class="word-done">{{isMultiple done "item" "items"}}</span>\n  </a>\n  {{/if}}\n</span>\n';
}
return __p;
};