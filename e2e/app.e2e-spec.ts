import { AngularPetshopPage } from './app.po';

describe('angular-petshop App', () => {
  let page: AngularPetshopPage;

  beforeEach(() => {
    page = new AngularPetshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
