/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('DGM fix',function()
{
 
    before(function(){
        cy.fixture('dgmd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('DGM', function(){  
      const lp= new LoginPage()

      lp.visit()
      lp.username(this.actualdata.username)
      lp.passwor(this.actualdata.Password)
      lp.button()
      cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
      cy.title().should('be.equal','VAST ClientCare')
      cy.wait(2000)
      
      cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
      .then(function(){

       
          cy.get('#newUserBtn').should('be.visible').click()
          cy.get('input[type="radio"][value="dgm"]').check()
          cy.get('input[placeholder="User First Name"]').type(this.actualdata.firstname)
          cy.get('input[placeholder="User Last Name"]').type( this.actualdata.lastname)
          //cy.get('input[placeholder="User Contact Email address"]').type( this.actualdata.email)    removed from UI
          cy.get('input[placeholder="User Contact Email address"]').type( this.actualdata.contactemail)
          cy.xpath("//input[@id='userEmail']").type(this.actualdata.name)                //username
          cy.get('input[placeholder="User Phone Number"]').type( this.actualdata.phone)
          const fl= "Images/DemoImg.jpg"
          cy.get('#fileattachment').attachFile(fl)
          cy.get('.modal-footer > .btn-warning').click()                         //cancel 
         // cy.get('.modal-footer > .btn-primary').click()                       //for save

     })
     .then(function(){
      cy.get('#dgmTab').click()
      cy.get('.board > .row').should('be.visible')
      cy.wait(1000)
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-danger > .glyphicon').click().should('be.visible','Do you want to inactivate Mr Super  DGM?')
      cy.xpath('//button[@class="btn btn-sm btn-warning"]').click()
     })

     .then('Edit DGM',function(){
      cy.get('.active > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click()     //edit
      cy.get('#firstname').clear().type(this.actualdata.editname)
     // cy.xpath('//button[@class="btn btn-sm btn-primary"]').click()       //update
      cy.get('.modal-footer > .btn-warning').click()                      //for cancel
    // cy.get('.toast-message').should('be.visible')
    
  })
   }) 
    })
