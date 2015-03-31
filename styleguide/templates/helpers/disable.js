module.exports.register = function(handlebars) {

    /**
    * Add `disabled` class for current link.
    *
    * @usage: {{isDisabled}}
    */
    handlebars.registerHelper('isDisabled', function(string, options) {

        if( string.indexOf('#disabled#') > -1 ) {
            return options.fn(this);
        }

        return options.inverse(this);
    });

};
