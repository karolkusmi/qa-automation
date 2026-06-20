Feature: Login

    Scenario: Login with valid credentials 
        Given I am on the login page
        When I login with valid credentials
        Then I should see the inventory page

    Scenario: Login with empty username
        Given I am on the login page
        When I enter an empty username
        Then I should see an error message      
        