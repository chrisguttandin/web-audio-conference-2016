import { env } from 'process';
import { browser, by, element } from 'protractor';

export class HomePage {
    public async getHeadline(): Promise<string> {
        return element(by.css('wac-app h1')).getText();
    }

    public async getSubHeadline(): Promise<string> {
        return element(by.css('wac-app h2')).getText();
    }

    public async navigateTo(): Promise<any> {
        return browser.get(env.IS_SMOKE_TEST === 'true' ? '/web-audio-conference-2016' : '/');
    }
}
