import { WwauHubUiPage } from './app.po';

describe('wwau-hub-ui App', () => {
  let page: WwauHubUiPage;

  beforeEach(() => {
    page = new WwauHubUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
