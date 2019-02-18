import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('BSC notes', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should view note detail', async () => {
    await browser.get(browser.baseUrl);
    await element.all(by.css('.detail-btn')).get(1).click();
    const viewTitle = element(by.css('h2'));
    const noteId = element(by.css('.note-id'));
    await expect(viewTitle.getText()).toEqual('Note detail');
    await expect(noteId.getText()).toEqual('2');
  });
});
