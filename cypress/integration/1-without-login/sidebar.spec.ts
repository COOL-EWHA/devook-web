/// <reference types="cypress" />

describe('비로그인 Sidebar 테스트', () => {
  before(() => {
    cy.visit('/');
    cy.waitForReact();
    cy.get('span').contains('person').click();
    cy.getReact('MySidebar', { options: { timeout: 5000 } });
  });

  it('Sidebar에서 로그인 버튼 목록을 확인한다.', () => {
    cy.get('a').contains('GOOGLE').should('be.visible');
    cy.get('a').contains('GITHUB').should('be.visible');
  });
});
