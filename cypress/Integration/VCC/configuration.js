/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('configuration', function () {

  it('congfuration', function () {
    const lp = new LoginPage()

    lp.visit()
    lp.username(this.actualdata.username)
    lp.passwor(this.actualdata.Password)
    lp.button()
    cy.url().should('be.equal', 'https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
    cy.title().should('be.equal', 'VAST ClientCare')
    cy.wait(2000)

    cy.xpath("//a[@id='nav-submenu2']").click()              //Go to configuration

  })
  it('custom field', function () {
    cy.xpath("//a[@ui-sref='customfields']").click()                                    //Go to customfield
    cy.xpath("//button[@id='addescalations']").should('be.visible').click()

    //cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                   //for save
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                     //for cancel                                   
  })
  it('Project status configuration', function () {

    cy.xpath("//a[@ui-sref='projectconfigs']").click()                                              //Go to Projectconfiguration
    cy.xpath("//button[@class='btn btn-warning pull-right btn-sm']").should('be.visible').click()
    //  cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                  //for save  
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                       //for cancel

  })
  it('Notes setting', function () {
    cy.xpath("//a[@ui-sref='settings']").click()                           //go to notes setting
    // cy.xpath("//button[@id='applyNotesSettings']").click()
  })
  it('Escalation setting', function () {
    cy.xpath("//a[@ui-sref='escalations.requests']").click()                // Go to escalation setting
    cy.xpath("//button[@id='addescalations']").should('be.visible').click()     // Add new escalation setting
    cy.xpath("//select[@ng-model='escalationslevel']").select('ESC1')
    cy.xpath("//select[@ng-model='escalationsto']").select('Super DGM')
    cy.xpath("//input[@placeholder='Enter pending days']").type('10')
    cy.xpath("//input[@placeholder='Enter delayed days']").type('10')
    // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                    //for save
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                         //for cancel
    cy.wait(2000)
      .then('query', function () {
        //  cy.xpath("//a[@ui-sref='escalations.queries']").click()             //go to query
        // cy.xpath("//button[@class='btn btn-warning btn-sm']").click()
        //cy.xpath("//input[@placeholder='Enter number of days']").type('0')
        // cy.xpath("//select[@class='form-control ng-pristine ng-valid ng-empty ng-touched']").select('2')
        //  cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                          //for save              
        // cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                             //for cancel

      }
      )

  })
})