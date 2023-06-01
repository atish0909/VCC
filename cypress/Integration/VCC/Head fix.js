/// <reference types="cypress" />

import { it } from 'mocha'
import LoginPage from '../POM/LoginPage'

describe('Head fix',function()
{
 
    before(function(){
        cy.fixture('headd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('CRM Head', function(){  
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
          //cy.get('input[placeholder="User Email address"]').type( this.actualdata.email)   removed from UI
          cy.get('input[placeholder="User Contact Email address"]').type( this.actualdata.contactemail)
          cy.xpath("//input[@id='userEmail']").type(this.actualdata.name)                //username
          cy.get('input[placeholder="User Phone Number"]').type( this.actualdata.phone)
          const fl= "Images/DemoImg.jpg"
          cy.get('#fileattachment').attachFile(fl)
          cy.get('.modal-footer > .btn-warning').click()                         //cancel 
         // cy.get('.modal-footer > .btn-primary').click()                       //for save     
     
     })

     .then(function(){
      cy.get('#crmheads').click({force:true})
      cy.wait(1000)
      cy.get('.ng-binding > .pull-right').click()
      
      cy.get('[style="margin-bottom: 10px;"] > :nth-child(1) > .form-control').type('sneha')
      //cy.get(':nth-child(3) > .form-group > .form-control').type('gsneha@valueaddsofttech.com')
     // cy.get('[ng-click="CRMHeadCtrl.searchUsers();resetPage()"]').click()
      cy.wait(2000)
      //cy.get('.p-title').should('be.visible')
      //cy.get('.ng-binding > .pull-right').click()
      cy.get('[ng-click="externalUsersCtrl.clearSearchParams();resetPage();"]').click()       //clear search resul
      cy.get('.ng-binding > .pull-right').click()             //to close search filter option
 } )
    })

    it('CRM Head Edit',function(){
    cy.xpath("//a[@ui-sref='users.crmheads']").click({force: true})         //CLick on CRM Head Tab 
    cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').should('be.visible').click()    //Click on Edit 
    cy.xpath("//input[@placeholder='User First Name']").clear().type('Virat')
    cy.xpath("//input[@placeholder='User Last Name']").clear().type('Kohli')
    cy.xpath("//input[@placeholder='User Contact Email address']").clear().type('virat18@gmail.com')
    cy.xpath("//input[@placeholder='User Phone Number']").clear().type('9988998899')
    const f3= "Images/DemoImg.jpg"
    cy.xpath("//input[@id='fileattachment']").attachFile(f3)                         //click on attach profile photo
    cy.wait(2000)
    //cy.xpath("//button[@class='btn btn-sm btn-primary']").click()                 //Click on Update
    cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                   //click on cancel 

    cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-danger > .glyphicon').should('be.visible').click()            //click on Inactive button
    cy.xpath("//div[@class='modal-header ng-scope']").should('contain','Inactivate User') 
    cy.xpath("//div[@class='modal-body ng-scope']").should('contain','Do you want to inactivate ')
   // cy.xpath("//button[@class='btn btn-sm btn-primary']").click()       //click on Yes
   cy.xpath("//button[@class='btn btn-sm btn-warning']").click()        //click on No
    })

    it('CRM Head search filter', function(){
    cy.xpath("//a[@ui-sref='users.crmheads']").click({force: true})         //CLick on CRM Head Tab 
    cy.wait(2000)
    cy.xpath("//a[@role='button']").click()                                 //Click on Search filter
    .then(function(){
    cy.xpath("//input[@name='fullname']").type('Rohit')                         //search by name  
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.xpath("//td[@field-name='firstname']").should('contain','Rohit')                //VAlidation for searched result
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset button
    cy.xpath("//input[@name='username']").type('crmhead@gmail.com')                         //search by Username  
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.xpath("//td[@field-name='firstname']").should('contain','crmhead@gmail.com')                //VAlidation for searched result
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset button
    cy.xpath("//input[@name='contactemail']").type('rohitp@valueaddsofttech.com')                         //search by Contactemail  
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.xpath("//td[@field-name='contactemail']").should('contain','rohitp@valueaddsofttech.com')                //VAlidation for searched result
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset button
    cy.xpath("//input[@name='mobileno']").type('9970555144')                         //search by ContactNo 
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.xpath("//td[@field-name='contactemail']").should('contain','9970555144')                //VAlidation for searched result
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset button
    cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
    cy.get('.show-calendar > .ranges > ul > [data-range-key="Yesterday"]').click()              //search on Yesterday
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
    cy.xpath("/html/body/div[4]/div[1]/ul/li[2]").click()              //search on Last 7 days 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
    cy.xpath("/html/body/div[4]/div[1]/ul/li[3]").click()              //search on Last 30 days 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='datePicker.date']").click()                      //To Open datepicker of Crtd dt
    cy.xpath("/html/body/div[4]/div[1]/ul/li[4]").click()              //search on This Month 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@value='Select Status']").click().type('Active').type('{enter}')                           //click on search by status
    cy.wait(2000)
    cy.xpath("//td[@field-name='isdeleted']").should('contain','Active')          //validation search by status
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@value='Select Status']").click().type('Inactive').type('{enter}')                           //click on search by status
    cy.wait(2000)
    cy.xpath("//td[@field-name='isdeleted']").should('contain','Inactive')          //validation search by status
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    
    cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
    cy.get('.show-calendar > .ranges > ul > [data-range-key="Yesterday"]').click()              //search on Yesterday
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
    cy.xpath("/html/body/div[5]/div[1]/ul/li[2]").click({force:true})              //search on Last 7 days 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
    cy.xpath("/html/body/div[4]/div[1]/ul/li[3]").click({force:true})              //search on Last 30 days 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//input[@ng-model='updatePicker.updatedate']").click()                //Click on Updatedatepicker
    cy.xpath("/html/body/div[4]/div[1]/ul/li[4]").click({force:true})              //search on This Month 
    cy.xpath("//button[@ng-click='CRMHeadCtrl.searchUsers();resetPage()']").click()     //Click on Search button
    cy.wait(2000)
    cy.xpath("//button[@ng-click='CRMHeadCtrl.clearSearchParams();resetPage();']").click()   //Click on Reset 
    cy.xpath("//a[@role='button']").click()                                 //Click on Search filter to close
    })
    
    })

  })