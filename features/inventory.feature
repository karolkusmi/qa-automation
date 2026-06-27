Feature: Inventory

    Scenario: The inventory page displays six products 
        Given I am on the login page 
        When I log in with valid credentials
        Then I see six products on the inventory page

    Scenario: The first product visible is Sauce Labs Backpack
        Given I am on the login page
        When I log in with valid credentials
        Then I see that first product is Sauce Labs Backpack