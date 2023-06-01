/// <reference types="cypress" />




describe('Offer code campaign',function(){

    it('Offer code campaign',function(){
        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code


    })
         it('Add new Promo code Campaign',function(){

            cy.get(':nth-child(8) > .MuiListItemText-root > .MuiTypography-root').click()            //Open Offer Management
            cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()       //Go to Campaign tab
            cy.get('[tabindex="-1"] > .MuiTab-wrapper').click()                     //go to offer code campaign
        .then('Add new ',function(){

            cy.get(':nth-child(2) > .MuiButton-label').should('be.visible').click()               //click on add new prmo code campaign
            cy.xpath("//input[@placeholder='Campaign Name *']").type('Diwali')    
            cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-11-25')             //Start Date
            cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-11-30')            //End date

            cy.get(':nth-child(14) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click()
            cy.xpath('//*[@id="menu-sponsoredBy"]/div[3]/ul/li[2]').click()                      //search by xirify

            cy.get(':nth-child(15) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select').click()
            cy.xpath('//li[@data-value="Coupons"]').click({ force: true })
            
            cy.xpath("//input[@placeholder='Coupon Name *']").type('Diwali coupon')
            cy.xpath("//input[@placeholder='Coupon Total Amount/User']").type('1000')
            cy.xpath("//input[@placeholder='Number of Coupons *']").type('50')
            cy.xpath("//input[@placeholder='Min. Order Value (Per Coupon) *']").type('500')
            cy.xpath("//input[@placeholder='Coupon Validity (Days) *']").type('5')
            cy.get('.jss667 > .MuiContainer-root').click()                   //radio button
            cy.get(':nth-child(33) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('caution')
            cy.get('.MuiGrid-container > :nth-child(45)').click()
            cy.get('.jss722').type('ABCDEFG')

            const f2= "Images/DemoImg.jpg"
            cy.get('.jss728 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').attachFile(f2)                       //upload button
            cy.get(':nth-child(54) > .MuiButtonBase-root > .MuiButton-label').click()                //for cancel
          //  cy.get(':nth-child(55) > .MuiButtonBase-root').click()                //for Add/save
        })
    })

          it('Header',function(){
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').contains('Campaign State')                      //header Campaign State
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').contains('Sponsored By') 
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').contains('Campaign ID')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > [scope="row"]').contains('Campaign Name')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(5)').contains('Offer Code')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').contains('Reward Type')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(7)').contains('Coupon Name')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(8)').contains('Coupon Total Amount/User ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(9)').contains('Coupon Value ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(10)').contains('Start Date')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(11)').contains('End Date')
            //cy.get('.jss980').contains('Coupon Validity (days)')
            //cy.get('.MuiTableHead-root > .MuiTableRow-root > .jss981').contains('Description')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(14)').contains('Total Coupons Amt ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(15)').contains('Coupons Issued')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(16)').contains('Coupons Claimed')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(17)').contains('Total Spend ₹')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(18)').contains('Coupons Expired')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(19)').contains('Status')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(23)').contains('Assign Business')
            cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(24)').contains('Assign Shopper')


          })

   it('search',function(){

    cy.xpath("//div[@id='panel1a-header']").click()                              //click on search

   
   .then('search by campaign state',function(){
              
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
    cy.xpath("//li[@data-value='Live']").click({ force: true })
    cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Live')                     //for validation
    cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
      })
      .then('Completed state',function(){
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
        cy.xpath("//li[@data-value='Completed']").click({ force: true })
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Completed')                     //for validation
        cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
      })
      .then('Offline state',function(){
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
        cy.xpath("//li[@data-value='Offline']").click({ force: true })
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[1]').contains('Offline')                     //for validation
        cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
    })      
    .then('search by campaign name',function(){
        cy.xpath('//input[@name="campaignName"]').type('new login')
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr/td[4]').contains('new login')     //for validation
        cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
    })  
    .then('search by campaign ID',function(){
        cy.xpath('//input[@name="campaignId"]').type('7FFDJ0')
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr/td[3]').contains('7FFDJ0')     //for validation
        cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
    })         
    .then('search by reward type',function(){
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
        cy.xpath('//li[@data-value="Coupons"]').click({ force: true })
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[6]').contains('Coupons')             //for validation
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
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[2]').contains('Business')
        cy.get(':nth-child(11) > .MuiButtonBase-root > .MuiButton-label').click()                             //for reset
    })
    .then('search by sponcerd ',function(){
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > #demo-simple-select-standard').click()
        cy.xpath('//li[@data-value="xirify"]').click()                      //search by buisness
        cy.get(':nth-child(12) > .MuiButtonBase-root > .MuiButton-label').click()                            //for search
        cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[4]/div/div[2]/table/tbody/tr[1]/td[2]').contains('Xirify')
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
        cy.get(':nth-child(1) > :nth-child(21) > .MuiButtonBase-root > .MuiIconButton-label > .MuiAvatar-root > .MuiSvgIcon-root > path').click()
       cy.xpath("//input[@placeholder='Terms And Conditions *']").clear()
       cy.xpath("//input[@placeholder='Terms And Conditions *']").type('ABCDEFG')
       cy.get(':nth-child(56) > .MuiButtonBase-root > .MuiButton-label').click()              //for cancel
       // cy.get(':nth-child(57) > .MuiButtonBase-root > .MuiButton-label').click()              //for save
    
    .then('Assigne buisness',function(){
        cy.get(':nth-child(1) > :nth-child(23) > .MuiButtonBase-root > .MuiIconButton-label > .MuiAvatar-root > svg > #Group_10757 > #Layer_2 > #Layer_1 > #Path_7238').click()                  //Assigne buisness
        cy.get('#mui-component-select-categoryFilter').click({force:true})
        cy.xpath('//*[@id="menu-categoryFilter"]/div[3]/ul/li[1]/span[1]/span[1]/input').check()
        cy.wait(2000)
        cy.get('.jss837 > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click({force:true})            //for cancel
       // cy.get('.jss837 > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click({force:true})            //for save

    })
     .then('Assigne shop',function(){
        cy.get(':nth-child(2) > :nth-child(24) > .MuiButtonBase-root > .MuiIconButton-label > .MuiAvatar-root > svg > #Group_20335 > #Group_20292 > #Ellipse_158').click()    //Click on Assigne buisness
        cy.get(':nth-child(2) > :nth-child(24) > .MuiButtonBase-root > .MuiIconButton-label > .MuiAvatar-root > svg > #Group_20335 > #Group_20292 > #Ellipse_158').click({force: true})
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()         //for cancel
       // cy.get('.MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()         //for save
     })
    })
     it('campaign report',function(){
        cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(1)').click()                       //click one campaign
        //cy.get('.btn > img').click()                                                                 //save report
        cy.go('back')
        cy.wait(2000)
     
     .then('export',function(){
        cy.get('.jss1241 > :nth-child(1) > .MuiButton-label').click()                     //for click on export
        cy.wait(6000)
      //  cy.get('.btn > img').click()                                                     //for export
    })
     })

        })
           


         