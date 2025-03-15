import { colorPath } from '../fixtures/links.json';

const pathname = `/${Cypress.env('LANG')}/colors/browse-colors/${Cypress.env('STORE')}`;

describe('SW-Color-Path', () => {
  colorPath.forEach((color) => {
    it(`should visit ${color} successfully`, () => {
      cy.visit(`${pathname}${color}`);
      cy.location('pathname').should('contain', color);
    });
  });
});