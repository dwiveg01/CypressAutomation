class ProductPage{

    getCheckoutButton(){
      return  cy.xpath('//a[contains(text(),"Checkout")]')
    }

    getCheckoutFinalButton(){
        return cy.xpath('//button[contains(text(),"Checkout")]')
    }

}
export default ProductPage