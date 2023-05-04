/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('ReportHeaders', function()


{
    it('Login', function(){
    const lp= new LoginPage()

           lp.visit()
           lp.username('vastclientcare@gmail.com')
           lp.passwor('Vast@123')
           lp.button()
           cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
           cy.title().should('be.equal','VAST ClientCare')

    })

    it('ReportHeaders', function(){  

        cy.xpath("//a[@ui-sref='reportheaders']").click()
        cy.xpath("//button[@id='addmanual']").should('be.visible').click()                 //Add new report header
        cy.get('.modal-header').should('be.visible')
        cy.xpath("//input[@placeholder='Enter Title']").type("ABCD")
        cy.get('.chosen-single > span').click()
        cy.xpath("//input[@class='chosen-search-input']").type("Zone").type('{enter}')
       //cy.xpath("//div[@id='taTextElement8435496728199989']").type("ABCDEFG")                //HEADER TEXT
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()
        
        .then('Edit',function(){
            cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click()
            cy.get('.modal-header').should('be.visible')
            cy.get('.modal-footer > .btn-primary').click()           //Update Report type. 

        })
     } )

    
     
     })
