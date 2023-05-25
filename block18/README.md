Unit test
A function called "multiplication" that returns the product of the two input numbers.
1.Expect multiplication(10, 8) to be equal to 80
2.Expect multiplication(-7, 2) to be equal to -14
3.Expect multiplication(0, 8) to be equal to 0
4.Expect multiplication(3.23, 10.8964) to be equal to 35.195372
A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays. 
1.Expect concatOdds([1,5,9],[7,11,13]) to be [1,5,7,9,11,13]
2.Expect concatOdds([2,6],[8,12]) to be []
3.Expect concatOdds([1,8,9],[5,7,4]) to be [1,5,7,9]
4.Expect concatOdds([1,7,5,1],[10,6,12]) to be [1,5,7]
Functional test
A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest. 
1. When the user clicks on the shopping cart checkout button with 1 or more items in their cart they should be given the choice to check out as a guest of as a logged-in user. 
2. When the user tries to click on the shopping cart checkout button with no items in their cart they nothing should happen. The button should be inactive. 
3. If a user is already signed in to the site and they click on the shopping cart it should take them to they finalize payment page. 
4. When a user checks out as a guest they should be sent to the shipping page. 
