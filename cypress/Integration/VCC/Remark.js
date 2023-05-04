/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Remark', function()


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

    it('Remark', function(){  
        cy.xpath("//a[@ui-sref='remarks']").click()                     //Go to remark
        cy.xpath("//button[@id='addRemark']").should('be.visible').click()         //Add new Remark
        cy.xpath("//input[@placeholder='Enter Remark']").type("New Remark")
        cy.get('.chosen-single > span').click()                    //select dropdown
        cy.xpath("//input[@class='chosen-search-input']").type("Assign").type('{enter}')
 
         // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()     //For save
         cy.xpath("//button[@class='btn btn-sm btn-warning']").click()          //for cancel
         cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn > .glyphicon').click()    //for edit
        cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()   //for update
         

     } )

    
     
     })
