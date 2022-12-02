import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../Integration/pageObjects/HomePage'
import ProductPage from '../../Integration/pageObjects/ProductPage'

const homePage=new HomePage
const productPage=new ProductPage 


And ('user clicks on shop link',()=>{

    homePage.getShopTab().click()


})
 And ('user selects the product {string} in product page',function(productName){
    cy.selectProduct(productName)

 })


 Then ('user clicks on checkout button',()=>{
    productPage.getCheckoutButton().click()
    productPage.getCheckoutFinalButton().click()
    cy.log("Test case passed.")


 })