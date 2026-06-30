Feature: Login

    Scenario: Log in with valid credentials 
        Given I am on the login page
        When I log in with "<username>" and "<password>"
        Then I should see "<result>"

    Examples:

    | username        | password     | result
    | standard_user   | secret_sauce | inventory page
    |                 | secret_sauce | error message
    | locked_out_user | secret_sauce | locked_out message

 