/// <reference types="cypress" />


describe('Zone',function()
{
 
    before(function(){
        cy.fixture('zone').then(function(data)
        {
             this.actualdata=data

        }) 
    })

    it('zoneHead', function(){  
      cy.visit("https://clientcaretest.valueaddsofttech.com/#!/login")
      cy.get('#inputEmail1').type(this.actualdata.name)
      cy.get('#inputPassword').type(this.actualdata.pass)
      cy.get('#btnsignin').click()
      cy.wait(2000)
      cy.xpath("//a[@ui-sref='zonearea']").click()
      cy.get(':nth-child(2) > .row').should('be.visible')
      cy.get('#addZone') .click()                                                  //for add zone
     // cy.xpath("//input[@name='zonename']").type('Balewadi')    
      cy.xpath("//input[@name='zonename']").type(this.actualdata.zname)                      //fixture data
   //   cy.xpath("//input[@name='zonecity']").type('Pune') 
      cy.xpath("//input[@name='zonecity']").type(this.actualdata.zcity)                          //fixture data
     // cy.xpath("//button[@class='btn btn-sm btn-primary ']").click()             //for save
      cy.xpath("//button[@class='btn btn-sm btn-warning']").click()                //for cancel
      cy.get('[style=""] > .align-td > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #btnEdit > .glyphicon').click()                               //Edit Zone
      cy.get('.btn-primary').click()                                 // for update zone
      cy.get('.toast-message').should('be.visible')                              // Toaster message
      //cy.get('.pull-left > .form-control').type('Baner')
      cy.get('.pull-left > .form-control').type(this.actualdata.search)
      cy.get('[field-name="name"] > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-binding').should('contain','Baner')
      cy.get('.pull-left > .form-control').clear()
   } )

        })
    
