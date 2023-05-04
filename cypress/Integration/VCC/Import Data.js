/// <reference types="cypress" />

import LoginPage from '../POM/LoginPage'

describe('Import data',function(){

    before(function(){
        cy.fixture('login').then(function(data){
            this.actualdata=data
        })
    })

    it('import file',function(){
    const lp=new LoginPage()
    lp.visit()
    lp.username(this.actualdata.username)
    lp.passwor(this.actualdata.Password)
        
        cy.wait(2000)

        .then(function(){
            cy.xpath("//a[@ui-sref='importdata.prepossession.user']").click()
            cy.get(':nth-child(2) > :nth-child(1) > .pull-left > .nav > #dgmTab > a > strong').click()
           cy.get(':nth-child(1) > .p-title > .tr-ng-cell > [ng-switch-when="true"] > [ng-transclude=""] > .ng-scope > #xlsxAttachmentFile').click()

            const xl="Xldata/template.xlsx"
            cy.xpath("//input[@type='file']").attachFile(xl)
            cy.xpath("//button[@class='btn btn-success btn-xs']").click()




        })
    })

    
})