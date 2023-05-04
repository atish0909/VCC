/// <reference types="cypress" />
describe('my first TC', function(){
   
    it('AddOwner',function(){
        cy.visit('https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
        cy.visit('https://clientcaretest.valueaddsofttech.com/#!/login')
        cy.get('#inputEmail1').type('vastclientcare@gmail.com')
        cy.get('#inputPassword').type('Vast@123')
        cy.get('#btnsignin').click()
        cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
        cy.wait(1000)
        .then(function(){
            cy.get('#newUserBtn').click()
            cy.wait(1000)
            cy.get('input[type="radio"][value="owner"]').check()
            cy.wait(1000)
            cy.get('input[type="radio"][value="prepossession"]').check()
            cy.wait(1000)
            cy.get('.col-md-6 > .chosen-container > .chosen-single > span').click()
            cy.get('.col-md-6 > .chosen-container > .chosen-drop > .chosen-search > .chosen-search-input').type('Teerth Town').type('{enter}')

            cy.wait(1000)
            cy.get(':nth-child(4) > .form-group > .col-md-6 > .chosen-container > .chosen-choices > .search-field > .chosen-search-input').type('Town A').type('{enter}')
            cy.wait(1000)
            cy.get(':nth-child(5) > .form-group > .col-md-6 > .chosen-container > .chosen-choices > .search-field > .chosen-search-input').type('Town A - A1').type('{enter}')
            cy.wait(1000)
            cy.get('#bookingid').type('BKIDAY123')
            //cy.get('#exampleInput').type('19102022')

            cy.get('#firstname').type('Vijay')
            cy.get('#lastname').type('Thalapathi')
            cy.get('#userEmail').type('vijaythala@gmail.com')
            cy.get('#contactEmail').type('vijaythala@gmail.com')
            cy.get('#phone').type('7744523486')
            cy.wait(1000)
            cy.get('.modal-footer > .btn-warning').click()

        })

     })
})