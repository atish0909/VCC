/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('FacilityMgr fix',function()
{
 
    before(function(){
        cy.fixture('sfmd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('FacilityMgr', function(){  
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
          cy.get('input[type="radio"][value="facilitymember"]').check()
          cy.xpath("//input[@value='Select Zones']").type(this.actualdata.selcectzone).type('{enter}')
          cy.xpath("//input[@value='Select Areas']").type(this.actualdata.selectarea).type('{enter}')
          cy.get('input[placeholder="User First Name"]').type(this.actualdata.firstname)
          cy.get('input[placeholder="User Last Name"]').type( this.actualdata.lastname)
          //cy.get('input[placeholder="User Email address"]').type( this.actualdata.email)  removed From UI
          cy.xpath("//input[@id='userEmail']").type('username')                //username
          cy.get('input[placeholder="User Contact Email address"]').type( this.actualdata.contactemail)
          cy.get('input[placeholder="User Phone Number"]').type( this.actualdata.phone)
          const fl= "Images/DemoImg.jpg"
          cy.get('#fileattachment').attachFile(fl)
          cy.get('.modal-footer > .btn-warning').click()                         //cancel 
         // cy.get('.modal-footer > .btn-primary').click()                       //for save     
     
     })
     .then(function(){
      cy.get('#facilitymember').click()
      cy.get('.board > .row').should('be.visible')
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnDisable > .glyphicon').click().should('be.visible','Do you want to inactivate Mr Electricity  facility?')
      cy.get('.modal-footer > .btn-warning').click()
      cy.get('.active > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()
      cy.get('.modal-footer > .btn-primary').click()


   })

    
    })

  })