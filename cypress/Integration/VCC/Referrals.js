/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Referrals', function()


{
    it('Login', function(){
    const lp= new LoginPage()

           lp.visit()
           lp.username('vastclientcare@gmail.com')
           lp.passwor('Vast@123')
           lp.button()
           cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
           cy.title().should('be.equal','VAST ClientCare')

    })

    it('Referrals', function(){  
      cy.xpath("//a[@ui-sref='referrals']").click()                                  //Referrals
      cy.get('.content > :nth-child(3) > .row').should('be.visible')                //Validation 
      cy.get('.ng-binding > .pull-right').click()                                   // click on search option  
   
      .then('searc by name',function(){
        cy.xpath("//input[@name='referralName']").type("Atish ")                               //Search  by referral name
        cy.get('[ng-click="referralsCtrl.searchReferrals();resetPage()"]').click()              //for search
        cy.get('.p-title').contains("Atish Jadhav ")                                            //Validation search by name
        cy.get('[ng-click="referralsCtrl.clearSearchParams();resetPage();"]').click()          //for clear search
      })
      .then('search by Referral Email ID',function(){
        cy.xpath("//input[@name='referralEmail']").type("Atish ")                              //search by email ID
        cy.get('[ng-click="referralsCtrl.searchReferrals();resetPage()"]').click()              //for search
         
      })
      
    cy.wait(2000)    
    cy.get('[ng-click="referralsCtrl.searchReferrals();resetPage()"]').click()              //for search
    cy.get('.p-title').contains("Atish Jadhav ")
    cy.get('[ng-click="referralsCtrl.clearSearchParams();resetPage();"]').click()          //for cancel search
    cy.get('.ng-binding > .pull-right').click()    
     } )

    
     
     })
