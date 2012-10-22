define(
    ['marionette'], 
    function(Marionette){
        Marionette.Renderer.render = function (template, data) {
        console.log(['render!', data]);
        return template(_.extend(data, template.data), template.options);
    };

    return Marionette;
});