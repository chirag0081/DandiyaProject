import { ArihantDandiyaPage } from './app.po';

describe('arihant-dandiya App', () => {
  let page: ArihantDandiyaPage;

  beforeEach(() => {
    page = new ArihantDandiyaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
