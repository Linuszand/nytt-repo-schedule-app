Feature: Add teacher

  Background:
    Given that I am logged in

  Scenario: Type in teacher info
    Given That I am on the create page
    When I click on the email box and type "asd@gmail.com"
    And I click on the password box and type "asd123"
    And I click on the first-name box and type "Linus"
    And I click on the last-name box and type "Zackrisson Andersson"
    And I click on the initials box and type "LZA"
    And I click on the phone box and type "0704324417"
    And I click on color and select a color
    And I click on roles and select a role
    And Lastly click on the save button
    Then I go to the teachers page
    And I should have created a teacher

# Scenario: Type in teacher info hidden
#   Given That I am on the create page
#   When I click on the email box and type "asd@gmail.com"
#   And I click on the password box and type "asd123"
#   And I click on the first-name box and type "Linus"
#   And I click on the last-name box and type "Zackrisson Andersson"
#   And I click on the initials box and type "LZA"
#   And I click on the phone box and type "0704324417"
#   And I click on color and select a color
#   And I click on roles and select a role
#   And I click on hide
#   And Lastly click on the save button
#   Then I should have created a teacher

# Scenario: Edit teacher
#   Given That I am on the teacher page
#   When I click on the edit button for Ex Exempel
#   And I click on the email box and type "okey@gmail.com"
#   And I click on the password box and type "ney123"
#   And I click on the first-name box and type "Rey"
#   And I click on the last-name box and type "Zey"
#   And I click on the initials box and type "RZ"
#   And I click on the phone box and type "0701323417"
#   And I click on color and select a color
#   And I click on roles and select a role
#   And I click on hide
#   And Lastly click on the save button
#   Then I should have made changes to a teachers info


