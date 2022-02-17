/// <reference types="cypress" />

describe('로그인 추천 글 목록 테스트', () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit('/');
    cy.waitForReact();
  });

  it('포스트 목록이 뜨는지 확인한다.', () => {
    cy.react('PostPreviewCard').should('be.visible');
  });

  it('포스트를 북마크에 추가하는 기능이 잘 작동하는지 확인한다.', () => {
    cy.react('PostPreviewCard').eq(0).find('button').contains('북마크 추가').click().should('have.attr', 'disabled');

    cy.get('[data-cy=postPreviewCardTitle]')
      .eq(0)
      .invoke('text')
      .then((postTitle) => {
        cy.visit('/bookmarks');
        cy.waitForReact();
        cy.get('[data-cy=postPreviewCardTitle]')
          .eq(0)
          .invoke('text')
          .then((bookmarkTitle) => {
            expect(bookmarkTitle).to.eq(postTitle);
          });
      });
  });
});
