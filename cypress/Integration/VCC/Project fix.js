/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('ProjectFix',function()
{
 
    before(function(){
        cy.fixture('pdetail').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('project', function(){  
      const lp= new LoginPage()

      lp.visit()
      lp.username(this.actualdata.username)
      lp.passwor(this.actualdata.Password)
      lp.button()
      cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
      cy.title().should('be.equal','VAST ClientCare')
      cy.wait(2000)
      cy.xpath("//a[@ui-sref='projectmgmt']").click()                                          //Project tab from menu
      //cy.get('.clearfix > .text-muted').should('be.visible')                                   // Table visibility 
      cy.xpath("//button[@id='addProject']").click()                                           // Add new Project
      cy.get('.modal-title > h4').should('be.visible')                
      cy.xpath("//input[@name='projectname']").type(this.actualdata.Projectname)
      cy.xpath("//input[@type='email']").type(this.actualdata.Projectemail)
      cy.xpath("//input[@placeholder='Project Legal Name']").type('legal name ')                      //Project legal name
      cy.xpath("//select[@required='required']").select('Pashan - Pune')
      cy.xpath("//input[@placeholder='Registration No']").type(this.actualdata.RegistrationNo)
      cy.xpath("//input[@placeholder='TAN No']").type(this.actualdata.TANNo)
      cy.xpath("//input[@placeholder='PAN No']").type(this.actualdata.PANNo)
      cy.xpath("//input[@placeholder='GSTIN']").type(this.actualdata.GSTIN)
      cy.xpath("//input[@placeholder='Project Code']").type(this.actualdata.ProjectCode) 
      cy.xpath("//button[@class='btn btn-default']").click()
      cy.get('div[datepicker-options="datepickerOptions"]').contains('1').click()
      cy.xpath("//input[@placeholder='Number Of Buildings']").type(this.actualdata.NumberOfBuildings)
      cy.xpath("//input[@placeholder='Number Of Units']").type(this.actualdata.NumberOfUnits)
      cy.xpath("//input[@placeholder='Address Line 1']").type(this.actualdata.AddressLine)
      cy.xpath("//input[@placeholder='City']").type(this.actualdata.City)
      cy.xpath("//input[@placeholder='Zip Code']").type(this.actualdata.ZipCode)
      cy.xpath("//input[@placeholder='Contact Person Name']").type(this.actualdata.contactName)
      cy.xpath("//input[@name='contactnumber']").type(this.actualdata.ContactNumber)
      cy.xpath("//input[@name='ownerrequestlimit']").type(this.actualdata.SuperOwnersLimit)
      cy.xpath("//input[@name='tenantrequestlimit']").type(this.actualdata.SuperTenantsLimit)
      cy.xpath("//input[@name='smrequestlimit']").type(this.actualdata.SuperSocietyManagerLimit)
     // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()   //for save
      cy.xpath("//button[@class='btn btn-sm btn-warning']").click()      // for cancel
   })

   it('Active/Inactive',function(){
    cy.get('[style=""] > [tr-ng-grid-body-cell="10"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #inactivateBtn').click({force:true})                    // Inactive project
      cy.get('h5').should('be.visible','Do you want to inactivate Tech IT Park?')                                           
      // cy.xpath("//button[@class='btn btn-sm btn-primary']").click()            // for save activate project
      cy.xpath("//button[@class='btn btn-sm btn-warning']").click()               // for cancel 
      cy.get(':nth-child(2) > [tr-ng-grid-body-cell="10"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #editProjectBtn > .glyphicon').should('be.visible')
   })
   it('edit',function() {
       
    cy.get('[style=""] > [tr-ng-grid-body-cell="10"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #editProjectBtn > .glyphicon').click({force:true})               //click on edit button
       cy.get('.modal-header').should('be.visible')                                //edit popup display
      cy.wait(2000)
      cy.get('.modal-footer > .btn-primary').click()                               //Update
      cy.get('.toast-message').should('be.visible')                                //toaster validation

    } )
    
    it('Parking Allowtment', function(){

      cy.get('[style=""] > [tr-ng-grid-body-cell="10"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #addparking').click({force:true})    //Parking Allowtment
        cy.xpath("//input[@placeholder='Total Parking']").type('2')                                                                                             // Total Parking
        cy.xpath("//button[@class='btn btn-primary']").click()                                                                                                  // Add Parking type
        cy.get('[ng-repeat="parking in addParkingObj.parkingcountbytype"] > .col-md-6 > .form-group > .form-control').clear().type("Base1")
        cy.get('[ng-repeat="parking in addParkingObj.parkingcountbytype"] > .col-md-4 > .form-group > .form-control').clear().type("5")
        //cy.xpath("//button[@class='btn btn-sm btn-primary']").click()                                                 //for save
        cy.xpath('//button[@class="btn btn-sm btn-warning"]').click()                                                   // For cancel
        cy.xpath("//input[@placeholder='Search']").type("VAST")
        cy.get('[field-name="name"] > .tr-ng-cell > div.ng-scope > div > .ng-binding').should('be.visible')                  //search validation
        cy.xpath("//input[@placeholder='Search']").clear()                //for clear the searched project
 

    })
    
    })

   
