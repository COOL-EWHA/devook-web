Cypress.Commands.add('login', () => {
  const apiHost = Cypress.env('apiHost');
  const refreshToken = Cypress.env('testRefreshToken');
  if (apiHost && refreshToken) {
    cy.request('POST', `${apiHost}/auth/test-login`, { refreshToken }).then((response) => {
      expect(response.body).to.have.property('accessToken');
    });
  }
});
