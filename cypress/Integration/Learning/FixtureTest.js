/// <reference types="cypress" />


describe('Fixture',function()
{
 
    before(function(){
        cy.fixture('zone').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('Data Fix',function(){

      cy.visit("https://practicetestautomation.com/practice-test-login/")
      cy.get('#inputEmail1').type(this.actualdata.name)
      cy.get('#inputPassword').type(this.actualdata.pass)
      cy.get('#btnsignin').click()
        })
    })
