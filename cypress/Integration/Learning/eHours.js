/// <reference types="cypress" />
describe('ehours',function(){
    it('Fill Ehours',function(){
        cy.visit('https://timesheet.valueaddsofttech.com/eh/login')
        cy.get('#username').type('atishj')
        cy.get('#password').type('Atish@7817')
        cy.get('#loginSubmit').click()
        cy.xpath('//input[@name="blueFrame:blueFrame_body:customers:0:rows:1:days:0:day:day"]').type('9')
        cy.get('#submitButtonTop > span').click()
    })
   
})