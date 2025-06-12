Feature: Ecommerce Application UI Functional Features

    @Regression @EcomFunctionality @EcomTest
    Scenario: Verify Logout Functionality
        When User clicks on signout button
        Then User is logged out

    @Regression @EcomFunctionality @EcomTest
    Scenario: Verify View Product Functionality
        When User clicks on a View button for "ZARA COAT 3"
        Then Verify User is able to view the product details
        Then User has option to add the product to the cart

    @Regression @EcomFunctionality @EcomTest
    Scenario: Verify Add to Cart/Remove from Cart Functionality
        When User adds "ZARA COAT 3" to the cart
        Then User is able to view the product in the cart
        Then User is able to remove the product from the cart
        Then User is able to view the cart as empty
