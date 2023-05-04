/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('User Manual', function()


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

    it('User Manual', function(){  
     cy.xpath("//a[@ui-sref='usermanual']").click()             //Go to user manual tab
     cy.get('.col-md-12 > .text-muted').contains("User Manual")
     cy.xpath("//button[@id='addmanual']").should('be.visible').click()                        //Add new user manual
    // cy.get('.modal-header').contains("New user manual")                            //Validation new user popup
     cy.xpath("//input[@placeholder='Enter Title']").type("New Rule List ")
     cy.get('.chosen-single > span').click()
    cy.xpath("//input[@class='chosen-search-input']").type("Teerth").type('{enter}')

    const fl= "Images/DemoImg.jpg"                                                        //Choose file
    cy.get('.ng-scope > input').attachFile(fl)
    cy.get('.btn-success > .fa').click()                                                  //click on upload
    cy.get('tbody > .ng-scope > :nth-child(1) > .ng-binding').should('be.visible') 
    //cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                         //for save
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                             //for cancel

    .then(function(){

      //  cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-primary > .fa').click()  //view
        cy.get('.pull-left > .form-control').type("VAST")
        cy.get('tr.ng-scope > [field-name="project"]').contains("VAST")


    })

     } )

    
     
     })
