Cypress.Commands.add('setRefreshTokenCookie', () => {
  const REFRESH_TOKEN = Cypress.env('googleRefreshToken');
  if (REFRESH_TOKEN) {
    cy.setCookie('REFRESH_TOKEN', REFRESH_TOKEN, {
      path: '/',
      domain: 'devook.com',
      httpOnly: true,
      secure: true,
      sameSite: 'no_restriction',
      log: true,
    });
  }
});
