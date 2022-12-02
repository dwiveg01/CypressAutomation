Feature: Home page validation


 Scenario Outline: TC#001_HomeTestCase
 Given user lands on website
 When user fills the form "<name>","<gender>","<password>"

         Examples:
        |   name    |   gender  |   password     |   
        | Gaurav    | Female    |  admin1223     |
        | Amit      | Male      |  admin1223     |





Scenario Outline: TC#002_HomeTestCase
Given user lands on website
When user fills the form "<name>","<gender>","<password>"

         Examples:
        |   name    |   gender  |   password    |   
        | Gaurav    | Female    | admin1223     |



Scenario Outline: TC#003_PDPTestCase_Validation
Given user lands on website
When user fills the form "<name>","<gender>","<password>"
And user clicks on shop link
And user selects the product "<product_name>" in product page
Then user clicks on checkout button


          Examples:
 
        |   name    |   gender  |   password    |  product_name |
        |  Gaurav   |  Female   |  admin1223    |  Nokia Edge   |   

        