/// <reference types="cypress" />

describe('로그인 추천 글 목록 테스트', () => {
  before(() => {
    cy.login();
    cy.visit('/');
    cy.waitForReact();
  });

  it('포스트 목록이 뜨는지 확인한다.', () => {
    cy.react('PostPreviewCard').should('be.visible');
  });

  it('포스트를 북마크에 추가하는 기능이 잘 작동하는지 확인한다.', () => {
    cy.react('PostPreviewCard').eq(0).find('button').contains('북마크 추가').click();
    cy.getReact('PostPreviewCard').nthNode(0).getProps('title').as('postTitle');
    const apiHost = Cypress.env('apiHost');
    cy.intercept('GET', `${apiHost}/bookmarks`).as('getBookmarks');
    cy.get('@postTitle').then((postTitle) => {
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(200); // 북마크 목록 페이지 이동 UI에 커서 올리기까지 예상되는 최소 시간
      cy.get('li').contains('bookmarks').trigger('mouseover');
      cy.wait('@getBookmarks')
        .its('response.body')
        .then((bookmarks) => {
          expect(bookmarks[0].title).to.equal(postTitle);
        });
      cy.get('li').contains('bookmarks').click();
      cy.location('pathname', { timeout: 5000 }).should('include', '/bookmarks');
      cy.getReact('PostPreviewCard').nthNode(0).getProps('title').should('eq', postTitle);
    });
  });
});
