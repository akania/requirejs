define(['require', 'module', 'one', 'two', 'three'], function (require, module, one, two) {
    console.log('main loaded , config.size is ', module.config().size);
    console.log('config.color is ', module.config().color, ' because it is set for module two');


    //require('one');
    //require('two');
    var three = require('three');
});