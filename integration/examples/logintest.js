/// <reference types='cypress'/>

it('login test',function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.wait(5000)
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.wait(5000)
    cy.get('#menu_admin_UserManagement').click()
    cy.get('#spec-iframe')
    cy.wait(5000)
    cy.get('#btnAdd').click()
    cy.wait(5000)
    cy.get('#btnSave').click()

    

})