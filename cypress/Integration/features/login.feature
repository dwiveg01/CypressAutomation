Feature: Login Page Validation

    Scenario Outline: TC#004_PDPTestCase_Validation
        Given user lands on website
        When user fills the form "<name>","<gender>","<password>"
        And user selects the product "<product_name>" in product page
        Then user clicks on checkout button


    Examples:
 
    |   name    |   gender  |   password    |  product_name |
    |  Gaurav   |  Female   |  admin1223    |  Nokia Edge   |             


Scenario Outline: TC#005_PDPTestCase_Validation
Given user lands on website
When user fills the form "<name>","<gender>","<password>"
And user clicks on shop link
And user selects the product "<product_name>" in product page
Then user clicks on checkout button


    Examples:
 
    |   name    |   gender  |   password    |  product_name |
    |  Gaurav   |  Female   |  admin1223    |  Nokia Edge   |              