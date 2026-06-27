Feature: Login

    Scenario: Log in with valid credentials 
        Given I am on the login page
        When I log in with valid credentials
        Then I should see the inventory page

    Scenario: Log in with empty username
        Given I am on the login page
        When I enter an empty username
        Then I should see an error message      

    Scenario: Log in with blocked user
        Given I am on the login page
        When I log in with blocked credentials
        Then I should see a locked-out message 