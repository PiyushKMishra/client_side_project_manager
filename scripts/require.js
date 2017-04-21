require.config({
  paths: {
    'bootstrap':'./bower_components/bootstrap/dist/js/bootstrap',
    'jquery':'./bower_components/jquery/dist/jquery',
    'jsgrid':'./bower_components/jsgrid/dist/jsgrid',
    'knockout':'./bower_components/knockout/dist/knockout',
    'lodash': './bower_components/lodash/lodash',
    'select2': './bower_components/select2/dist/select2',
    'styles': './styles',
    'templates': './templates'
  },
  shim: {
        'lodash': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'select2': {
            deps: ['jquery']
        }
    },
    deps: ['jquery','bootstrap'],
    map: {
        '*': {}
    }
});
