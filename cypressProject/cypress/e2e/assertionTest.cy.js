///<reference types="cypress"/>

it('Assertion Test',  () => {
    cy.visit('http://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled')

    expect(true).to.be.true

    let name = 'cypress';
    expect(name).to.be.equal('cypress')

    assert.equal(4, 5, 'not equal')

})