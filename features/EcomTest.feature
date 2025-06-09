Feature: Ecommerce Application End-to-End

    @EcomTest @EcomEndToEnd @Regression
  Scenario Outline: Placing the Order for different products
    # Given A login to Ecom application with "umangbhatia1993@gmail.com" and "Abcd@12345"
    When Add item "<product>" to cart
    Then Verify "<product>" is added to cart
    When Enter valid billing details and place the Order
    Then Verify order is present in the Orders History Page

    Examples:
      | product         |
      | ZARA COAT 3     |
      | ADIDAS ORIGINAL |
      | IPHONE 13 PRO   |
