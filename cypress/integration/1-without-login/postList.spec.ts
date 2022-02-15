/// <reference types="cypress" />

describe('비로그인 추천 글 목록 테스트', () => {
  before(() => {
    cy.visit('/');
    cy.waitForReact();
  });

  it('포스트 목록이 뜨는지 확인한다.', () => {
    cy.react('PostPreviewCard').should('be.visible');
  });

  it('포스트를 북마크에 추가하려고 할 때, 로그인 필요 알림을 띄우는지 확인한다.', () => {
    cy.react('PostPreviewCard')
      .nthNode(0)
      .then(($card) => {
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.wrap($card)
          .find('button')
          .contains('북마크 추가')
          .click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('로그인이 필요한 기능입니다.');
          });
      });
  });
});
