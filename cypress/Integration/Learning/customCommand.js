/// <reference types="cypress" />
describe('CustomCommand',function(){
    it('LaunchURL',function(){
        cy.visit('https://clientcaretest.valueaddsofttech.com/#!/login')
        cy.get('#inputEmail1').type('vastclientcare@gmail.com')
        cy.get('#inputPassword').type('Vast@123')
        cy.get('#btnsignin').click()
        
        cy.Bylabel('Users');
    })
    
    
})