module.exports.register = function(handlebars) {


  /**
   * Test if markup have caster class. e.g:
   *
   * {{#isntCasper markup}}
   *    {{markup}}
   * {{/isntCasper}}
   */
    handlebars.registerHelper('isntCasper', function(string, options) {
        if(string.indexOf('casper') > -1) {
            return options.inverse(this);
        }
        return options.fn(this);
    });

};
