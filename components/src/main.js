requirejs.config({
    paths: {
        'jquery': '../node_modules/jquery'
    },
});

define(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});
