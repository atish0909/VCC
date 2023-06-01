/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Owner fix',function()
{
 
    before(function(){
        cy.fixture('ownerd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('PreOwner', function(){  
      const lp= new LoginPage()

      lp.visit()
      lp.username(this.actualdata.username)
      lp.passwor(this.actualdata.Password)
      lp.button()
      cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/login')
      cy.title().should('be.equal','VAST ClientCare')
      cy.wait(2000)
      
      cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
      .then(function(){

       
          cy.get('#newUserBtn').should('be.visible').click()
          cy.get('input[type="radio"][value="owner"]').check()
          cy.wait(1000)
          cy.get('input[type="radio"][value="prepossession"]').check()
          cy.wait(1000)
          cy.xpath('/html/body/div[1]/div/div/form/div[5]/div[1]/div/div/div/div').click({force : true})
          cy.xpath("/html/body/div[1]/div/div/form/div[5]/div[1]/div/div/div/div/div/div/input").type(this.actualdata.projectname).type('{enter}')

          cy.wait(1000)
          cy.xpath('/html/body/div[1]/div/div/form/div[5]/div[2]/div/div/div/div/ul/li/input').type(this.actualdata.buildingname).type('{enter}')
          cy.wait(1000)
          cy.xpath('/html/body/div[1]/div/div/form/div[6]/div/div/div/div/div/ul/li/input').type(this.actualdata.unitno).type('{enter}')
          cy.wait(1000)
          cy.get('#bookingidinput0').type(this.actualdata.BookingID)
          //cy.get('#exampleInput').type('19102022')

          cy.get('#firstname').type(this.actualdata.firstname)
          cy.get('#lastname').type(this.actualdata.lastname)
         // cy.get('#userEmail').type(this.actualdata.email)   removed from UI
         cy.xpath("//input[@id='userEmail']").type()                //username
          cy.get('#contactEmail').type(this.actualdata.contactemail)
          cy.get('#phone').type(this.actualdata.phone)
          cy.wait(1000)
          cy.get('.modal-footer > .btn-warning').click()                    //for save     
     
     })
         .then('check added user',function(){
          cy.get('#externalusers').click()                                        //go to extrnal user
          cy.get('#prepossession').click().should('be.visible')                   // Click on prepossession     
          cy.wait(2000)
          cy.get('[style=""] > [field-name="name"]').should('be.visible','Ritesh Kate')    //Assertion for added user.

         })


     .then(function(){
      cy.get('#externalusers').click()
      cy.get('#allexternal').should('be.visible')
      cy.get('#prepossession').click().should('be.visible')
      cy.get('#checkboxes-0').check().should('be.checked')
      cy.xpath('//button[@class="btn btn-sm btn-warning"]').click().should('be.visible',' users to the post possession module')
      cy.get('.modal-footer > .btn-warning').click() // cancel 
      //cy.get('.modal-footer > .btn-primary').click()   //save
      cy.get('#checkboxes-0').uncheck()   
      cy.get('#postpossession').click()
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="postpossessionUsersCtrl.raiseRequest(gridItem._id,gridItem)"] > .glyphicon').click()
      cy.get('.modal-body > :nth-child(3) > .form-control').type('Automation script')
      const f2= "Images/DemoImg.jpg"
      cy.get(':nth-child(5) > input').attachFile(f2)
      cy.get('.btn-success > .fa').click()
      cy.wait(2000)
      cy.get('.modal-footer > .btn-warning').click()               //for cancel
      //cy.get('.modal-footer > .btn-primary')                       //for save
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="postpossessionUsersCtrl.assignedprojectsUser(gridItem.userid,gridItem)"] > .glyphicon').click()
      cy.get('fieldset > :nth-child(2) > :nth-child(1) > .ng-valid').should('be.visible').click()
      cy.get(':nth-child(2) > :nth-child(2) > .ng-valid').should('be.visible')
      cy.get('.modal-footer > .btn-warning').click()
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click()
      cy.get('.modal-footer > .btn-primary').click()
      cy.get('.active > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="postpossessionUsersCtrl.assignedprojectsUser(gridItem.userid,gridItem)"] > .glyphicon').click()
      cy.get('fieldset > :nth-child(2) > :nth-child(1) > .ng-valid').click()
      cy.get(':nth-child(1) > .chosen-container > .chosen-single > div > b').click()
      cy.get('.col-md-6 > .chosen-container > .chosen-drop > .chosen-search > .chosen-search-input').type(this.actualdata.projectname).type('{enter}')

      cy.wait(1000)
      cy.get('.ng-scope > .chosen-container > .chosen-choices').type(this.actualdata.buildingname).type('{enter}')
      cy.wait(1000)
      cy.get(':nth-child(6) > .col-md-6 > .chosen-container > .chosen-choices > .search-field > .chosen-search-input').type(this.actualdata.unitno).type('{enter}')
      //cy.get('.modal-footer > .btn-primary').click()             //for save
      cy.get('.modal-footer > .btn-warning').click()               //for cancel
it ('search filter for Pre-possession',function(){

    cy.xpath("//a[@role='button']").click()                     //for click on search filter for preppossession
    cy.xpath("//input[@name='fullname']").type()                //search by Name
    cy.Bylable("Search")                                       //click on search
    cy.xpath("//td[@field-name='name']").contain('')            //assertion for searched result.
    cy.Bylable("Clear")                                         //click on clear searched 
})
   })
   it('Possession',function(){
    cy.get('#newUserBtn').click()
    cy.get('input[type="radio"][value="owner"]').check()
          cy.wait(1000)
          cy.get('input[type="radio"][value="possession"]').check()
          cy.xpath('/html/body/div[1]/div/div/form/div[5]/div[1]/div/div/div/div').click({force : true})
          cy.xpath("/html/body/div[1]/div/div/form/div[5]/div[1]/div/div/div/div/div/div/input").type(this.actualdata.projectname).type('{enter}')
          cy.wait(1000)
          cy.xpath('/html/body/div[1]/div/div/form/div[5]/div[2]/div/div/div/div/ul/li/input').type(this.actualdata.buildingname).type('{enter}')
          cy.wait(1000)
          cy.xpath('/html/body/div[1]/div/div/form/div[6]/div/div/div/div/div/ul/li/input').type(this.actualdata.unitno).type('{enter}')
          cy.wait(1000)
          cy.get('#bookingidinput0').type(this.actualdata.BookingID)
          //cy.get('#exampleInput').type('19102022')

   })
   .then('check added user',function(){
    cy.get('#externalusers').click()                                        //go to extrnal user
    cy.get('#possession').click().should('be.visible')                   // Click on possession
    cy.get('[style=""] > [field-name="name"]').should('be.visible','Ritesh Kate')    //Assertion for added user.

   })

    
    })

  })