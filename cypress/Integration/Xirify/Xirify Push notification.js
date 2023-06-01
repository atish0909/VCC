///<reference types='cypress' />

describe('Push Notification', function(){

    it('Send New once-Now',function(){

        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code

        cy.get('.MuiList-root > :nth-child(9)').click({force:true})                                      //go to Push Notification
        cy.xpath("//input[@name='businessFilter']").type('Morya Home Decor')                                             //insert buisness name
        cy.xpath("//input[@name='distance']").type('10')                                                   //Insert distance
        cy.xpath("//input[@name='title']").type('New Year offer')                                                      // Insert Notification title
        cy.xpath("//textarea[@name='notificationText']").type('New Year New offer with morya Home decore , Visit now')                                         //Insert Notification text

        .then('Once-Now',function(){
            cy.xpath("//input[@type='radio'][@value='Once-Now']").check()                             //check radio button once now
        //  cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click()          //for send
       //   cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()                                 //For preview
            cy.get(':nth-child(9) > .MuiButtonBase-root').click()                                      //for reset
            })
         })

    it('send New once-Schedule',function(){
        cy.get('.MuiList-root > :nth-child(9)').click({force:true})                                      //go to Push Notification
        cy.xpath("//input[@name='businessFilter']").type('Morya Home Decor')                                             //insert buisness name
        cy.xpath("//input[@name='distance']").type('10')                                                   //Insert distance
        cy.xpath("//input[@name='title']").type('New Year offer')                                                      // Insert Notification title
        cy.xpath("//textarea[@name='notificationText']").type('New Year New offer with morya Home decore , Visit now')                                         //Insert Notification text

        .then('Once-Schedule',function(){
            cy.xpath("//input[@type='radio'][@value='Once-Schedule']").check()                             //check radio button once now
            cy.xpath("//input[@name='scheduledDate']").type('2022-11-30')                                  //schedule on
            cy.xpath("//input[@name='scheduledTime']").type('01:10')                                       //Set time
            cy.wait(2000)
        //  cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click()          //for send
       //   cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()                                 //For preview
            cy.get(':nth-child(9) > .MuiButtonBase-root').click()                                      //for reset
            })
    }) 
    
    it('send New Recurring',function(){

        cy.get('.MuiList-root > :nth-child(9)').click({force:true})                                      //go to Push Notification
        cy.xpath("//input[@name='businessFilter']").type('Morya Home Decor')                                             //insert buisness name
        cy.xpath("//input[@name='distance']").type('10')                                                   //Insert distance
        cy.xpath("//input[@name='title']").type('New Year offer')                                                      // Insert Notification title
        cy.xpath("//textarea[@name='notificationText']").type('New Year New offer with morya Home decore , Visit now')                                         //Insert Notification text

        .then('Recurring',function(){
            cy.xpath("//input[@type='radio'][@value='Recurring']").check()                             //check radio button once now
            cy.xpath("//div[@id='timeLine']").click()                                                  //click on recurring
            cy.xpath("//li[@tabindex='0'][@role='option']").click()                                   //click on daily
        //  cy.xpath("//li[@data-value='Weekly']").click()                                            //click on weekly
        //  cy.xpath("//li[@data-value='Monthly']").click()                                           //click on monthly
            cy.xpath("//input[@name='scheduledTime']").type('01:10')                                       //Set time
            cy.xpath("//input[@name='recurringStartDate']").type('2022-11-30')                                  //schedule on start date 
            cy.xpath("//input[@name='recurringEndDate']").type('2022-12-30')                               //schedule on end date
            cy.wait(2000)
        //  cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click()          //for send
       //   cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root').click()                                 //For preview
            cy.get(':nth-child(9) > .MuiButtonBase-root').click()                                      //for reset
            })
    })


    it('List all table head',function(){

        cy.get('[tabindex="-1"] > .MuiTab-wrapper').click({force:true})                                //go to List all 
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').contains('Status')              //
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(2)').contains('PushNotificationId')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(3)').contains('BusinessID')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(4)').contains('BusinessName')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(5)').contains('Service ID(s)')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(6)').contains('Distance(km)')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(7)').contains('Schedule Type')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(8)').contains('Notification Scheduled/Pushed On Time')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(9)').contains('Start Date')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(10)').contains('End Date')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(11)').contains('Notification Image')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(12)').contains('Notification')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(13)').contains('Notification Name')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(14)').contains('Consumers')
    })

    it('List all table data',function(){
        cy.get('.jss605 > :nth-child(2) > :nth-child(1) > :nth-child(1) > div').contains('Expired')                        //validation for status
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4)').should('include.text','Raj Medical')                                                  //validation for buisness name
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(6)').contains('10')                                          //validation for distance
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(7)').contains('Once-Now')                                           //validation for schedule type
        cy.get(':nth-child(1) > :nth-child(12) > .MuiTable-root > .MuiTableBody-root > :nth-child(2) > .MuiTableCell-root').contains('Test Push notification')                                            //validation for notification
   
    })
 it('List all Search',function(){

    cy.get('#panel1a-header').click({force:true})                             //click on search

    .then('search by business name',function(){
        cy.xpath('//input[@name="business"]').type('Morya')                       //search by buinsness name
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4)').should('include.text','Morya')          //validation for buiness name
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset
    })
    .then('search by notification title',function(){
        cy.xpath('//input[@name="notificationTitle"]').type('test')                   //search by notification title
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.get(':nth-child(1) > :nth-child(12) > .MuiTable-root > .MuiTableBody-root > :nth-child(1) > .MuiTableCell-root').should('include.text','test')           //  validation for notification title search
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset
    })
    .then('search by notification push on',function(){
        cy.xpath('//input[@name="createdAt"]').click()                                      //search by notification push on
        cy.xpath('//li[@data-range-key="Last Month"]').click()                             //select range Last Month
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.get('.jss605 > :nth-child(2) > :nth-child(1) > :nth-child(8)').should('include.text','Nov')          //validation for month
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset

        })
    .then('search by start and end date',function(){
        cy.xpath("//input[@name='filterStartDate']").type('2022-10-01')             //start date
        cy.xpath("//input[@name='filterEndDate']").type('2022-10-30')              //End date
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy .wait(1000)
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset  

    })
    .then('Search by Once-now',function(){
        cy.xpath("//input[@type='radio'][@value='Once-Now']").check()                  //Select once now radio button
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.get('.jss605 > :nth-child(2) > :nth-child(1) > :nth-child(7)').should('include.text','Once-Now')      //validation for once now
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset  
    }) 
    .then('search by Once-Schedule',function(){

        cy.xpath("//input[@type='radio'][@value='Once-Schedule']").check()                  //Select Once-Schedule radio button
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.wait(3000)
        cy.get('.jss605 > :nth-child(2) > :nth-child(1) > :nth-child(7)').should('include.text','Once-Schedule')      //validation for Once-Schedule
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset  
    })  
    .then('search by recurring',function(){

        cy.xpath("//input[@type='radio'][@value='Recurring']").check()                  //Select Recurring radio button
        cy.get(':nth-child(9) > .MuiButtonBase-root').click({force:true})                 //click on search
        cy.wait(3000)
        cy.get('.jss605 > :nth-child(2) > :nth-child(1) > :nth-child(7)').should('include.text','Recurring')      //validation for Recurring
        cy.get(':nth-child(8) > .MuiButtonBase-root').click({force:true})                //click on reset  
    })
 })
 it('Export',function(){
  //  cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained']").click()         //for bulk export
   //  cy.xpath('//*[@id="simple-tabpanel-1"]/div/div[2]/div/div/div[2]/table/tbody/tr[1]/td[12]/div/button').click({force:true})

 })

})