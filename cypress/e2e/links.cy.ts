import { links } from '../fixtures/links.json';

describe('template spec', () => {
  links.forEach((link) => {
    it(`should visit ${link} successfully`, () => {
      cy.visit(link);
      cy.location('pathname').should('contain', link);
    });
  });
});