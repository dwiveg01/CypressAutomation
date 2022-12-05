import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

import HomePage from '../../Integration/pageObjects/HomePage'
import ProductPage from '../../Integration/pageObjects/ProductPage'

const homePage=new HomePage
const productPage=new ProductPage 

Given('user lands on website', () => {

    homePage.visitLogin()
  
  });
  
When('user fills the form {string},{string},{string}',function(userName,userGender,userPassword){

    homePage.getName().type(userName)
    homePage.getGender().select(userGender)
    homePage.getPassword().type(userPassword)
    
})

