/// <reference types='cypress'/>

it('within Dom test',function(){

    cy.visit('https://example.cypress.io/')
 cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
 //cy.get('#query-btn').should('contain', 'Button')
 cy.get('[data-test-id="test-example"]').should('have.class', 'example')
 //cy.get('.query-btn').should('contain', 'Button')


})