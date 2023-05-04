class LoginPage 
{

visit(){
cy.visit('https://clientcaretest.valueaddsofttech.com/#!/login')

}
username(value){
   const ID= cy.get('#inputEmail1')
   ID.clear
   ID.type(value)
}
passwor(value){
   const pass= cy.get('#inputPassword')
   pass.clear
   pass.type(value)
}
button(){
  const submit= cy.get('#btnsignin')
    submit.click()
}

}
export default LoginPage  