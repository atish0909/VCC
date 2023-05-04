/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('Admin', function()

{
    it('1st TC', function(){
    const lp= new LoginPage()

           lp.visit()
           lp.username('vastclientcare@gmail.com')
           lp.passwor('Vast@123')
           lp.button()
           cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
           cy.title().should('be.equal','VAST ClientCare')

    })

    it('dashboard', function(){
           cy.get('div[class="dashboard-coun t-heading"]').should('be.visible')
           cy.get('div[class="dashboard-newc ount-label"]').should('be.visible')
           cy.get('div[class="dashboard-userscount-label"]').should('be.visible')
           cy.get('div[class="dashboard-userscount-label ng-binding"]').should('be.visible')

     
     } )
     
     

     it('User', function(){
       
           cy.get('a[ui-sref="users.externaluserstab.externalusers"]').click()
       .then(function(){

        
           cy.get('#newUserBtn').should('be.visible').click()
           cy.get('input[type="radio"]').check()
           cy.get('input[type="radio"][value="crmexecutive"]').check()
           cy.get('input[placeholder="User First Name"]').type('Atish')
           cy.get('input[placeholder="User Last Name"]').type('Jadhav')
           cy.get('input[placeholder="User Email address"]').type('atishjadhav@gmail.com')
           cy.get('input[placeholder="User Contact Email address"]').type('atishj@valueaddsofttech.com')
           cy.get('input[placeholder="User Phone Number"]').type('9978734564')
           const fl= "Images/DemoImg.jpg"
           cy.get('#fileattachment').attachFile(fl)
           cy.get('.modal-footer > .btn-warning').click() //cancel cy.get('.modal-footer > .btn-primary').click()

           cy.get('#admin').click().should('be.visible','Name (Username)')
           cy.get('#activeAdminBtn').click().should('be.visible','Do you want to inactivate VAST ClientCare admin?')
           cy.xpath('//button[@class="btn btn-sm btn-warning"]').click()
           cy.xpath('//button[@class="btn btn-warning btn-xs"]').click()
           cy.xpath('//button[@class="btn btn-sm btn-primary"]').click()
        //cy.wait(1000)
        //cy.get('.toast').should('be.visible') 
           cy.get('#btnaccepted').should('be.visible')
           cy.wait(1000)
       .then(function(){
           cy.get('#dgmTab').click()
           cy.get('.board > .row').should('be.visible')
           cy.wait(1000)
           cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-danger > .glyphicon').click().should('be.visible','Do you want to inactivate Mr Super  DGM?')
           cy.xpath('//button[@class="btn btn-sm btn-warning"]').click()
           cy.get('.active > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > .btn-warning > .glyphicon').click()
           cy.xpath('//button[@class="btn btn-sm btn-primary"]').click()
         // cy.get('.toast-message').should('be.visible')

        })
      .then(function(){
           cy.get('#facilitymember').click()
           cy.get('.board > .row').should('be.visible')


        })
       .then(function(){
           cy.get('#facilitymember').click()
           cy.get('.board > .row').should('be.visible')
           cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnDisable > .glyphicon').click().should('be.visible','Do you want to inactivate Mr Electricity  facility?')
           cy.get('.modal-footer > .btn-warning').click()
           cy.get('.active > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()
           cy.get('.modal-footer > .btn-primary').click()


        })
        .then(function(){
            cy.get('#allzones').click()
            cy.get('#allzonas').click()
            cy.get('.board > .row').should('be.visible')
            cy.get('[style=""] > [field-name="name"] > .tr-ng-cell > div.ng-scope > div > #btzonesno').click()
            cy.wait(2000)
            cy.get('[field-name="name"] > .tr-ng-cell > div.ng-scope > div > .ng-binding').click()
            cy.get('.board > .row').should('be.visible')
            cy.get('.col-md-10 > .btn').click()
            cy.get('#zonalHead').click()
            cy.get('ui-view.ng-scope > .row').should('be.visible')
            

        })
        .then(function(){
            cy.get('#authrequests').click()
            cy.wait(2000)
            cy.get('[style=""] > .auth-action-btn-td > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .auth-action-btn-div > .btn-success > .glyphicon').click()
            cy.get('.modal-body').should('be.visible')
            cy.get('.modal-footer > .btn-warning').click() //cancel cy.get('.btn-primary').click()
            cy.get('[style=""] > .auth-action-btn-td > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .auth-action-btn-div > .btn-danger > .glyphicon').should('be.visible')
            
        }) 
        .then(function(){
            cy.get('#externalusers').click()
            cy.get('#allexternal').should('be.visible')
            cy.get('#prepossession').click().should('be.visible')
            cy.get('#checkboxes-0').check().should('be.checked')
            cy.xpath('//button[@class="btn btn-sm btn-warning"]').click().should('be.visible',' users to the post possession module')
            cy.get('.modal-footer > .btn-warning').click() // cancel cy.get('.modal-footer > .btn-primary').click()
            cy.get('#checkboxes-0').uncheck()   
            cy.get('#postpossession').click()
            cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="postpossessionUsersCtrl.raiseRequest(gridItem._id,gridItem)"] > .glyphicon').click()
            cy.get('.modal-body > :nth-child(3) > .form-control').type('Automation script')
            const f2= "Images/DemoImg.jpg"
            cy.get(':nth-child(5) > input').attachFile(f2)
            cy.get('.btn-success > .fa').click()
            cy.wait(2000)
            cy.get('.modal-footer > .btn-warning').click()
            cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="postpossessionUsersCtrl.assignedprojectsUser(gridItem.userid,gridItem)"] > .glyphicon').click()
            cy.get('fieldset > :nth-child(2) > :nth-child(1) > .ng-valid').should('be.visible').click()
            cy.get(':nth-child(2) > :nth-child(2) > .ng-valid').should('be.visible')
            cy.get('.modal-footer > .btn-warning').click()
                    })
        .then(function(){
            cy.get('#crmexecutives').click()
            cy.get(':nth-child(2) > .row').should('be.visible')
            cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > [ng-click="CRMExecutiveCtrl.goToAccessLevel(gridItem._id,gridItem)"] > .glyphicon').click()
            cy.get('[title="Baner"] > :nth-child(1) > .ivh-treeview-twistie-wrapper > .ivh-treeview-twistie > .ivh-treeview-twistie-collapsed > .glyphicon').click()
            cy.get('[title="VAST"] > :nth-child(2) > .ng-isolate-scope > .ivh-treeview-checkbox').check().should('be.checked')
            cy.get('#updateAccessBtn').click()
            cy.wait(2000)
            cy.get('.row.ng-scope > .col-md-9').should('be.visible')
                    })
       .then(function(){
            cy.get('#crmheads').click()
            cy.get('.col-md-12').should('be.visible')
         
                    })
        .then(function(){
            cy.get('#crmheads').click()
            cy.get('.ng-binding > .pull-right').click()
            cy.get('[style="margin-bottom: 10px;"] > :nth-child(1) > .form-control').type('sneha')
            cy.get(':nth-child(3) > .form-group > .form-control').type('gsneha@valueaddsofttech.com')
            cy.get('[ng-click="CRMHeadCtrl.searchUsers();resetPage()"]').click()
            cy.wait(2000)
            cy.get('.p-title > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-binding').should('be.visible')
            cy.get('.ng-binding > .pull-right').click()
            cy.wait(3000)


        .then(function(){
            cy.get('#profilePicid').click()
            cy.get('.dropdown-menu > :nth-child(5) > a').click()
            cy.get('#flippyfrontid > .login_form > #logo > a > img').should('be.visible')

                      })   
                    })
    })

     })
})