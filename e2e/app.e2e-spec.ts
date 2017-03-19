import { AppCommunityDebatePage } from './app.po';

describe('app-community-debate App', function() {
  let page: AppCommunityDebatePage;

  beforeEach(() => {
    page = new AppCommunityDebatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
