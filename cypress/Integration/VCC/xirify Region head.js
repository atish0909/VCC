///<reference types='cypress' />

describe('Xirify',function(){
   

    it('Add Region Head',function(){
        cy.visit("https://vulture.xirify.com/")
        cy.xpath("//input[@id='username']").type('mainAdmin')
        cy.xpath("//input[@id='password']").type("mainAdmin")
        cy.xpath("//span[@class='MuiButton-label']").click()
        cy.wait(2000)                                             //login code

        cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
        cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary']").should('be.visible').click({force: true})            //for add new region
        cy.xpath("//input[@placeholder='First Name']").type('')                    //for first name
        cy.xpath("//input[@placeholder='Last Name']").type('')                     //for last name
        cy.xpath("//input[@placeholder='Email']").type('')                        //for mail
        cy.xpath("//input[@placeholder='Contact Number']").type('')               //for contact
        cy.xpath("//input[@placeholder='Username']").type('')                     //for username
        cy.xpath("//input[@placeholder='Password']").type('')                     //for Pssword
        cy.get('.MuiGrid-grid-xs-12 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-mutiple-checkbox').click({force:true})       //Assigne region
        cy.wait(2000)
       cy.xpath('//*[@id="menu-assignedRegions"]/div[3]/ul/li[2]/span[1]/span[1]/input').check()
       cy.xpath('/html/body/div[3]/div[3]/form/div[3]/div/div[2]/button').click({force: true})                 //for cancel
     //  cy.xpath('/html/body/div[3]/div[3]/form/div[3]/div/div[3]/button').click({force: true})                 //for save

                              

     })

     it('search by ',function(){

      cy.xpath("//div[@class='MuiButtonBase-root MuiExpansionPanelSummary-root']").click()                   //for search
      .then('Search by username',function(){
      cy.xpath("//input[@name='username']").type('')                                                 //by username
     cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
     cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[1]').contains('')                                              //Validation by username
     cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                                    //for reset
       cy.xpath("//input[@name='email']").type('anagham@valueaddsofttech.com')                                                        //by email
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
       cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[5]').contains('anagham@valueaddsofttech.com')                                              // Validation by email
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                              //for reset
      })
    
     .then('search by first name',function(){
        cy.xpath("//input[@name='firstName']").type('Test')                                                    //by first name
        cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
        cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[2]').contains('Test')                                               //Validation by first name
        cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                              //for reset

     })
     .then('search by last name',function(){
       cy.xpath("//input[@name='lastName']").type('k',{force: true})                                                       //by last name
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
       cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[3]').contains('K')                                               //Validation by last name
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                              //for reset
     })
     .then('search by pincode',function(){
      cy.xpath("//input[@name='pinCode']").type('411021')                                                  //by pincode
      cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
      cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[2]/td[7]').contains('411021')                                               //Validation by pincode
      cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                              //for reset
     })
     .then('search by region',function(){
       cy.xpath('//*[@id="demo-mutiple-checkbox"]').click()                                                            //by region
       cy.xpath('//*[@id="menu-assignedRegions"]/div[3]/ul/li[2]/span[1]/span[1]/input').click({force: true})           //to check particular region
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
       cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[2]/td[6]').contains('Pashan')                                              //validation by region
       cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                             //for reset
     })
     .then('search by status',function(){
      cy.xpath('//*[@id="mui-component-select-activeInactiveStatus"]').click({force: true})                       //search by status
      cy.xpath('//*[@id="menu-activeInactiveStatus"]/div[3]/ul/li[1]/div/span').click({force: true})              // Active status
      cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth']").click({force: true})   //for search
     
      cy.xpath("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-fullWidth']").click({force: true})                               //for reset
     // cy.xpath("//div[@class='MuiButtonBase-root MuiExpansionPanelSummary-root']").click({force: true})                   //for search
     })

    })

     it('Active/Inactive',function(){
      cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[9]/label/span[1]/span[1]/span[1]/input').uncheck({force: true})             // For uncheck   
      cy.wait(4000)
      cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[9]/label/span[1]/span[1]/span[1]/input').check({force: true})               // For check 
     })
      
      
      it('edit',function(){
           cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[3]/div/div/div[2]/table/tbody/tr[1]/td[10]/button').click({force: true})           //For Edit
           cy.xpath("//input[@placeholder='First Name']").type('')          //for FirstName
           cy.wait(1000)
           cy.xpath("//input[@placeholder='Last Name']").type('')           //for LastName
           cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()      //for cancel
         //  cy.get(':nth-child(3) > .MuiButtonBase-root').click()      //for save
      })
    })

  
