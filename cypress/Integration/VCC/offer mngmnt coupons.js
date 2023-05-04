/// <reference types="cypress" />



describe('Offer Mangments coupon',function(){

    it('Add new Promo code Campaign',function(){

        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code
    })
         it('Delet Coupon',function(){

            cy.get(':nth-child(8) > .MuiListItemText-root > .MuiTypography-root').click()            //Open Offer Management
            cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()    //go to coupon
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/thead/tr/th[1]/span/span[1]/input').check()
         //   cy.get('.MuiGrid-grid-xs-1 > .MuiButtonBase-root > .MuiButton-label').click()                            //To delet
         })
         it('Table Headers',function(){
            cy.get('.MuiTableRow-root > :nth-child(2) > .MuiButtonBase-root').contains('Campaign Name')                   //header campaign name
            cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').contains('Campaign Id')                     //header Campaign Id
            cy.get(':nth-child(4) > .MuiButtonBase-root').contains('Promo Code')                                         //header Promo Code
            cy.get('.MuiTableRow-root > :nth-child(5) > .MuiButtonBase-root').contains('Offer Code')                     //header Offer Code
            cy.get(':nth-child(6) > .MuiButtonBase-root').contains('Coupon Code')                                        //header Coupon Code
            cy.get(':nth-child(7) > .MuiButtonBase-root').contains('Invitation Code')                                   //header Invitation Code
            cy.get(':nth-child(8) > .MuiButtonBase-root').contains('Applicability')                                     //header Applicability
            cy.get(':nth-child(9) > .MuiButtonBase-root').contains('Category')                                          //header Category
            cy.get(':nth-child(10) > .MuiButtonBase-root').contains('Amount')                                          //header Amount
            cy.get(':nth-child(11) > .MuiButtonBase-root').contains('Sponsored By')                                     //header Sponsored By
            cy.get(':nth-child(12) > .MuiButtonBase-root').contains('Issued To ConsumerID')                            //header Issued To ConsumerID
            cy.get(':nth-child(13) > .MuiButtonBase-root').contains('Issued To Consumer Name')                         //header Issued To Consumer Name
           
            cy.get(':nth-child(15) > .MuiButtonBase-root').contains('Expiry Date')                                     //header Expiry Date
            cy.get(':nth-child(16) > .MuiButtonBase-root').contains('Status')                                         //header Status
            cy.get(':nth-child(17) > .MuiButtonBase-root').contains('Consumed At')                                    //header Consumed At
            cy.get(':nth-child(18) > .MuiButtonBase-root').contains('Consumed On')                                    //header Consumed On
            cy.get(':nth-child(19) > .MuiButtonBase-root').contains('Order Id')                                      //header Order Id
            cy.get(':nth-child(20) > .MuiButtonBase-root').contains('Settled On')                                    //header Settled On
            cy.get('.MuiTableRow-root > :nth-child(21) > .MuiButtonBase-root').contains('Is Deleted')                //header Is Deleted

         })

         it('search by',function(){ 
            cy.xpath("//div[@id='panel1a-header']").click({force:true})                                        //click on search     
         
         .then('search by coupon code',function(){
            cy.xpath("//input[@name='couponCode']").type('KTXH1N')                                                  //By coupon code
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                              //Click on search
            cy.xpath('//*[@id="enhanced-table-checkbox-0"]').should('include.text','KTXH1N')                                //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                             //click on reset
         })
         .then('search by applicability',function(){
            cy.xpath("//input[@name='applicability']").type('Business')                                                             //By Applicabilty
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                              //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[3]').should('include.text','Business')               //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                            //click on reset
         })
         .then('search by category',function(){
            cy.xpath("//div[@id='mui-component-select-category']").click()                                       //click on category
            cy.xpath("//li[@data-value='ReferAndEarn']").click({force:true})                                    //search by refer and earn
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                          //Click on search
            cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(9)').contains('ReferAndEarn')           //validation 
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                        //click on reset
         })
         .then('search by promotional',function(){
            cy.xpath("//div[@id='mui-component-select-category']").click()                                          //click on category
            cy.xpath("//li[@data-value='Promotional']").click({force:true})                                        //search by refer and earn
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                             //Click on search
            cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(9)').contains('ReferAndEarn')              //validation 
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                           //click on reset
         })
         .then('search by sponcered by',function(){
            cy.xpath("//div[@id='demo-simple-select-standard']").click()                                                           //click on sponcered by
            cy.xpath("//li[@data-value='Business']").click()                                                                      //search by buisness
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                            //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[6]').should('include.text','Business')      //validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                           //click on reset
         })
         .then('sponcered by xirify',function(){
            cy.xpath("//div[@id='demo-simple-select-standard']").click()                                                          //click on sponcered by
            cy.xpath("//li[@data-value='Platform']").click()                                                                     //search by buisness
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                           //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[6]').contains('Xirify')     //validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                         //click on reset
         })
         .then('search by consumer id',function(){
            cy.xpath("//input[@name='consumerId']").type('CM148182')                                                                //By consumer id
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                              //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[7]').should('include.text','CM148182')         //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                            //click on reset
         })
         .then('search by consumer name',function(){
            cy.xpath("//input[@name='consumerFirstName']").type('Anagha')                                                         //By consumer first name
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                            //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[8]').should('include.text','Anagha')        //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                           //click on reset
         })
         .then('search by last name',function(){
            cy.xpath("//input[@name='consumerLastName']").type('Maske')                                                         //By consumer last name
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                          //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[8]').should('include.text','Maske')         //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                         //click on reset
         })
         .then('search by status',function(){
            cy.xpath("//div[@id='demo-mutiple-checkbox']").click({force:true})                                                         //click on satus
            cy.xpath("//li[@data-value='Issued']").click()                                                                            //search by issued
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                                 //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[11]').should('include.text','Issued')            //for validations
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                                //click on reset
         })
         .then('search by consumed',function(){
            cy.xpath("//div[@id='demo-mutiple-checkbox']").click({force:true})                                                              //click on satus
            cy.xpath("//li[@data-value='Consumed']").click()                                                                               //search by consumed
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                                     //Click on search
           cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[11]').should('include.text','Consumed')              //for validations
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                                    //click on reset
         })
         .then('search by Settled',function(){
            cy.xpath("//div[@id='demo-mutiple-checkbox']").click({force:true})                                                            //click on satus
            cy.xpath("//li[@data-value='PayBackSeller']").click()                                                                         //search by settled
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                                    //Click on search
            cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[11]').should('include.text','Settled')             //for validations
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                                   //click on reset
         })
         .then('search by Invalid',function(){
            cy.xpath("//div[@id='demo-mutiple-checkbox']").click({force:true})                                                           //click on satus
            cy.xpath("//li[@data-value='Invalid']").click()                                                                              //search by Invalid
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                                    //Click on search
           // cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[11]').should('include.text','Invalid')              //for validations
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                                   //click on reset
         })
         .then('search by Expired',function(){
            cy.xpath("//div[@id='demo-mutiple-checkbox']").click({force:true})                                                            //click on satus
            cy.xpath("//li[@data-value='Expired']").click()                                                                              //search by Expired
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                                                    //Click on search
           cy.xpath('//*[@id="root"]/div/div/div[2]/div[4]/div/div/div[2]/table/tbody/tr[1]/td[11]').should('include.text','Expired')              //for validations
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()                                                   //click on reset
         })
         .then('search by campaignName',function(){
            cy.xpath("//input[@name='campaignName']").type('TEST12345')                               //By consumer campaignName
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()                 //Click on search
            cy.xpath('//*[@id="enhanced-table-checkbox-0"]').should('include.text','TEST12345')                   //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()               //click on reset
         })
         .then('search by campaignId',function(){
            cy.xpath("//input[@name='campaignId']").type('JC2SUS')                                //By consumer campaignId
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()             //Click on search
            cy.xpath('//*[@id="enhanced-table-checkbox-0"]').should('include.text','JC2SUS')                 //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()            //click on reset
         })
         .then('search by offerCode',function(){
            cy.xpath("//input[@name='offerCode']").type('LUB9J0')                                  //By consumer offerCode
            cy.get(':nth-child(22) > .MuiButtonBase-root > .MuiButton-label').click()             //Click on search
            cy.xpath('//*[@id="enhanced-table-checkbox-0"]').should('include.text','LUB9J0')                  //for validation
            cy.get(':nth-child(21) > .MuiButtonBase-root > .MuiButton-label').click()            //click on reset
            cy.xpath("//div[@id='panel1a-header']").click({force:true})                         //click on search  
         })
        })
         it('Export',function(){
           // cy.get('.MuiTableBody-root > :nth-child(1) > .MuiTableCell-paddingCheckbox > .MuiButtonBase-root > .MuiIconButton-label > .jss656').check()
         //  cy.get('.MuiTypography-body1 > .MuiButtonBase-root').click()                      //click on export


         })
    })
