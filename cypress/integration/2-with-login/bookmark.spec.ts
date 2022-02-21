/// <reference types="cypress" />

describe('북마크 관련 기능 테스트', () => {
  before(() => {
    cy.login();
    cy.visit('/bookmarks');
    cy.waitForReact();
  });

  it('북마크 생성이 잘 되는지 확인한다.', () => {
    cy.get('span').contains('add').click();

    const postUrl = 'https://velog.io/@kyj2471/Code-Splitting';
    const apiHost = Cypress.env('apiHost');
    cy.intercept('POST', `${apiHost}/bookmarks`).as('createBookmark');
    cy.intercept('GET', `${apiHost}/bookmarks`).as('getBookmarks');
    cy.react('Modal').find('input').type(postUrl);
    cy.react('Modal').find('textarea').type('메몽메몽');
    cy.react('Modal').find('button').contains('완료').click();
    cy.wait('@createBookmark');
    cy.getReact('PostPreviewCard').nthNode(0).getProps('url').should('eq', postUrl);
  });

  it('북마크 삭제가 잘 되는지 확인한다.', () => {
    cy.viewport(1025, 768);
    cy.react('PostPreviewCard').eq(0).find('button').contains('삭제').should('be.visible');
    cy.viewport(1024, 768);
    cy.react('PostPreviewCard').eq(0).find('span').contains('more_horiz').click();
    cy.getReact('PostPreviewCard').nthNode(0).getProps('bookmarkId').as('bookmarkId');
    cy.getReact('PostPreviewCard').nthNode(0).getProps('title').as('bookmarkTitle');
    const apiHost = Cypress.env('apiHost');
    cy.get('@bookmarkId').then((bookmarkId) => {
      cy.intercept('DELETE', `${apiHost}/bookmarks/${bookmarkId}`).as('deleteBookmark');
    });
    cy.intercept('GET', `${apiHost}/bookmarks`).as('getBookmarks');
    cy.react('PostPreviewCard').eq(0).find('button').contains('삭제').should('be.visible').click();
    cy.wait('@deleteBookmark');
    cy.wait('@getBookmarks');

    cy.get('@bookmarkTitle').then((bookmarkTitle) => {
      cy.get('[data-cy=postPreviewCardTitle]').should('not.eq', bookmarkTitle);
    });
  });
});
