/*!
loadJS: load a JS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
(Based on http://goo.gl/REQGQ by Paul Irish).
Licensed MIT
https://github.com/filamentgroup/loadJS
*/
function loadJS( src, callback ){
    "use strict";
    var ref = window.document.getElementsByTagName( "script" )[ 0 ];
    var script = window.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );

    if (callback && typeof(callback) === "function") {
        script.onload = callback;
    }

    return script;
}
