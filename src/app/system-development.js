System.config({
    map: {
        zone: 'zone.js'
    },
    packages: {
        '@angular/common': {
            main: 'bundles/common.umd.js'
        },
        '@angular/compiler': {
            main: 'bundles/compiler.umd.js'
        },
        '@angular/core': {
            main: 'bundles/core.umd.js'
        },
        '@angular/platform-browser': {
            main: 'bundles/platform-browser.umd.js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'bundles/platform-browser-dynamic.umd.js'
        },
        '@angular/router': {
            main: 'bundles/router.umd.js'
        },
        'app': {
            defaultExtension: 'js'
        },
        'reflect-metadata': {
            main: 'Reflect.js',
            map: {
                crypto: '@empty'
            }
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'zone': {
            main: 'dist/zone.js'
        }
    }
});

System.import('app/main');
