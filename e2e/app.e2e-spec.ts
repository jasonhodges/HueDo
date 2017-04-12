import { HueDoPage } from './app.po';

describe('hue-do App', () => {
  let page: HueDoPage;

  beforeEach(() => {
    page = new HueDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
