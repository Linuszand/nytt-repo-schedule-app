Feature: Login Logout

    Scenario: Successful login info
        Given that I am on the login page
        When I click on email box and type "exempel@school.net"
        And I click on password box and type "abc123"
        And I click on login button
        Then I am on home page

    Scenario: Unsuccessful login attempt
        Given that I am on the login page
        When I click on email box and type "asd@school.net"
        And I click on password box and type "asd123"
        And I click on login button
        Then I am on login page

    Scenario: Logout
        Given that I am on the login page
        When I click on email box and type "exempel@school.net"
        And I click on password box and type "abc123"
        And I click on login button
        And I click on Logout button
        Then I am on login page




