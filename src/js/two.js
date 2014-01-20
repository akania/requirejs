define(['foo', 'module'], function (foo, module) {
    console.log('two loaded, config.color is ', module.config().color);
});