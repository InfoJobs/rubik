module.exports.register = function(handlebars) {

    /**
    *
    * @usage: {{isModifiers markup}}
    *         {{markup}}
    *         {{/isModifiers}}
    */
    handlebars.registerHelper('isModifiers', function(string, options) {

        if( string.indexOf('{{modifier_class}}') > -1 ) {
            return options.fn(this).replace('class=&quot;&quot;','class=&quot;{{modifier_class}}&quot;');
        }

        return options.fn(this);
    });

};
