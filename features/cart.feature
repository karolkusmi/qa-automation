Feature: Cart

    Scenario: Adding a product to the cart
    Given I am on the login page
    And I log in with valid credentials
    When I add a product to the cart
    Then I should see one product in the cart 

    Scenario: Removing an item from the cart
    Given I am on the login page
    And I log in with valid credentials 
    And I add a product to the cart
    And I go to the cart page 
    When I remove the item
    Then I should see an empty cart 

    Scenario: Adding three items to the cart
    Given I am on the login page
    And I log in with valid credentials
    When I add three items to the cart
    Then I should see three items in the cart 