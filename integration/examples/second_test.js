/// <reference types='cypress'/>

it('facebook test', ()=>{

    cy.visit('https://en-gb.facebook.com/')
    cy.get('[data-testid=royal_email]').type('aayodhya')
    cy.get('.signup_box_content > ._42ft').click()
})