/// <reference types="cypress" />


describe('Socitymngr fix',function()
{
 
    before(function(){
        cy.fixture('socitymngrd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('Socitymngr', function(){  
      cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
      cy.get('#inputEmail1').type('vastclientcare@gmail.com')
      cy.get('#inputPassword').type('Vast@123')
      cy.get('#btnsignin').click()
      cy.wait(2000)
      
      cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
      .then(function(){

       
          cy.get('#newUserBtn').should('be.visible').click()
          cy.get('input[type="radio"][value="societymanager"]').check()
          cy.wait(1000)
          cy.get('.col-md-6 > .chosen-container > .chosen-single > span').click()
          cy.get('.col-md-6 > .chosen-container > .chosen-drop > .chosen-search > .chosen-search-input').type(this.actualdata.projectname).type('{enter}')
          cy.get('#firstname').type(this.actualdata.firstname)
          cy.get('#lastname').type(this.actualdata.lastname)
          cy.get('#userEmail').type(this.actualdata.email)
          cy.get('#contactEmail').type(this.actualdata.contactemail)
          cy.get('#phone').type(this.actualdata.phone)
          cy.wait(1000)
          cy.get('.modal-footer > .btn-warning').click()                    //for cancel
        //  cy.get('.modal-footer > .btn-primary').click()                    //for save
     
     })
    

    
    })

  })