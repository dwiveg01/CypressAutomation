Feature: PDP validation

Scenario Outline: TC#006_Valudate_Every_Functionality_Of

Given user lands on website
 When user fills the form "<name>","<gender>","<password>"
 And user clicks on shop link
 And user selects the product "<product_name>" in product page
 Then user clicks on checkout button


 Examples:
 
 |   name    |   gender  |   password    |  product_name |
 |  Gaurav   |  Female   |  admin1223    |  Nokia Edge   |                         