/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('FAQ fix',function()
{
 
    before(function(){
        cy.fixture('faqd').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('FAQ', function(){  
      const lp= new LoginPage()

      lp.visit()
      lp.username(this.actualdata.username)
      lp.passwor(this.actualdata.Password)
      lp.button()
      cy.url().should('be.equal','https://clientcaretest.valueaddsofttech.com/#!/admindashboard')
      cy.title().should('be.equal','VAST ClientCare')

      cy.wait(2000)
      cy.xpath("//a[@ui-sref='faq.faqs']").click()        //Go to FAQs
      cy.get(':nth-child(2) > .row').should('be.visible')                                         //validation
      cy.xpath("//button[@id='addfunctionalarea']").should('be.visible').click()                  //Add new FAQ
     cy.xpath("//input[@name='addFaqs']").type(this.actualdata.question)                        //Question
      cy.xpath("//textarea[@placeholder='Enter Answer']").type(this.actualdata.answer)             //Answer
     // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                               //For save
     cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                                 //For cancel
     .then(function(){
      cy.get('[style=""] > [field-name="actions"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()                                              //for edit 
      cy.xpath("//textarea[@placeholder='Enter Answer']").clear().type('10')                    //Edit Answer
     //cy.get('.btn-primary').click()                                                       //For Updte
     cy.get('.modal-footer > .btn-warning').click()                                         //For cancel
     cy.xpath("//input[@placeholder='Search']").type("car")                                      //Search
     cy.get('[tr-ng-grid-body-cell="0"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-binding').should('be.visible')
     
     })

       
     } )
     it('Dos & Donts',function(){

        cy.xpath("//a[@ui-sref='faq.doanddonts']").click()                                 //Dos and Don'ts
        cy.get(':nth-child(2) > .row').should('be.visible')                                 //Validation
        cy.xpath("//button[@id='itemnotcovered']").should('be.visible').click()             //Add new Dos and Donts
        cy.xpath("//input[@placeholder='Enter Title']").type("Car Parking")  
        //cy.get('#taTextElement7388579561098196').type("Please Park Your Vehicle as per Parking Allotted ")      //Description
       // cy.xpath("//button[@class='btn btn-default ng-scope'][@title='Heading 1']").click()            //Change heading
        //cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                        //For save
       cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                            //For cancel
       cy.xpath("//button[@class='btn btn-primary btn-xs']").click()                            //For View 
       cy.wait(1000)
       cy.get('h4').should('be.visible').contains("View")
       cy.xpath("//button[@class='btn btn-sm btn-warning']").click()
       cy.get('.ng-scope > .btn-warning > .glyphicon').click()                               //for Edit 
       cy.get('h4').contains("Edit")                                                         // Edit 
       cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()                       //for update
     })

    
    })

