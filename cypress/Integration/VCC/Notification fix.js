/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Notification', function () {

  before(function () {
    cy.fixture('notificationd').then(function (data) {
      this.actualdata = data

    })
  })

  it('FacilityMgr', function () {
    const lp = new LoginPage()

    lp.visit()
    lp.username(this.actualdata.username)
    lp.passwor(this.actualdata.Password)
    lp.button()
    cy.url().should('be.equal', 'https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
    cy.title().should('be.equal', 'VAST ClientCare')
    cy.wait(2000)
    cy.xpath('//a[@ui-sref="allnotification.prenotifications"]').click()               //select notification
    cy.get(':nth-child(4) > .row').should('be.visible')                               //validation of table presence
    cy.get('#addNotification').should('be.visible').click()                           // Add new notification
    cy.get('.form-group > .chosen-container > .chosen-choices').type(this.actualdata.projectcode).type('{enter}')    //project code
    cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').type(this.actualdata.title)               // Notification title
    cy.get(':nth-child(3) > .col-md-12 > .form-group > .form-control').type(this.actualdata.description)    //Notification Description
    cy.xpath("//button[@class='btn btn-default']").click()                                      // Date Picker 
    cy.xpath("//div[@datepicker-options='datepickerOptions']").contains('17').click({ force: true })
    // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                //for save
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click({ force: true })                      //for cancel

    cy.get('.ng-binding > .pull-right').click()                                              //for Search
    cy.get(':nth-child(2) > .chosen-container > .chosen-choices > .search-field > .chosen-search-input').type(this.actualdata.projectcode).type('{enter}')
    cy.get('[ng-click="prenotificationCtrl.searchUsers();resetPage()"]').click({ force: true })
    cy.get(':nth-child(2) > [field-name="projectData"]').should('contain', 'TT')
    cy.get('[ng-click="prenotificationCtrl.clearSearchParams();resetPage();"]').click({ force: true })


      .then(function () {

        cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click({ force: true })    //Edit 
        //  cy.xpath("//button[@class='btn btn-warning btn-xs']").click()
        cy.get('.form-group > .chosen-container > .chosen-choices').type(this.actualdata.projectcode).type('{enter}')    //project code
        cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.title)               // Notification title
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.description)    //Notification Description
        cy.xpath("//button[@class='btn btn-default']").click({ force: true })                                      // Date Picker 
        cy.xpath("//div[@datepicker-options='datepickerOptions']").contains('17').click({ force: true })
        // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                //for save
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click({ force: true })                      //for cancel 
      })
      .then(function () {

        cy.xpath("//a[@ui-sref='allnotification.postnotifications']").click({ force: true })       //Post possession notification
        cy.get('ui-view.ng-scope > :nth-child(3) > .row').should('be.visible')
        cy.xpath("//button[@class='btn btn-warning pull-right btn-sm']").should('be.visible').click({ force: true })           //Add new notfication
        cy.xpath("//input[@type='checkbox']").check()                                         //ceckboxes
        cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.title)               // Notification title
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.description)    //Notification Description
        cy.xpath("//button[@class='btn btn-default']").click()                                      // Date Picker 
        cy.xpath("//div[@datepicker-options='datepickerOptions']").contains('17').click({ force: true })
        // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                //for save
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click({ force: true })                      //for cancel 
          .then(function () {
            cy.xpath("//button[@class='btn btn-warning btn-xs']").click({ force: true })                 //Edit
            cy.xpath("//input[@id='checkboxes-3']").uncheck()
            cy.get(':nth-child(2) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.notification)               // Notification title
            cy.get(':nth-child(3) > .col-md-12 > .form-group > .form-control').clear().type(this.actualdata.editdescription)    //Notification Description
            cy.xpath("//button[@class='btn btn-default']").click({ force: true })                         //Date picker
            //cy.xpath("//button[@class='btn btn-sm btn-primary ']")                                     //update
            cy.xpath("//button[@class='btn btn-sm btn-warning']").click({ force: true })                               //for cancel
          })
      })

  })



})
