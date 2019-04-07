const { env } = require('process');

module.exports = {
    analyze: {
        cmd: 'ng build --prod --source-map --stats-json && webpack-bundle-analyzer build/web-audio-conference-2016/stats.json'
    },
    build: {
        cmd: 'ng build --base-href /web-audio-conference-2016/ --prod --subresource-integrity'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: (env.TRAVIS) ?
            'ng e2e' :
            'webdriver-manager update && ng e2e --no-webdriver-update'
    },
    lint: {
        cmd: 'ng lint web-audio-conference-2016 --type-check && ng lint web-audio-conference-2016-e2e --type-check && ng lint web-audio-conference-2016-unit --type-check'
    },
    monitor: {
        cmd: 'ng serve --aot'
    },
    prerender: {
        cmd: 'ng run web-audio-conference-2016:server && angular-prerender'
    },
    preview: {
        cmd: 'ng serve --aot --prod'
    },
    smoke: {
        cmd: (env.TRAVIS) ?
            "IS_SMOKE_TEST=true ng e2e --dev-server-target '' && hint --tracking=off https://chrisguttandin.github.io/web-audio-conference-2016 && rm cdp.pid" :
            "webdriver-manager update && IS_SMOKE_TEST=true ng e2e --dev-server-target '' --no-webdriver-update && hint --tracking=off https://chrisguttandin.github.io/web-audio-conference-2016 && rm cdp.pid"
    },
    test: {
        cmd: 'ng test --watch false'
    },
    verify: {
        cmd: "bundle-buddy build/web-audio-conference-2016/*.js.map && grep -r build/**/*.map -e '/environments/environment.ts'; test $? -eq 1"
    }
};
