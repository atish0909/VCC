/// <reference types="cypress" />



import LoginPage from '../POM/LoginPage'

describe('Brouchres', function(){

before(function(){
    cy.fixture('brochure').then(function(data){
        this.actualdata=data
    })

})



    it('Login', function(){
    const lp= new LoginPage()

           lp.visit()
           lp.username(this.actualdata.username)
           lp.Password(this.actualdata.Password)
           lp.button()
           cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
           cy.title().should('be.equal','VAST ClientCare')

    })

    it('Brochures', function(){  
       
         cy.xpath("//a[@ui-sref='brochure']").click()                            //Go to Broucher 
         cy.get(':nth-child(2) > .row').should('be.visible')                      // Validation 
         cy.xpath("//button[@id='addfunctionalarea']").should('be.visible').click()       //Add new Brochure
         cy.get('.modal-title > h4').contains("New Brochure")                           //Validation
         cy.xpath("//input[@placeholder='Enter Title']").type(this.actualdata.Title)
         cy.xpath("//input[@placeholder='Enter Brochure Link']").type(this.actualdata.Link)
         cy.xpath("//input[@placeholder='Enter Location']").type(this.actualdata.Location)

         const fl= "Images/DemoImg.jpg"
         cy.get(':nth-child(4) > input').attachFile(fl)
         cy.get('tbody > .ng-scope > :nth-child(1) > .ng-binding').should('be.visible')
        // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()     //for save
        cy.xpath("//button[@class='btn btn-sm btn-warning']").click()          //for cancel
        .then(function(){
            cy.xpath("//button[@class='btn btn-warning btn-xs']").click()      //Edit 
            cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()        //update
            cy.get('.fa').click()                                      //view
            cy.get('.modal-footer > .btn').click()

        })

   
     } )

    
     
     })
