/// <reference types="cypress" />

describe('로그인 Sidebar 테스트', () => {
  before(() => {
    cy.login();
    cy.visit('/');
    cy.waitForReact();
    cy.get('span').contains('person').click();
  });

  it('유저 정보가 뜨는지 확인한다.', () => {
    cy.get('strong').should('contain', '박효진');
  });

  it('로그아웃 버튼이 잘 작동하는지 확인한다.', () => {
    cy.get('button').contains('로그아웃').click();
    cy.get('span').contains('person').click();
    cy.get('p').contains('로그인').should('be.visible');
  });
});
