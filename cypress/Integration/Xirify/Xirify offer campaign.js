/// <reference types="cypress" />




describe('Offer/campaign',function(){

    it('Promo code campaign',function(){

        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code
    })
         it('Add new Promo code Campaign',function(){

            cy.get(':nth-child(8) > .MuiListItemText-root > .MuiTypography-root').click()            //Open Offer Management
            cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()       //Go to Campaign tab
            cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[2]/button[2]').should('be.visible').click()               //click on add new prmo code campaign
            cy.xpath("//input[@placeholder='Campaign Name *']").type('Diwali')    
            cy.get('.MuiContainer-root > .MuiGrid-container > :nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-11-25')             //Start Date
            cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-11-30')            //End date
            cy.xpath("//input[@placeholder='Campaign Total Budget *']").type('250000')                        //Total budget
            cy.get(':nth-child(13) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click({force:true})
            cy.get('#menu-rewardType > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click({force:true})
            cy.xpath("//input[@placeholder='Coupon Name *']").type('Diwali coupon')
            cy.xpath("//input[@placeholder='Coupon Total Amount/User']").type('1000')
            cy.xpath("//input[@placeholder='Number of Coupons *']").type('50')
           // cy.xpath("//input[@placeholder='Value per Coupon']").type('100')
            cy.xpath("//input[@placeholder='Min. Order Value (Per Coupon) *']").type('500')
            cy.xpath("//input[@placeholder='Coupon Validity (Days) *']").type('5')
            cy.get(':nth-child(26) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click({force:true})
            cy.get('#menu-sponsoredBy > .MuiPaper-root > .MuiList-root > [tabindex="-1"]').click({force:true})
            cy.xpath("//input[@placeholder='Terms And Conditions *']").type('caution')
          
            cy.get('.MuiGrid-container > :nth-child(39)').click()
            cy.get('.jss674').type('ABCDEFG')

        
            const f2= "Images/DemoImg.jpg"
            cy.get('.jss680 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').attachFile(f2)                       //upload button
            cy.xpath("//input[@name='promoCode']").type('ABC')
            cy.get('.MuiButtonGroup-root > .MuiButtonBase-root > .MuiButton-label').click()

            cy.xpath('/html/body/div[3]/form/div[2]/div/div[49]/button').click()                //for cancel
          //  cy.xpath('/html/body/div[3]/form/div[2]/div/div[50]/button').click()                //for Add/save
         })

          it('Header',function(){
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').contains('Campaign State')                      //header Campaign State
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').contains('Sponsored By') 
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').contains('Campaign ID')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > [scope="row"]').contains('Campaign Name')
            
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(5)').contains('Reward Type')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').contains('Coupon Name')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(7)').contains('Coupon Total Amount/User ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(8)').contains('Coupon Value ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(9)').contains('Start Date')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(10)').contains('End Date')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(13)').contains('Total Coupons Amt ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(14)').contains('Coupons Issued')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(15)').contains('Coupons Claimed')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(16)').contains('Coupons Remaining')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(17)').contains('Coupons Expired')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(18)').contains('Budget Total ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(19)').contains('Budget Claimed ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(20)').contains('Budget Remaining ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(21)').contains('Status')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(25)').contains('Assign Business')
          
          })
          
          it('search',function(){

            cy.xpath("//div[@id='panel1a-header']").click()                              //click on search
        
            .then('search by campaign state',function(){
              
                cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath("//li[@data-value='Live']").click({ force: true })
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Live')                     //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
                  })
            .then('Completed state',function(){
                cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath("//li[@data-value='Completed']").click({ force: true })
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Completed')                     //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })
            .then('Offline state',function(){
                cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath("//li[@data-value='Offline']").click({ force: true })
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Offline')                     //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })      
            .then('search by campaign name',function(){
                cy.xpath('//input[@name="campaignName"]').type('Regression')
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[2]/td[4]').contains('Regression')     //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })  
            .then('search by campaign ID',function(){
                cy.xpath('//input[@name="campaignId"]').type('YMV5KS')
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr/td[3]').contains('YMV5KS')     //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })   
            .then('search by reward type',function(){
                cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath('//li[@data-value="Coupons"]').click({ force: true })
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[2]/td[5]').contains('Coupons')             //for validation
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            }) 
            .then('search by date',function(){
                cy.xpath('//input[@name="campaignTimeDateRangeStart"]').type('2022-10-01')           //Start date
                cy.xpath('//input[@name="campaignTimeDateRangeEnd"]').type('2022-10-30')             //End date
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.wait(2000)
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })
            .then('search by sponcerd ',function(){
                cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath('//li[@data-value="business"]').click()                      //search by buisness
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[2]').contains('Business')
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })
            .then('search by sponcerd ',function(){
                cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
                cy.xpath('//li[@data-value="xirify"]').click()                      //search by buisness
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[2]').contains('Xirify')
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })
            .then('search by status',function(){
                cy.xpath("//input[@type='radio'][@value='Active']").click()                                //for Active radio button
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.wait(2000)
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
            })
            .then('search by inactive status',function(){
                cy.xpath("//input[@type='radio'][@value='InActive']").click()                                //for Active radio button
                cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
                cy.wait(2000)
                cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
                cy.xpath("//div[@id='panel1a-header']").click()                              //click on search
            })
        })

            it('Edit',function(){
                cy.get(':nth-child(1) > :nth-child(23) > .MuiButtonBase-root > .MuiIconButton-label > .MuiAvatar-root > .MuiSvgIcon-root').click()
               cy.xpath("//input[@placeholder='Terms And Conditions *']").clear()
               cy.xpath("//input[@placeholder='Terms And Conditions *']").type('ABCDEFG')
                cy.xpath('/html/body/div[3]/form/div[2]/div/div[50]/button').click()              //for cancel
               // cy.xpath('/html/body/div[3]/form/div[2]/div/div[51]/button').click()              //for save
            
            .then('Assigne buisness',function(){
                cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/div/div[2]/table/tbody/tr[1]/td[25]/button').click()                  //Assigne buisness
                cy.get('#mui-component-select-categoryFilter').click({force:true})
                cy.xpath('//*[@id="menu-categoryFilter"]/div[3]/ul/li[1]/span[1]/span[1]/input').check()
                cy.wait(2000)
                cy.get('.jss816 > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})            //for cancel
               // cy.get('.jss816 > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click({force:true})            //for save

            })
        })
            it('export',function(){
                cy.get('.jss418 > :nth-child(1) > .MuiButton-label').click()                     //for click on export
                cy.wait(6000)
              //  cy.get('.btn > img').click()                                                     //for export
            
            .then('campaign report',function(){
                cy.get(':nth-child(10) > [style="color: rgb(237, 208, 43);"]').click()                         //click on one campaign
                cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(2)').click()                           
                cy.get('#tableTitle > .MuiButtonBase-root > .MuiButton-label').click()                        //click on export
              //  cy.get('.btn > img').click()                                                                  //click on save report
               cy.go('back')
               cy.go('back')                                                                                  //go to back page

            })
        })
        
         })
       
        

       
       
        

   
