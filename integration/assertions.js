/// <reference types='cypress'/>

it('assertions test',function(){
 cy.visit('https://example.cypress.io/')
 cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
 //cy.get('#query-btn').should('contain', 'Button')
 cy.get('[data-test-id="test-example"]').should('have.class', 'example')
 //cy.get('.query-btn').should('contain', 'Button')

 cy.get('.query-list').contains('bananas').should('have.class','third')
 cy.get('.query-list').contains('apples').should('have.class','first')
 cy.get('.query-list').contains('oranges').should('have.class','second')

})