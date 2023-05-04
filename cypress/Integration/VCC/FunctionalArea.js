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

    it('Functional Area', function(){  
          
        cy.xpath("//a[@ui-sref='functionalarea']").click()    //Functional area selection
        cy.get('#addfunctionalarea').should('be.visible').click()
        cy.get('.modal-title > h4').should('be.visible')
        cy.xpath("//input[@placeholder='Functional Area Name']").type('Water Supplier')
        //cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()    //for save
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()              //for cancel
        cy.get('[style=""] > [tr-ng-grid-body-cell="2"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn > .glyphicon').click()   //edit
        cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()
     } )

    
     
     })
