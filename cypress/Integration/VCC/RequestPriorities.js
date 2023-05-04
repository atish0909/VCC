/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Zone', function()


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

    it('RequestPriorities', function(){  
 
        cy.xpath("//a[@ui-sref='requestpriority']").click()
        cy.xpath("//button[@class='btn btn-warning pull-right btn-sm']").click()          // add new request priorities
        cy.xpath("//div[@class='modal-body']").should('be.visible')                 //popup validation
       cy.xpath("//input[@name='priorityname']").type("Lowest")                          //priority name
        //cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                    //for Add
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                    //for cancel
        cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit').click()
        cy.get('.btn-primary').click()                             //for update
        cy.get('.toast-message').should('be.visible')                   //for toaster message
     } )

    
     
     })
