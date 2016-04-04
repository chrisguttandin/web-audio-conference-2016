System.register(['angular2/core', './slide.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, slide_1;
    var SlidesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (slide_1_1) {
                slide_1 = slide_1_1;
            }],
        execute: function() {
            SlidesComponent = (function () {
                function SlidesComponent() {
                }
                SlidesComponent.prototype.handleKeyUp = function (event) {
                    if (event.keyCode === 37) {
                        var slides_1 = this.slides.toArray();
                        slides_1.some(function (slide, index) {
                            if (slide.isDisplayed) {
                                if (index !== 0) {
                                    slide.isDisplayed = false;
                                    slides_1[index - 1].isDisplayed = true;
                                }
                                return true;
                            }
                        });
                    }
                    else if (event.keyCode === 39) {
                        var slides_2 = this.slides.toArray();
                        slides_2.some(function (slide, index) {
                            if (slide.isDisplayed) {
                                if (index !== slides_2.length - 1) {
                                    slide.isDisplayed = false;
                                    slides_2[index + 1].isDisplayed = true;
                                }
                                return true;
                            }
                        });
                    }
                };
                SlidesComponent.prototype.ngAfterContentInit = function () {
                    this.slides.first.isDisplayed = true;
                };
                __decorate([
                    core_1.ContentChildren(slide_1.SlideComponent),
                    __metadata('design:type', core_1.QueryList)
                ], SlidesComponent.prototype, "slides", void 0);
                SlidesComponent = __decorate([
                    core_1.Component({
                        selector: 'slides',
                        styles: ["\n        div {\n            height: 100%;\n            width: 100%;\n        }\n    "],
                        template: "\n        <div (window:keyup)=\"handleKeyUp($event)\">\n            <ng-content></ng-content>\n        </div>\n    "
                    }),
                    __metadata('design:paramtypes', [])
                ], SlidesComponent);
                return SlidesComponent;
            }());
            exports_1("SlidesComponent", SlidesComponent);
        }
    }
});
//# sourceMappingURL=slides.js.map
