/// <reference types="cypress" />

   

import LoginPage from '../POM/LoginPage'
describe('DatePicker', function(){
  
  before(function(){
    cy.fixture('ProjectDetails.json').then(function(data){
      this.data=data;
    })
  })
  
    it('Verify DP',function(){
      const Dp=new LoginPage()
      Dp.visit()
      Dp.username('vastclientcare@gmail.com')
      Dp.passwor('Vast@123')
      Dp.button()
      cy.wait(2000)
    })
    it('project',function(){
      cy.get('a[ui-sref="projectmgmt"]').click()
      cy.get('#addProject').click()
      cy.wait(2000)
    //  cy.get('.input-group-btn > .btn > .glyphicon').click()
      //cy.get('div[datepicker-options="datepickerOptions"]').contains('17').click()
      cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-group > .form-control').type(this.data.Name)

      
 
    })
 // })
})