/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('Head fix',function()
{
 
    before(function(){
        cy.fixture('headd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('Head', function(){  
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
          cy.get('input[type="radio"][value="crmhead"]').check()
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
      cy.get('#crmheads').click()
      cy.wait(1000)
      cy.get('.ng-binding > .pull-right').click()
      
      cy.get('[style="margin-bottom: 10px;"] > :nth-child(1) > .form-control').type('sneha')
      //cy.get(':nth-child(3) > .form-group > .form-control').type('gsneha@valueaddsofttech.com')
     // cy.get('[ng-click="CRMHeadCtrl.searchUsers();resetPage()"]').click()
      cy.wait(2000)
      cy.get('.p-title').should('be.visible')
      //cy.get('.ng-binding > .pull-right').click()
      

       
     } )
   

    
    })

  })