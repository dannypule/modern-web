import { A12NgrxStorePage } from './app.po';

describe('a12-ngrx-store App', () => {
  let page: A12NgrxStorePage;

  beforeEach(() => {
    page = new A12NgrxStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
