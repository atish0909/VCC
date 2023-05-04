 /// <reference types="cypress" />

 import LoginPage from '../POM/LoginPage'

describe('Executive fix',function()
{
 
    before(function(){
        cy.fixture('executived').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('executive', function(){  
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
          cy.get('input[type="radio"][value="crmexecutive"]').check()
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
      cy.get('#crmexecutives').click()
      cy.get(':nth-child(2) > .row').should('be.visible')
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="CRMExecutiveCtrl.editCRMExecutiveUser(gridItem._id,gridItem)"] > .glyphicon').click()
      cy.get('#firstname').clear().type("new Edit")
      //cy.get('.modal-footer > .btn-primary').click()     //update
      cy.get('.modal-footer > .btn-warning').click()       //for cancel
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="CRMExecutiveCtrl.goToAccessLevel(gridItem._id,gridItem)"] > .glyphicon').click()
      cy.get('[title="Baner"] > :nth-child(1) > .ivh-treeview-twistie-wrapper > .ivh-treeview-twistie > .ivh-treeview-twistie-collapsed > .glyphicon').click()
      cy.get('[title="VAST"] > :nth-child(2) > .ng-isolate-scope > .ivh-treeview-checkbox').check().should('be.checked')
      cy.get('#updateAccessBtn').click()
      cy.wait(2000)
      cy.get('.row.ng-scope > .col-md-9').should('be.visible')
              })

       
     } )
   

    
    })
