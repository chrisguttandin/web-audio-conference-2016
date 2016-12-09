'use strict';

module.exports = (config) => {

    config.set({

        angularCli: {
            config: './angular-cli.json',
            environment: 'dev'
        },

        basePath: '../../',

        files: [
            {
                pattern: './config/karma/test.ts',
                watched: false
            }
        ],

        frameworks: [
            'angular-cli',
            'jasmine'
        ],

        mime: {
            'text/x-typescript': [ 'ts', 'tsx' ]
        },

        plugins: [
            'angular-cli/plugins/karma',
            'karma-*'
        ],

        preprocessors: {
            './config/karma/test.ts': [ 'angular-cli' ]
        }

    });

    if (process.env.TRAVIS) {
        config.set({

            browserNoActivityTimeout: 120000,

            browsers: [
                'ChromeSauceLabs'
            ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11'
                }
            },

            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER

        });
    } else {
        config.set({

            browsers: [
                'Chrome'
            ]

        });
    }

};
