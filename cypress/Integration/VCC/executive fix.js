/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('Executive fix', function () {

  before(function () {
    cy.fixture('executived').then(function (data) {
      this.actualdata = data

    })
  })

  it('executive', function () {
    const lp = new LoginPage()

    lp.visit()
    lp.username(this.actualdata.username)
    lp.passwor(this.actualdata.Password)
    lp.button()
    cy.url().should('be.equal', 'https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
    cy.title().should('be.equal', 'VAST ClientCare')
    cy.wait(2000)

    cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
      .then(function () {


        cy.get('#newUserBtn').should('be.visible').click()
        cy.get('input[type="radio"][value="crmexecutive"]').check()
        cy.get('input[placeholder="User First Name"]').type(this.actualdata.firstname)
        cy.get('input[placeholder="User Last Name"]').type(this.actualdata.lastname)
        //cy.get('input[placeholder="User Email address"]').type( this.actualdata.email)    removed from UI
        cy.xpath("//input[@id='userEmail']").type(this.actualdata.name)                //username
        cy.get('input[placeholder="User Contact Email address"]').type(this.actualdata.contactemail)
        cy.get('input[placeholder="User Phone Number"]').type(this.actualdata.phone)
        const fl = "Images/DemoImg.jpg"
        cy.get('#fileattachment').attachFile(fl)
        cy.get('.modal-footer > .btn-warning').click()                         //cancel 
        // cy.get('.modal-footer > .btn-primary').click()                       //for save
      })
  })
  it('Executive search filter', function () {
    cy.get('#crmexecutives').click()
    cy.wait(2000)
    cy.xpath("//a[@role='button']").click()   //Click on search 

      .then(function () {
        cy.xpath("//input[@name='fullname']").type('super')    //search by name 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(200)
        cy.xpath("//td[@field-name='firstname']").should('contain', 'super')           //validation for search rslt
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click() //click on clr
        cy.xpath("//input[@name='username']").type('superexecutive')    //search by username 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(200)
        cy.xpath("//td[@field-name='firstname']").should('contain', 'superexecutive')           //validation for search rslt
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click() //click on clr        
        cy.xpath("//input[@name='contactemail']").type('gsneha@valueaddsofttech.com')    //search by contactemail 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(200)
        cy.xpath("//td[@field-name='contactemail']").should('contain', 'gsneha@valueaddsofttech.com')           //validation for search rslt
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click() //click on clr  
        cy.xpath("//input[@name='mobileno']").type('997055514')    //search by mobileno 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(200)
        cy.xpath("//td[@field-name='contactemail']").should('contain', '997055514')           //validation for search rslt
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click() //click on clr       
        cy.xpath("//input[@value='Select Status']").click().type('Active').type('{enter}')                           //click on search by status
        cy.wait(2000)
        cy.xpath("//td[@field-name='isdeleted']").should('contain', 'Active')          //validation search by status
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//input[@value='Select Status']").click().type('Inactive').type('{enter}')                           //click on search by status
        cy.wait(2000)
        cy.xpath("//td[@field-name='isdeleted']").should('contain', 'Inactive')          //validation search by status
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 

        cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
        cy.xpath("/html/body/div[4]/div[1]/ul/li[1]").click()              //search on Yesterday
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
        cy.xpath("/html/body/div[4]/div[1]/ul/li[2]").click()              //search on Last 7 days 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset  
        cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
        cy.xpath("/html/body/div[4]/div[1]/ul/li[3]").click()              //search on Last 30 days 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
        cy.xpath("/html/body/div[4]/div[1]/ul/li[4]").click()              //search on This Month 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset  
        cy.xpath("//input[@value='Select Status']").click().type('Active').type('{enter}')                           //click on search by status
        cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
        cy.xpath("/html/body/div[5]/div[1]/ul/li[1]").click()              //search on Yesterday
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset  
        cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
        cy.xpath("/html/body/div[5]/div[1]/ul/li[2]").click({ force: true })              //search on Last 7 days 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
        cy.xpath("/html/body/div[4]/div[1]/ul/li[3]").click({ force: true })              //search on Last 30 days 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
        cy.xpath("/html/body/div[4]/div[1]/ul/li[4]").click({ force: true })              //search on This Month 
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.searchUsers();resetPage()']").click()    //click on search button
        cy.wait(2000)
        cy.xpath("//button[@ng-click='CRMExecutiveCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
        cy.xpath("//a[@role='button']").click()                                 //Click on Search filter to close
      })


  })



})
