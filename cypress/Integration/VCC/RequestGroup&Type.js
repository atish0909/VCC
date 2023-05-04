/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Request group and Type', function()


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

    it(' Request Group ', function(){  
        cy.xpath("//a[@ui-sref='requestmanagement.requestgroup']").click()                                        //open request group and type
        cy.get('[field-name="name"] > .tr-ng-column-header > .ng-scope > .tr-ng-title').should('be.visible')
        cy.get('#addfunctionalarea').should('be.visible')                                                      
        cy.get('#addfunctionalarea').click()                                          //Add functional area
        cy.xpath('//input[@name="requestgroupname"]').type('Water supplier')
       // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                 //for save
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                    // for caancel
     } )
      
     it('edit', function(){

        cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()
         cy.xpath("//input[@placeholder='Enter Request Name']").type("ber") 
     //   cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                 //Update 
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                 // for cancel
        cy.wait(2000)
        cy.get('.pull-left > .form-control').type("Plum")
 
     })
     it('Request Type',function(){
       
         cy.xpath("//a[@ui-sref='requestmanagement.requesttype']").click()
         cy.get('#addfunctionalarea').should('be.visible')
         .then(function(){
            cy.xpath("//button[@class='btn btn-warning btn-sm']").click()
           // cy.get('.modal-body > :nth-child(1) > .form-control').type('Electrical issue')  
         //  cy.get('.col-md-12 > .form-group > .form-control').select('Electricity')
         cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()
          cy.xpath("//select[@class='form-control ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required']").select("Electricity")
         // cy.get('.btn-primary').click()
          cy.xpath("//button[@class='btn btn-sm btn-warning']").click()
          cy.xpath("//input[@class='form-control ng-pristine ng-untouched ng-valid ng-empty']").type("Wire")
         })
     


     })
     
     })
