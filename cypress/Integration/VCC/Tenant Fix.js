/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'


describe('Tenant fix',function()
{
 
    before(function(){
        cy.fixture('tenantd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('Tenant', function(){  
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
          cy.get('input[type="radio"][value="tenant"]').check()
          cy.wait(1000)
          cy.get('.form-group > .chosen-container > .chosen-single > div > b').click({force:true})
          cy.get('.form-group > .chosen-container > .chosen-drop > .chosen-search > .chosen-search-input').type(this.actualdata.projectname).type('{enter}')

          cy.wait(1000)
          cy.get('.col-md-18 > .chosen-container > .chosen-choices').type(this.actualdata.buildingname).type('{enter}')
          cy.wait(1000)
          cy.get('.form-group > .chosen-container > .chosen-choices').type(this.actualdata.unitno).type('{enter}')
          cy.wait(1000)
          cy.get('#firstname').type(this.actualdata.firstname)
          cy.get('#lastname').type(this.actualdata.lastname)
          //cy.get('#userEmail').type(this.actualdata.email)   removed from UI
          cy.xpath("//input[@id='userEmail']").type('username')                //username
          cy.get('#contactEmail').type(this.actualdata.contactemail)
          cy.get('#phone').type(this.actualdata.phone)
          cy.wait(1000)
          cy.get('.modal-footer > .btn-warning').click()                    //for cancel
        //  cy.get('.modal-footer > .btn-primary').click()                    //for save
     
     })
    

    
    })

  })