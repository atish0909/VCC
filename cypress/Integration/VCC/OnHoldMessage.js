/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('On Hold Message', function()
 {

  before(function(){
    cy.fixture('login').then(function(data){
      this.actualdata=data
    })
  })
    it('Login', function(){
    const lp= new LoginPage()

           lp.visit()
           lp.username( this.actualdat.username )
           lp.passwor( this.actualdat.Password)
           lp.button()
           cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
           cy.title().should('be.equal','VAST ClientCare')

    })

    it('On Hold Message', function(){  

        cy.xpath("//a[@ui-sref='onholdmessages']").click()          //go to On hold message
        cy.get(':nth-child(2) > .row > :nth-child(2)').should('be.visible')        //validation
        cy.xpath("//button[@class='btn btn-warning pull-right btn-sm']").should('be.visible').click()
        cy.xpath("//input[@placeholder='Enter On Hold Message']").type("New On Hold Message")
       // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()      //for save
       cy.xpath("//button[@class='btn btn-sm btn-warning']").click()           //for cancel
       cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()    //Edit
       cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()            //for update
        
       
     } )

    
     
     })
