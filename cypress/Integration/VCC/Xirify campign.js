/// <reference types="cypress" />


describe('settelment/campaign',function(){

    it('campaign',function(){

        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code

        cy.get(':nth-child(7) > .MuiSvgIcon-root').click({force:true})          //Go to settelment
        cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click({force:true})           //for go to campaign

        cy.xpath('//*[@id="panel1a-header"]').click({force:true})                                                                           //for search option
        cy.xpath("//input[@name='businessName']").type('BU474818')                                                                      //for buisness id search
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[5]/button').click({force:true})                                                    //for search button
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[1]').contains('BU474818')           // Validation of search by ID
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[4]/button').click({force:true})                                                  //For reset
        .then('search by buisness name',function(){
        cy.xpath("//input[@name='businessName']").type('Morya')                                                                    //for buisness name search
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[5]/button').click({force:true})                                                    //for search button
      //  cy.xpath('//*[@id="enhanced-table-checkbox-0"]').contains('Morya')                                                        //for Buisness name validation
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[4]/button').click({force:true})                                                  //For reset
       
        .then('Export',function(){
        cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary']").click({force:true})   //for Export
       // cy.xpath('//*[@download="campaign_summary.csv"]').click({force:true})                    //for save export file
       
       })
        })
        

    })
})