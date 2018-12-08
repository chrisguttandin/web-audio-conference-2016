import { env } from 'process';
import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const IS_SMOKE_TEST = !!env.IS_SMOKE_TEST;

const navigateTo = (path: string) => {
    return browser.get((IS_SMOKE_TEST) ? `https://chrisguttandin.github.io/web-audio-conference-2016${ path }` : path);
}

describe('slides', () => {

    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {

        it('should look the same', async () => {
            navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.7, 2.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

        it('should look the same', async () => {
            navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.7, 2.9);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.3, 2.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.6, 1.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3, 3.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.5, 1.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.8, 3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.3, 1.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(4, 4.2);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.1, 1.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('tenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(6.3, 6.5);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eleventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.1, 1.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twelveth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(10.5, 10.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('thirteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.1, 2.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fourteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.9, 2.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('fifteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.4, 2.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('sixteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.2, 1.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('seventeenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.1, 3.3);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('eighteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(0.9, 1.1);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('nineteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(1.5, 1.7);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twentieth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.2, 2.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty first slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.2, 2.4);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(3.6, 3.8);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

    describe('twenty third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            if (env.TRAVIS) {
                expectElementShot(result).toHaveMismatchWithinRange(2.4, 2.6);
            } else {
                expectElementShot(result).toBeRegressionFree();
            }
        });

    });

});
