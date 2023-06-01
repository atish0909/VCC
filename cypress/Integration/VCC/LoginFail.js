/// <reference types="cypress" />

describe('Login Validation',function()
{
 
    before(function(){
        cy.fixture('logindata').then(function(data)
        {
             this.actualdata=data

        }) 
    })


it('valid username invalid password', function(){
    cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
    const user=cy.get('#inputEmail1')
    user.clear();
    user.type(this.actualdata.validUserName);

    const pass=cy.get('#inputPassword')
    pass.clear();
    pass.type(this.actualdata.invalidPassword);

    const loginButton= cy.get('#btnsignin');
    loginButton.click();
    cy.get('.toast-message').should('be.visible');
})
it('Invalid username valid password', function(){
    cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
    const user0=cy.get('#inputEmail1')
    user0.clear();
    user0.type("vastclientcaregmail.com")

    const pass0=cy.get('#inputPassword')
    pass0.clear();
    pass0.type("Vast@123");

    const loginButton= cy.get('#btnsignin');
    loginButton.click();
    cy.get('.toast').should('be.visible');
})
it('Invalid username Invalid password', function(){
    cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
    const user1=cy.get('#inputEmail1')
    user1.clear();
    user1.type("vastclientcaregmail.com")

    const pass1=cy.get('#inputPassword')
    pass1.clear();
    pass1.type("Atish@123");

    const loginButton= cy.get('#btnsignin');
    loginButton.click();
    cy.get('.toast').should('be.visible');
})
it('Valid username Valid password', function(){
    cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
    const user2=cy.get('#inputEmail1')
    user2.clear();
    user2.type("vastclientcare@gmail.com")

    const pass2=cy.get('#inputPassword')
    pass2.clear();
    pass2.type("Vast@123");

    const loginButton= cy.get('#btnsignin');
    loginButton.click();
    // cy.get('.toast').should('be.visible');
    cy.xpath("//span[@id='username']").should('be.visible')
    cy.wait(2000)
    cy.get('#profilePicid').click()
    cy.get('.dropdown-menu > :nth-child(5) > a').click();
})

})

