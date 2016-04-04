System.register(['./components/app.js', './components/prism.js', './components/slide.js', './components/slides.js', './angular2-platform-browser.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1, prism_1, slide_1, slides_1, browser_1;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (prism_1_1) {
                prism_1 = prism_1_1;
            },
            function (slide_1_1) {
                slide_1 = slide_1_1;
            },
            function (slides_1_1) {
                slides_1 = slides_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [prism_1.PrismComponent, slide_1.SlideComponent, slides_1.SlidesComponent]);
        }
    }
});
//# sourceMappingURL=main.js.map
