Feature: get_output_from_input
  Scenario: Get output from input.
    Given user is on the home screen
    When user enters some input
    When user clicks send
    Then then output should show
