/// <reference types="cypress" />
describe('my first TC', function(){
    it('visit url',function(){
        cy.visit('https://clientcaretest.valueaddsofttech.com/#!/login')
        cy.get('#inputEmail1').type('vastclientcare@gmail.com')
        cy.get('#inputPassword').type('Vast@123')
        cy.get('#btnsignin').click()
        cy.wait(3000)
        
       cy.get('a[ui-sref="projectmgmt"]').click()
       cy.get('#addProject').should('be.visible')
       cy.get(':nth-child(9) > [field-name="name"] > .tr-ng-cell > div.ng-scope > div > .ng-binding').click()
       cy.wait(1000)
       cy.get('.board.ng-scope > :nth-child(2) > :nth-child(1) > div.clearfix > :nth-child(2) > #addProject').click()
       cy.get(':nth-child(1) > .col-md-12 > .form-group > .form-control').type('Town E7')
       cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').type('6')
       cy.get('.modal-footer > .btn-primary').click()
       cy.get('#buildings-list > .active').click()
       cy.get('.clearfix > #addProject').click()
       cy.get('.form-control').type('C1') 
       cy.go('back').go('back')
       cy.wait(2000)
       cy.get('#addProject').click()
       cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-group > .form-control').type('A1 Park')
       cy.get('.modal-body > :nth-child(1) > :nth-child(2) > .form-control').type('Park2132@gmail.com')
       cy.get('.col-md-12 > .form-group > .form-control').select('Pashan - Pune')
       cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').type('TC0120')
       cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').type('AC3467089P')
       cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-control').type('CCSDJ3856D')
       cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-control').type('GSTN21438993456')
       cy.get(':nth-child(5) > :nth-child(1) > .form-group > .form-control').type('Techp2151')
       cy.get(':nth-child(13) > :nth-child(1) > .form-group > .form-control').type('10')
       cy.get(':nth-child(13) > :nth-child(2) > .form-group > .form-control').type('25')
       cy.get(':nth-child(14) > :nth-child(1) > .form-group > .form-control').type('1')
       cy.get('.modal-footer > .btn-primary').click()
       cy.get('.toast-message').should('be.visible')
       cy.wait(2000)
       cy.get('#editProjectBtn').click()
       cy.get('body > div.modal.fade.ng-scope.ng-isolate-scope.in > div > div > form > div.modal-footer > button.btn.btn-sm.btn-primary').click()
       cy.get('.toast-message').should('be.visible')
       cy.wait(3000)
       .then(function(){

       cy.get('#role').click()
        cy.get('.dropdown-menu > :nth-child(5) > a').click()
        cy.get('#btnforgot').should('be.visible')
       })
      
       

        })
        
        
       


    })
