class HomePage{

    

    getName(){
        return cy.get('input[name="name"][class="form-control ng-untouched ng-pristine ng-invalid"]')
    }

    getGender(){
        return cy.get('select[id="exampleFormControlSelect1"]')
    }
    getPassword(){
        return cy.get('input[id="exampleInputPassword1"]')
    }


    getTwoBindingName(){
        return cy.get('input[class="ng-untouched ng-pristine ng-valid"]')
    }

    getEmail(){
        return cy.get('input[name="email"]')
    }
    getEnterpreneurRadioButton(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.xpath('//a[text()="Shop"]')
    }



}
export default HomePage



