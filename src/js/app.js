requirejs.config({

    // the root path to use for all module lookups
    // http://requirejs.org/docs/api.html#config-baseUrl
    baseUrl: '/src/js',

    // path mappings for module names not found directly under baseUrl
    // http://requirejs.org/docs/api.html#config-paths
    paths: {
        vendor: '/src/vendor/require'
    },
    // allow to define non AMD modules by specyfing a name, dependencies and a path to the file
    // http://requirejs.org/docs/api.html#config-shim
    shim : {
        'backbone': {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
    },
    // For the given module prefix, instead of loading the module with the given ID, substitute a different module ID.
    // http://requirejs.org/docs/api.html#config-map
    map: {
        // whenever module one will request module foo , map/new will be loaded
        'one': {
            'foo': 'map/new'
        },
        // whenever module two will request module foo , map/old will be loaded
        'two': {
            'foo': 'map/old'
        }
    },
    // set config that can be read via module.config property in every module
    // http://requirejs.org/docs/api.html#config-moduleconfig
    config: {
        'main': {
            size: 'large'
        },
        'two': {
            color: 'blue'
        },
        'three': {
            width: 'long'
        }
    },
    //bundles: {
    //    'primary': ['1', '2', '3']
    //}

    // additionall param that will be added to every script that is loaded by require, can be
    // used for example to bust through the cache
    // http://requirejs.org/docs/api.html#config-urlArgs
    urlArgs: "bust=" +  (new Date()).getTime()
});

// Start the main app logic.
requirejs(['main'],
function   (main) {
    console.log('all loaded');
});