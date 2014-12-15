
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/app',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'Hammer':'../vendor/hammerjs/hammer',
        'angular': '../vendor/angular/angular',
        'angular-animate':'../vendor/angular-animate/angular-animate',
        'angular-aria':'../vendor/angular-aria/angular-aria',
        'angular-material':'../vendor/angular-material/angular-material'

    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate':['angular'],
        'angular-aria'   :['angular'],
        'angular-material':['angular','Hammer']
    },
       // kick start application
    // deps: ['angular' ,'angular-animate','angular-aria','angular-material','./main']

});

require([
    'angular' ,
    'angular-animate',
    'angular-aria',
    'angular-material'
    ],function(){
    require(['main']);
})