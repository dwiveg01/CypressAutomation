
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('Scenario 4: Form Valudations',()=>{
  
  let loginData
   
   before(() => {
   cy.fixture('login').then(function(data){
   loginData=data

   })
  })

  beforeEach(() => {
    cy.visit('/')
     
  })
it('Test Case 1 : Filling Form',()=>{

     const homePage=new HomePage

     homePage.getName().type(loginData.name)
     homePage.getGender().select(loginData.gender)
     homePage.getPassword().type(loginData.password)

})


it('Test Case 2 : Two way data binding test',()=>{

  const homePage=new HomePage
  
  homePage.getName().should('have.attr','minlength','2')
  homePage.getName().type(loginData.name)
  homePage.getTwoBindingName().should('have.value',loginData.name)
  homePage.getEmail().should('have.attr','type','text')
  homePage.getEnterpreneurRadioButton().should('be.disabled')
  
})

it('Test Case 3: Add the product to Cart as per name',()=>{

  const homePage=new HomePage
  const productPage=new ProductPage 
  
  homePage.getShopTab().click()
  cy.selectProduct(loginData.productName)
  
  productPage.getCheckoutButton().click()
  productPage.getCheckoutFinalButton().click()
  
  
})


   })

