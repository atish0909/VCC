/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'



describe('ZoneHead fix',function()
{
 
    before(function(){
        cy.fixture('zoneHeadd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('Zone', function(){  
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
          cy.get('input[type="radio"][value="zonalhead"]').check()
          cy.xpath("//input[@value='Select Zones']").type("Pashan - Pune").type('{enter}')

          cy.get('input[placeholder="User First Name"]').type(this.actualdata.firstname)
          cy.get('input[placeholder="User Last Name"]').type( this.actualdata.lastname)
          cy.get('input[placeholder="User Email address"]').type( this.actualdata.email)
          cy.get('input[placeholder="User Contact Email address"]').type( this.actualdata.contactemail)
          cy.get('input[placeholder="User Phone Number"]').type( this.actualdata.phone)
          const fl= "Images/DemoImg.jpg"
          cy.get('#fileattachment').attachFile(fl)
          cy.get('.modal-footer > .btn-warning').click()                         //cancel 
         // cy.get('.modal-footer > .btn-primary').click()                       //for save

       

         
     
     })
     .then(function(){
      cy.get('#allzones').click()
      cy.get('#allzonas').click()
      cy.get('.board > .row').should('be.visible')
      cy.get(':nth-child(5) > [field-name="name"] > .tr-ng-cell > div.ng-scope > div > #btzonesno').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > [field-name="name"] > .tr-ng-cell > div.ng-scope > div > .ng-binding').click()
      cy.get('.board > .row').should('be.visible')
      cy.get('.col-md-10 > .btn').click()
      cy.get('#zonalHead').click()
      cy.get('ui-view.ng-scope > .row').should('be.visible')
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click()
      cy.xpath("//input[@value='Select Zones']").type("Pashan - Pune").type('{enter}')
     // cy.get('.modal-footer > .btn-primary').click()              //for update
     cy.get('.modal-footer > .btn-warning').click()                 //for cancel
      

   })

       
     } )
   

    
    })
