import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display + and =', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('+');
    expect(page.getParagraphText()).toContain('=');
  });
});
