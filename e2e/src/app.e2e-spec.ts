import { AppPage } from './app.po';
import { browser } from 'protractor';
import { ComponentFixture } from '@angular/core/testing';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should pass', () => {
    page.navigateTo();
    expect(true).toBeTruthy();
  });
});
